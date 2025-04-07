import express from "express";
import db from "./db.js";
import AdomanyModel from "./models/Adomany.model.js"
import AdomanyRouter from "./routers/Adomany.router.js";

const PORT = 3522;
const app = express();

app.use(express.json());

app.use("/api/", AdomanyRouter);

db.authenticate()
.then(()=> {
    console.log("A webszerver megyen!");

    db.modelManager.addModel(AdomanyModel);

    db.sync({ force: true})
    .then(()=>{
        console.log("Az modellek szinkronizációja sikeres!")
        
        app.listen(PORT, ()=>{
            console.log("A webszerver megyen!")
        });
    })
    .catch((err)=> {
        console.error("Az modellek szinkronizációja sikertelen!");
        console.error(err);
    })
})
.catch((err)=> {
    console.error("Az adatbáziskapcsolat lérehozása sikertelen!");
    console.error(err);
})

