import express from 'express';
import { 
    createDolgozo, 
    getAllDolgozok, 
    getDolgozoById, 
    deleteDolgozo, 
    updateDolgozo 
} from '../controllers/dolgozoController.js';

const router = express.Router();

router.put('/dolgozo', createDolgozo);
router.get('/dolgozo', getAllDolgozok);
router.get('/dolgozo/:id', getDolgozoById);
router.delete('/dolgozo/:id', deleteDolgozo);
router.patch('/dolgozo/:id', updateDolgozo);

export default router;