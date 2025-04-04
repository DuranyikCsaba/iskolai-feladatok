import PosztModel from "../models/poszt.js"

export default {
    PosztPut: (req, res) => {

        if(!req.body.tartalom){
            return res.status(400).json({
                error: true,
                message: "A poszt tartalma üres"
            });
        }

        const ujPoszt = PosztModel.build();
        ujPoszt.tartalom = req.body.tartalom;
        ujPoszt.felhasznaloId = req.body.felhasznaloId;


        ujPoszt.save()
        .then(() => {
            res.status(201).json({
                error: false,
                message: "A poszt létrehozása sikeres!"
            })
        })
        .catch((err) => {
            console.error("Hiba történt!");
            console.error(err);
            return res.status(500).json({
                error: true,
                message: "A poszt létrehozása sikertelen! Adatbázis hiba!"
            });
        });
    },
    PosztGet: async (req, res) => {

        try {
            const posztok = await PosztModel.findAll();

            res.status(200).json({
                error: false,
                message: "A posztok sikeresen lekérve!",
                data: posztok
            });
        } catch (error) {
            console.error("Hiba történt a posztok lekérésekor:", error);
            return res.status(500).json({
                error: true,
                message: "Adatbázishiba a posztok lekérésekor!"
            });
        }
    },
    PosztIdGet: async (req, res) => {
        
        try {
            const { id } = req.params;
            const posztById = await PosztModel.findByPk(id);

            if(!posztById){
                return res.status(404).json({
                    error: true,
                    message: "A megadott id-vel nem található poszt!"
                });
            }

            res.status(200).json({
                error: false,
                message: "A poszt sikeresen lekérve!",
                data: posztById
            });

        } catch (error) {
            console.error("Hiba történt a poszt lekérésekor:", error);
            return res.status(500).json({
                error: true,
                message: "Adatbázishiba a poszt lekérésekor!"
            });
        }

    },
    PosztIdDelete: async (req, res) => {

        try {
            const { id } = req.params;
            const posztById = await PosztModel.findByPk(id);

            if(!posztById){
                return res.status(404).json({
                    error: true,
                    message: "A megadott id-vel nem található poszt!"
                });
            }

            await posztById.destroy();

            res.status(200).json({
                error: false,
                message: `A ${id} poszt sikeresen törölve!`,
                data: posztById
            });

        } catch (error) {
            console.error("Hiba történt a poszt törlésekor:", error);
            return res.status(500).json({
                error: true,
                message: "Adatbázishiba a poszt törlésekor!"
            });
        }


        
    },
    PosztIdPatch: async (req, res) => {

        try {
            
            const { id } = req.params;
            const { tartalom } = req.body;

            if(!tartalom){
                return res.status(404).json({
                    error: true,
                    message: "A tartalom nem lehet üres"
                })
            }

            const posztById = await PosztModel.findByPk(id);

            if(!posztById){
                return res.status(404).json({
                    error: true,
                    message: "Nem található poszt ilyen id-val"
                })
            }

            posztById.tartalom = tartalom;
            await posztById.save();

            res.status(200).json({
                error: false,
                message: `A ${id}- idval rendelkező poszt módosítása sikeres`,
                data: posztById
            })



        } catch (error) {
            console.error("Hiba történt a poszt módosításakor:", error);
            return res.status(500).json({
                error: true,
                message: "Adatbázishiba a poszt módosításakor!"
            });
        }
    },
};