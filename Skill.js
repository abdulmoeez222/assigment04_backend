const mongoose = require('mongoose');

const skillSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile', 'Design', 'Other'],
    },
    proficiencyLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    icon: {
      type: String, // URL to icon or class name for an icon library
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill; 