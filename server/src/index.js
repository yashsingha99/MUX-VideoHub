const { ReceiveMessageCommand, SQSClient } = require("@aws-sdk/client-sqs");
const { S3Event } = require("aws-lambda");


//*-------CONFIGURE SIMPLE QUEUE SERVICE--------//
const client = new SQSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});


//*------- INITILIZATION OF SIMPLE QUEUE SERVICE ::-  To recive there events which are stored newly in queue
//*------- VALIDATE AND PARSE THE EVENT
//*------- TRANSCODE THE VIDEO BY DOCKER
//*------- PUSH THE VIDEO INTO S3 BUCKET (Where all transcoded videos are pushed)
//*------- DELETE THE MESSAGE FROM QUEUE

async function init() {
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
          if (event.Event === "s3:TestEvent") continue;
        }

        for (const record of event.Records) {
          const { s3 } = record;
          console.log("s3", s3);
          const {
            bucket,
            object: { key },
          } = s3;
          //* spin the docker container
          
        }

        //* delete the message from queue
      }
    } catch (error) {
      console.log(error);
    }
  }
}

init();


const dotenv  = require('dotenv')
dotenv.config()

const mongoose  = require('mongoose')



const URI = process.env.URI
const connectDb = async() => {
    try {
        const connect = await mongoose.connect(URI)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}
connectDb()


const app = require("./app")
app.listen(3000, console.log("server is running...."))
