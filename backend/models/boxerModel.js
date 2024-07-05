import mongoose from 'mongoose';

const boxerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weightClass: {
      type: String,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
    },
    losses: {
      type: Number,
      required: true,
    },
    draws: {
      type: Number,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Boxer = mongoose.model('Boxer', boxerSchema);
