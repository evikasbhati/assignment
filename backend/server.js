import userRoute from "./api/userRoute.js";
import express from "express";
import cors from 'cors';

const app=express()
app.use(cors())
app.use(express.json())
app.use("/api",userRoute);

app.listen(process.env.PORT ,()=>{
console.log("server online")
})