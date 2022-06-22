import mongoose from "mongoose";

export const db = () => {
    mongoose.connect('mongodb://localhost:27017/Stores').then(() => console.log('connect Database!')).catch((err) => console.error(err));
};

export default db