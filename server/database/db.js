import mongoose from "mongoose";

export const db = async()=>{
    const mongo_uri = "mongodb+srv://harsh000:harsh_2003@cluster0.ylgpusz.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(mongo_uri);
    console.log("database connected successfully")
  } catch (error) {
    console.log(error.message);
  }
}