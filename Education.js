const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      // Not required as education might be ongoing
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    achievements: [String],
    isOngoing: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Education = mongoose.model('Education', educationSchema);

module.exports = Education; 