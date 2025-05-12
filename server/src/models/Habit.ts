// server/src/models/Habit.ts
import { Schema, model } from 'mongoose';

const habitSchema = new Schema({
  name:        { type: String, required: true },
  description: String,
  frequency:   { type: String, enum: ['DAILY','WEEKLY'], required: true },
  targetCount: Number,
  owner:       { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Habit = model('Habit', habitSchema);
