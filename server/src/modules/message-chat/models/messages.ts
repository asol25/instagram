import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true
        },
        room: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Room'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

const messageModel = mongoose.model('Message', messageSchema);
export default messageModel;