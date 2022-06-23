import express from 'express';
import { Manager } from '../../../model/data-source';
import { User } from '../../../model/Entity/users';
const Newsfeed = express.Router();
const UserRepository = Manager.getRepository(User);

Newsfeed.post('/like', async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


Newsfeed.get('/all/comment', async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

Newsfeed.post('/:id/comment', async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
