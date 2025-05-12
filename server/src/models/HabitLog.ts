// server/src/models/HabitLog.ts
import { Schema, model } from 'mongoose';

const habitLogSchema = new Schema({
  habit:     { type: Schema.Types.ObjectId, ref: 'Habit', required: true },
  user:      { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  count:     { type: Number, required: true }
});

export const HabitLog = model('HabitLog', habitLogSchema);
