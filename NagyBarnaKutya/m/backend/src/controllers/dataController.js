class DataController {
    async postData(req, res) {
        try {
            const { number, text } = req.body;
            const newData = await Data.create({ number, text });
            res.status(201).json(newData);
        } catch (error) {
            res.status(500).json({ message: 'Error saving data', error });
        }
    }

    async getData(req, res) {
        try {
            const data = await Data.findAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving data', error });
        }
    }
}

module.exports = DataController;