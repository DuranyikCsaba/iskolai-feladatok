import express from express;
import productController from '../controllers/Product.controller.js'

const router = express.Router();

router.put('/products', productController.taskPut);
router.get('/products', productController.tasksGet);
router.get('/products/:id', productController.taskGet);
router.patch('/products/:id', productController.taskPatch);
router.delete('/products/:id', productController.taskDelete);
router.post('/products/:id', productController.taskPost);

export default router;