import AdomanyModel from "../models/Adomany.model.js";

export default {

adomanyPut: (req,res) => {
    if(!(req.body.osszeg)){
        return res.sendStatus(400).json({
            error: true,
            message: "Kötelező adatok hiányoznak!"
        });
    }
    const ujAdomany = AdomanyModel.build({
        osszeg: Number(req.body.osszeg)
    });

    if(req.body.nev){
        ujAdomany.set({
            nev: req.body.nev
        });
    }

    ujAdomany.save()
    .then(()=>{
        res.status(201).json({
            error: false,
            message: "Adomány adatai sikeresen tárolva!"
        });
    })
    .catch((err)=>{
        console.error("Az adomány létrehozása sikertelen! Adatbázis hiba!")
        console.error(err)
        res.status(500).json({
            error: true,
            message: "Adatbázissal kapcsolatos probléma!"
        })
    })

},
adomanyGet: (req,res) => {
    const id = Number(req.params.id);

    AdomanyModel.findByPk(id)
    .then((adomany)=>{
        if(adomany === null){
            res.sendStatus(404).json({
                error: true,
                message: "Megadott azonosítójú adomány nem létezik!"
            });
        }else{
            res.sendStatus(200).json({
                error: false,
                message: "Adomány adatai sikeresen lekérdezve",
                donation: adomany 
            });
        }
    })
    .catch((err)=>{
        console.error("Adomány lekérdezése sikertelen!");
        console.error(err);
        res.status(500).json({
            error: true,
            message: "Adatbázis hiba"
        })
    });


},
adomanyPatch: (req,res) => {
    res.sendStatus(405);
},
adomanyDelete: (req,res) => {
    res.sendStatus(501);
},
};