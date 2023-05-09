const dotenv = require("dotenv")

dotenv.config();

module.exports={
    serviceName: process.env.SERVIE_MATAKULIAH,
    mongoUlr: process.env.MONGO_URL,
};


