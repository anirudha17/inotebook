const mongoose = require("mongoose");
const mongoURI = "mongodb://admin:adminpassword@159.89.162.247:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;