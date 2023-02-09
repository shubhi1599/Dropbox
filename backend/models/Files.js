import mongoose from "mongoose";
 
var fileSchema = new mongoose.Schema({
    originalname: String,
    name: String
});
 
//Image is a model which has a schema imageSchema
 
export default mongoose.model('Files', fileSchema);