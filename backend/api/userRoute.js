import express from "express";
import db from "../db.js";

const router = express.Router();

const userRoute = router.post("/user/",(req, res)=>{
  try{
    const {name,address}=req.body;
    db.query(`insert into user (name) values(?)`,[name]);
    db.query(`insert into address (address) values(?)`,[address]);
    res.status(200).send("User values inserted");
  }catch (error) {
    res.status(500).send(error);
  }
});

export default userRoute;
