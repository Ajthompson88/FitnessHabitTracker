// server/src/models/User.ts
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username:  { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  habits:    [{ type: Schema.Types.ObjectId, ref: 'Habit' }]
});

export const User = model('User', userSchema);
