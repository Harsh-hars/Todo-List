import mongoose from "mongoose";

const schema = mongoose.Schema({
todo:{
    type:String,
    required:true
}
})

 const model = mongoose.model("todo" , schema)
 export default model