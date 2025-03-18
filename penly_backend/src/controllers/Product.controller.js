export default {
	taskPut: async (req, res) => {
		const { name, price, discount = 0 } = req.body;

		if (!name || !price) {
			return res.status(400).json({ message: 'Name and price are required!' });
		}

		try {
			const newProduct = await Product.create({ name, price, discount });
			return res.status(201).json({ product_id: newProduct.id });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Database error occurred!' });
		}
	},
	taskGet: async (req, res) => {
		const { page = 1, count = 10 } = req.query;

		try {
			const products = await Product.findAll({
			limit: count,
			offset: (page - 1) * count,
			});
			return res.status(200).json({ products });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Database error occurred!' });
		}
	},
	taskPatch: (req, res) => {
		
	},
	taskDelete: (req, res) => {
		
	},
	taskPost: (req, res) => {
		
	},
	tasksGet: (req, res) => {
		
	}
};