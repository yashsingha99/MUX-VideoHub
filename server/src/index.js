const dotenv = require('dotenv')
dotenv.config()


const { ReceiveMessageCommand, SQSClient, DeleteMessageCommand } = require("@aws-sdk/client-sqs");
const { RunTaskCommand, ECSClient } = require("@aws-sdk/client-ecs");
const { S3Event } = require("aws-lambda");
// const {uploadVideoToTempBucket} = require("./service/uploadToTempBucket");


//*-------CONFIGURE SIMPLE QUEUE SERVICE--------//
const client = new SQSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const ecsClient = new ECSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});


//*------- INITILIZATION OF SIMPLE QUEUE SERVICE ::-  To recive there events which are stored newly in queue
//*------- VALIDATE AND PARSE THE EVENT
//*------- TRANSCODE THE VIDEO BY DOCKER
//*------- PUSH THE VIDEO INTO S3 BUCKET (Where all transcoded videos are pushed)
//*------- DELETE THE MESSAGE FROM QUEUE

exports.init = async function init(resolution = { width: "1280", height: "720", name: "720p" }) {

  const command = new ReceiveMessageCommand({
    QueueUrl:
      "https://sqs.ap-south-1.amazonaws.com/339713162856/tempRowQueueS3Videos",
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: 5,
  });

  while (true) {

    const { Messages } = await client.send(command); // it return an array of all messages
    if (!Messages) {
      console.log("No Message in Queue");
      continue;
    }


    try {
      for (const message of Messages) {

        const { MessageId, Body } = message;
        console.log("Message Received", { MessageId, Body });
        if (!Body) continue;

        //* Validate and Parse the event
        const event = JSON.parse(Body); // Event are contains lot of records
        // Ignore the test event
        if ("Service" in event && "Event" in event) {
          if (event.Event === "s3:TestEvent") {
            await client.send(
              new DeleteMessageCommand({  
                QueueUrl:
                  "https://sqs.ap-south-1.amazonaws.com/339713162856/tempRowQueueS3Videos",
                ReceiptHandle: message.ReceiptHandle,
              })
            );
            continue;
          }
        }

        for (const record of event.Records) {
          const { s3 } = record;
          console.log("s3", s3);
          const {
            bucket,
            object: { key },
          } = s3;


          //* spin the docker container
          const runTaskCommand = new RunTaskCommand({
            cluster: "arn:aws:ecs:ap-south-1:339713162856:cluster/practical-kangaroo-0knpop",
            taskDefinition: "arn:aws:ecs:ap-south-1:339713162856:task-definition/video-transcoder",
            // service: "arn:aws:ecs:ap-south-1:339713162856:service/stable-frog-9zi5i5/dev-service-fj6wb6b9",
            overrides: {
              containerOverrides: [
                {
                  name: "video-transcoder",
                  environment: [
                    { name: "BUCKET_NAME", value: bucket.name },
                    { name: "KEY", value: key },
                    { name: "RES_WIDTH", value: resolution.width },
                    { name: "RES_HEIGHT", value: resolution.height },
                    { name: "RES_NAME", value: resolution.name || `${resolution.height}p` },
                    { name: "AWS_ACCESS_KEY_ID", value: process.env.ACCESS_KEY_ID },
                    { name: "AWS_SECRET_ACCESS_KEY", value: process.env.SECRET_ACCESS_KEY},
                  ],
                },
              ],
            },
            launchType: "FARGATE",
            networkConfiguration: {
              // securityGroups: ["sg-0c8f1b2d3e4
              awsvpcConfiguration: {
                securityGroups: ["sg-0854d0f67e7f76d65"],
                subnets: ["subnet-04eb64a1ed078e759",
                  "subnet-02e759bd9f3ad9243",
                  "subnet-0f4bb9d8fbf89e94f"],
                assignPublicIp: "ENABLED",
              },
            },
          });
           await ecsClient.send(runTaskCommand);

 

           //* delete the message from queue
           await client.send(
            new DeleteMessageCommand({
              QueueUrl:
                "https://sqs.ap-south-1.amazonaws.com/339713162856/tempRowQueueS3Videos",
              ReceiptHandle: message.ReceiptHandle,
            })
          );

        }

      }
    } catch (error) {
      console.log(error);
    }
  }

}

// init();

const app = require("./app");
// const { uploadVideo } = require('./controller/video.controller');
app.listen(3000, () => console.log("server is running...."))
