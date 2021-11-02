const mongoose = require("mongoose")
mongoose.Promise = global.Promise;


const universitiesSchema = new mongoose.Schema(
    {
        alpha_two_code: {type:String},
        country: {type:String},
        domain: {type:String},
        name: {type:String},
        web_page: {type:String}
    }
    )
module.exports = mongoose.model("universities", universitiesSchema)
