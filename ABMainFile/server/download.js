//const express=require("express");
import express from 'express';
//const cors= require("cors");
import cors from 'cors';
const app1=express();
app1.use(cors());

app1.get("/",(req,res)=>{
    res.download("./file.zip");
});

app1.listen(4000);