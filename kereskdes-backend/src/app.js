import express from "express"
import db from "./db.js"
import VehicleModel from "./models/Vehicle.model.js";
import VehicleRouter from "./routes/Vehicle.route.js";

const app = express();
const PORT = 3524;

app.use(express.json());

app.use("/api/v1/", VehicleRouter);

db.authenticate()
    .then(() => {
        console.log("Az adatbázis kapcsolat kiépítése sikeres!")

        db.modelManager.addModel(VehicleModel);

        db.sync({ force: true })
        .then(() => {
            console.log("A modellek szinkronizációja sikeres!");

            app.listen(PORT, () => {
                console.log(`A webszerver elindult a http://localhost${PORT}/ URL-en`);
            });
        })
        .catch((err)=> {
            console.error("A modellek szinkrnizációja sikrtelen!");
            console.error(err)
        });

        
    })
    .catch((err) => {
        console.error("Adatbázis kapcsolat kiépítése sikertelen!");
        console.error(err);
    });


