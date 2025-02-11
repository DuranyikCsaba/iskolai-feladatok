import VehicleModel from "../models/Vehicle.model.js";

export default {
    VehiclePut: (res, req) =>{
        if((req.body.marka === undefined)|| (req.body.tipus === undefined) || (req.body.evjarat === undefined) ||(req.body.ar === undefined)){
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
            ujJarmu.szin = req.body.teljesitmeny;
        };

        
        if((req.body.automataValtosE !== undefined)){
            ujJarmu.automataValtosE = req.body.teljesitmeny;
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
    VehiclesGet: (res, req) =>{
        res.sendStatus(501);
    },
    VehicleIdPatch: (res, req) =>{
        res.sendStatus(501);
    },
    VehicleIdDelete: (res, req) =>{
        res.sendStatus(501);
    },
    VehicleIdGet: (res, req) =>{
        res.sendStatus(501);
    },
    VehiclesPost: (res, req) =>{
        res.sendStatus(501);
    },
};