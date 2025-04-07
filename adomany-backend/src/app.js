import express from "express";

const PORT = 3522;
const app = express();

app.use(express.json());

app.listen(PORT, ()=>{
    console.log("A webszerver megyen!")
})