import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        password: {
            type: String,
            default: ''
        },
        access: {
            type: Boolean,
            default: true
        },
        accessIds: {
            type: Array,
            default: []
        },
        users: [
            {
                _id: false,
                lookup: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'User'
                },
                socketId: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

const roomModel = mongoose.model('Room', roomSchema);
export default roomModel;