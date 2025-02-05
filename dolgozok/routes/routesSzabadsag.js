import express from 'express';
import {
    putSzabadsag,
    getSzabadsag,
    getSzabadsagById,
    patchSzabadsag,
    deleteSzabadsag
} from '../controllers/szabadsagController.js';

const router = express.Router();

router.put('/dolgozo/:id/szabadsag', putSzabadsag);
router.get('/dolgozo/:id/szabadsag', getSzabadsag);
router.get('/dolgozo/:id/szabadsag/:szabadsag_id', getSzabadsagById);
router.patch('/dolgozo/:id/szabadsag/:szabadsag_id', patchSzabadsag);
router.delete('/dolgozo/:id/szabadsag/:szabadsag_id', deleteSzabadsag);

export default router;
