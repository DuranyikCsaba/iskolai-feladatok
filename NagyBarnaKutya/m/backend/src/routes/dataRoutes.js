import {express} from 'express';
import {DataController} from '../controllers/dataController';

const router = express.Router();
const dataController = new DataController();

router.post('/data', dataController.postData);
router.get('/data', dataController.getData);

export default router;