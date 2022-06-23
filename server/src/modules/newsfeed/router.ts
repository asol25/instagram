import express from 'express';
import { Manager } from '../../model/data-source';
import { User } from '../../model/Entity/users';
import { Newsfeed } from '../../model/Entity/newsfeed';
const NewsfeedRouter = express.Router();

const UserRepository = Manager.getRepository(User);
NewsfeedRouter.get('/all/newsfeed', async (req, res) => {
    try {
        const Newsfeed = await UserRepository.find();
        res.status(200).json(Newsfeed)
    } catch (error) {
        console.error({ "GET ALL NEWSFEED": error.message || error.response?.data?.messages });
        res.status(500).json({ error: error.message });
    }
});


NewsfeedRouter.get('/:id/newsfeed', async (req, res) => {
    try {
        // const Newsfeed = await UserRepository.findOneBy({ id: req.params.id });
        res.status(200).json(Newsfeed);
    } catch (error) {
        console.error({ "GET ONE NEWSFEED": error.message || error.response?.data?.messages });
        res.status(500).json({ error: error.message });
    }
});

NewsfeedRouter.post('/:id/newsfeed', async (req, res) => {
    const { likes, comment, img } = req.body;
    const id = req.params.id;
    try {
        const user = await UserRepository.findOneBy({ username: "Phan Thanh Ngan" });
        // user.newsfeed = [
        //     new Newsfeed(likes, comment, img)
        // ]
        // UserRepository.save(user);
        res.status(200).json(user);
    } catch (error) {
        console.error({ "POST ONE NEWSFEED": error.message || error.response?.data?.messages });
        res.status(500).json({ error: error.message });
    }
});

export default NewsfeedRouter;