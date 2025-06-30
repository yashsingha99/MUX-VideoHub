
const dotenv  = require('dotenv')
dotenv.config()

const mongoose  = require('mongoose')



const URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mux-video-hub';
module.exports.connectDB = async() => {
    try {
        const connect = await mongoose.connect(URI)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

