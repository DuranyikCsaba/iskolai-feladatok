import express from "express"
import db from "./src/config/db.js"
import PosztModel from "./src/models/poszt.js"

const app = express();
const PORT = 3524;

app.use(express.json());

db.authenticate()
.then(() => {
    console.log("Az adatbázis kapcsolat kiépítése sikeres!")

    db.modelManager.addModel(PosztModel);

    db.sync({ force: true })
    .then(()=>{
        console.log("A modellek szinkronizálása sikeres!");

        app.listen(PORT, () => {
            console.log(`A webszerver elindult a  http://localhost${PORT}/ -URL-en`);
        });
    })
    .catch((err)=> {
        console.error("A modellek szinkronizációja sikertelen!");
        console.error(err);
    });

    
})
.catch((err) => {
    console.error("Adatbázis kapcsolat kiépítése sikertelen!");
    console.error(err);
});
