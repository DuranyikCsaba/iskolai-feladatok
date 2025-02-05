import e from 'express';
import Szabadsag from '../models/szabadsag.js';
import Dolgozo from '../models/dolgozo.js';

export const putSzabadsag = async (req, res) => {
    const dolgozo_id = req.params.id;
    const { kezdete, vege, oka } = req.body;

    if(!dolgozo_id){
        return res.status(404).json({ message: 'Hiányzó dolgozó azonosító!'});
    }

    if(!kezdete || !vege || !oka){
        return res.status(400).json({ message: 'Hiányzó adatok!' });
    }

    try{
        const szabadsag = await Szabadsag.create({
            dolgozo_id, kezdete, vege, oka
        });

        res.status(201).json(szabadsag);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}


export const getSzabadsag = async (req, res) => {
    const dolgozo_id = req.params.id;

    if(!dolgozo_id){
        return res.status(404).json({ message: 'Hiányzó dolgozó azonosító!'});
    }

    try{
        const szabadsagok = await Szabadsag.findAll({
            where: {
                dolgozo_id
            }
        }
    );
        res.status(200).json(szabadsagok);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const getSzabadsagById = async (req, res) => {
    const dolgozo_id = req.params.id;
    const szabadsag_id = req.params.szabadsag_id;

    if(!dolgozo_id || !szabadsag_id){
        return res.status(404).json({ message: 'Hiányzó dolgozó azonosító!'});
    }


    try{
        const szabadsag = await Szabadsag.findOne({
            where: {
                dolgozo_id,
                id: szabadsag_id
            }
        }
    );
        res.status(200).json(szabadsag);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const patchSzabadsag = async (req, res) => {
    const dolgozo_id = req.params.id;
    const szabadsag_id = req.params.szabadsag_id;
    const { kezdete, vege, oka } = req.body;

    if(!dolgozo_id){
        return res.status(404).json({ message: 'Hiányzó dolgozó azonosító!'});
    }

    if(!szabadsag_id){
        return res.status(404).json({ message: 'Nincws ilyen azonosítójú szabadság!'});
    }

    if(!kezdete || !vege || !oka){
        return res.status(400).json({ message: 'Hiányzó adatok!' });
    }

    try{
        const szabadsag = await Szabadsag.findOne({
            where: {
                dolgozo_id,
                id: szabadsag_id
            }
        });

        if(!szabadsag){
            return res.status(404).json({ message: 'Nincs ilyen azonosítójú szabadság!' });
        }

        await szabadsag.update({
            kezdete, vege, oka
        });

        res.status(200).json({
            message: "Sikeres módosítás",
        });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const deleteSzabadsag = async (req, res) => {
    const dolgozo_id = req.params.id;
    const szabadsag_id = req.params.szabadsag_id;

    if(!dolgozo_id || !szabadsag_id){
        return res.status(404).json({ message: 'Hiányzó dolgozó azonosító!'});
    }

    try{
        const szabadsag = await Szabadsag.findOne({
            where: {
                dolgozo_id,
                id: szabadsag_id
            }
        });

        if(!szabadsag){
            return res.status(404).json({ message: 'Nincs ilyen azonosítójú szabadság!' });
        }

        await szabadsag.destroy();

        res.status(200).json({
            message: "Sikeres törlés",
        });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}