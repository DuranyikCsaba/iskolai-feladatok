import Dolgozo from '../models/dolgozo.js';

export const createDolgozo = async (req, res) => {
    const { vezeteknev, keresztnev, szul_hely, szul_datum, adoszam, TAJ_szam, lakhely, telefonszam,
        email, ertesitesi_nev, ertesitesi_telefonszam, ertesitendo_jelleg, statusz, szerzodes_tipusa, munkakor
     } = req.body;

    if(
        !vezeteknev || !keresztnev || !szul_hely || !szul_datum || !adoszam || !TAJ_szam || !lakhely || 
        !telefonszam || !email || !ertesitesi_nev || !ertesitesi_telefonszam || !ertesitendo_jelleg || 
        statusz === undefined || szerzodes_tipusa === undefined || !munkakor 
    ){
        return res.status(400).json({ message: 'Hiányzó adatok!' });
    }

    try{
        const existingDolgozo = await Dolgozo.findOne({ where: { email: email } });
        if(existingDolgozo){
            return res.status(409).json({ message: 'Ez az email cím már regisztrálva van!' });
        }

        const newDolgozo = await Dolgozo.create({
            vezeteknev, keresztnev, szul_hely, szul_datum, adoszam, TAJ_szam, lakhely, telefonszam,
            email, ertesitesi_nev, ertesitesi_telefonszam, ertesitendo_jelleg, statusz, szerzodes_tipusa, munkakor
        });

        res.status(201).json({
            message: "Sikeres létrehozás",
        });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

export const getAllDolgozok = async (req, res) => {
    try{
        const dolgozok = await Dolgozo.findAll();
        res.status(200).json(dolgozok);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

export const getDolgozoById = async (req, res) => {
    const id = req.params.id;
    try{
        const dolgozo = await Dolgozo.findByPk(id);
        if(!dolgozo){
            return res.status(404).json({ message: 'Nincs ilyen azonosítójú dolgozó!' });
        }
        res.status(200).json(dolgozo);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

export const deleteDolgozo = async (req, res) => {
    const id = req.params.id;
    try{
        const dolgozo = await Dolgozo.findByPk(id);
        if(!dolgozo){
            return res.status(404).json({ message: 'Nincs ilyen azonosítójú dolgozó!' });
        }
        await dolgozo.destroy();
        res.status(200).json({ message: 'Sikeres törlés!' });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

export const updateDolgozo = async (req, res) => {
    const id = req.params.id;
    const { vezeteknev, keresztnev, szul_hely, szul_datum, adoszam, TAJ_szam, lakhely, telefonszam,
        email, ertesitesi_nev, ertesitesi_telefonszam, ertesitendo_jelleg, statusz, szerzodes_tipusa, munkakor
     } = req.body;

    if(
        !vezeteknev || !keresztnev || !szul_hely || !szul_datum || !adoszam || !TAJ_szam || !lakhely || 
        !telefonszam || !email || !ertesitesi_nev || !ertesitesi_telefonszam || !ertesitendo_jelleg || 
        statusz === undefined || szerzodes_tipusa === undefined || !munkakor 
    ){
        return res.status(400).json({ message: 'Hiányzó adatok!' });
    }

    try{
        const dolgozo = await Dolgozo.findByPk(id);
        if(!dolgozo){
            return res.status(404).json({ message: 'Nincs ilyen azonosítójú dolgozó!' });
        }

        await dolgozo.update({
            vezeteknev, keresztnev, szul_hely, szul_datum, adoszam, TAJ_szam, lakhely, telefonszam,
            email, ertesitesi_nev, ertesitesi_telefonszam, ertesitendo_jelleg, statusz, szerzodes_tipusa, munkakor
        });

        res.status(200).json({ message: 'Sikeres frissítés!' });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};