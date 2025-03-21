import Product from '../models/Product';

export default {
    taskPut: async (req, res) => {
        const { name, price, discount = 0 } = req.body;

        if (!name || !price) {
            return res.status(400).json({ error: true, message: 'Kötelező adatok hiányoznak!' });
        }

        try {
            const newProduct = await Product.create({ name, price, discount });
            return res.status(201).json({ error: false, message: 'Termék sikeresen létrehozva!', product_id: newProduct.id });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Adatbázis hiba történt!' });
        }
    },

    taskGet: async (req, res) => {
        const { page = 1, count = 10 } = req.query;

        try {
            const products = await Product.findAll({
                limit: count,
                offset: (page - 1) * count,
            });
            return res.status(200).json({ error: false, products });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Adatbázis hiba történt!' });
        }
    },

    tasksGet: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: true, message: 'Ilyen azonosítóval nincs termék tárolva!' });
            }
            return res.status(200).json({ error: false, product });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Adatbázis hiba történt!' });
        }
    },

    taskPatch: async (req, res) => {
        const { id } = req.params;
        const updates = req.body;

        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: true, message: 'Ilyen azonosítóval nincs termék tárolva!' });
            }

            await product.update(updates);
            return res.status(200).json({ error: false, message: 'Termék adatainak módosítása sikeres!' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Adatbázis hiba történt!' });
        }
    },

    taskDelete: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: true, message: 'Ilyen azonosítóval nincs termék tárolva!' });
            }

            await product.destroy();
            return res.status(204).send();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: true, message: 'Adatbázis hiba történt!' });
        }
    },

    taskPost: (req, res) => {
        return res.status(405).json({ error: true, message: 'Nem engedélyezett művelet!' });
    }
};