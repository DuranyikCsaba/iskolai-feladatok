import VehicleModel from "../models/Vehicle.model.js";

export default {
    VehiclePut: (req, res) =>{

        console.log( req.body );

        if((!req.body.marka) || (!req.body.tipus) || (!req.body.evjarat) || (!req.body.ar)){
            return res.status(400).json({
                error: true,
                message: "A kötelező adatok hiányoznak!"
            });
        }
        const ujJarmu = VehicleModel.build();
        ujJarmu.marka = req.body.marka;
        ujJarmu.tipus = req.body.tipus;
        ujJarmu.evjarat = req.body.evjarat;
        ujJarmu.ar = req.body.ar;

        if((req.body.teljesitmeny !== undefined)){
            ujJarmu.teljesitmeny = req.body.teljesitmeny;
        };
        
        if((req.body.szin !== undefined)){
            ujJarmu.szin = req.body.szin;
        };

        
        if((req.body.automataValtosE !== undefined)){
            ujJarmu.automataValtosE = req.body.automataValtosE;
        };

        ujJarmu.save()
        .then(()=>{
            res.status(201).json({
                error: false,
                message: "Új jármű létrehozása sikeres!"
            })
        })
        .catch((err) => {
            console.error("Jármű létrehozása során hiba történt!");
            console.error(err);
            res.status(500).json({
                error: true,
                message: "A jármű létrehozása sikertelen! Adatbázis hiba történt!"
            });
        });

    },
    VehiclesGet: (req, res) =>{

        VehicleModel.findAll()
        .then((vehicles) =>{
            res.status(200).json({
                error: false,
                vehicles
            });
        })
        .catch((err) => {
            console.error("A jármű létrehozása során hiba történt");
            console.error(err);
            res.status(500).json({
                error: true,
                message: "A járművek lekérdezése során adatbázis hiba történt!"
            })
        })

    },
    VehicleIdPatch: (req, res) =>{
        res.sendStatus(501);
    },
    VehicleIdDelete: (req, res) =>{
        res.sendStatus(501);
    },
    VehicleIdGet: (req, res) =>{
        const id = req.params.id;
        VehicleModel.findByPk(id)
        .then((vehicle) => {
            if(vehicle){
            res.status(200).json({
                error: false,
                message: "A jármű lekérdezése sikeres",
                vehicle
            })
        }else{
            res.status(404).json({
                error: true,
                message: "Ilyen jármű nem létezik",
            })
        }
        })
        .catch((err) => {
            console.error("Egy jármű lekérdezése során adatbázis hiba történt");
            console.error(err)
            res.status(500).json({
                error: true,
                message: "Egy jármű lekérdezése során adatbázis hiba történt"
            })
        });

    },
    VehiclesPost: (req, res) =>{
        res.sendStatus(501);
    },
};