import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { db } from "./database/db.js";
import { router } from "./routes/route.js";
const app = express();

app.use("/",cors())
app.use(express.json())
app.use("/api",router)


app.get("/",(req,res)=>{
res.send("hello from server")
})

const port = 5000;

db();

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})