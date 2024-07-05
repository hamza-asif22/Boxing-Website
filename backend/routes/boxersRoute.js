import express from 'express';
import { Boxer } from '../models/boxerModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const { name, weightClass, wins, losses, draws, nationality, birthDate } = request.body;
        
        if (!name || !weightClass || wins === undefined || losses === undefined || draws === undefined || !nationality || !birthDate) {
            return response.status(400).send({
                message: 'Please fill all the fields',
            });
        }

        const newBoxer = { name, weightClass, wins, losses, draws, nationality, birthDate };

        const boxer = await Boxer.create(newBoxer);
        return response.status(201).send(boxer);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const boxers = await Boxer.find({});
        return response.status(200).json({
            count: boxers.length,
            data: boxers,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const boxer = await Boxer.findById(id);
        if (!boxer) {
            return response.status(404).send({ message: 'Boxer not found' });
        }
        return response.status(200).json(boxer);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { name, weightClass, wins, losses, draws, nationality, birthDate } = request.body;

        if (!name || !weightClass || wins === undefined || losses === undefined || draws === undefined || !nationality || !birthDate) {
            return response.status(400).send({
                message: 'Send all required fields: name, weightClass, wins, losses, draws, nationality, birthDate',
            });
        }

        const { id } = request.params;
        const result = await Boxer.findByIdAndUpdate(id, { name, weightClass, wins, losses, draws, nationality, birthDate }, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Boxer not found' });
        }

        return response.status(200).send({ message: 'Boxer updated successfully', boxer: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Boxer.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Boxer not found' });
        }

        return response.status(200).send({ message: 'Boxer deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
