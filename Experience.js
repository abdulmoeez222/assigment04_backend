const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    isCurrentPosition: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    responsibilities: [{
      type: String,
    }],
    achievements: [{
      type: String,
    }],
    technologies: [{
      type: String,
    }],
    companyUrl: {
      type: String,
    },
    companyLogoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience; 