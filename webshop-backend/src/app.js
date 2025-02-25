import express from "express";

const app = express();
const PORT = 3424;

app.use(express.json());

app.listen(PORT, () => {
    console.log("A backend szerver elindult!");
})