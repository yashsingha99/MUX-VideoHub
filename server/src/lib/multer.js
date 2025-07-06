const multer = require("multer");

const storage = multer.memoryStorage(); // or diskStorage if you want to save temporarily
const upload = multer({ storage });

module.exports = upload;