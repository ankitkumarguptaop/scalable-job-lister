import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
      index: true 
    },

    sourceUrl: {
      type: String,
      required: true
    },

    externalId: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true,
      index: true
    },

    company: {
      type: String,
      required: true,
      index: true
    },

    location: {
      type: String
    },

    jobType: {
      type: String 
    },

    category: {
      type: String
    },

    description: {
      type: String
    },

    applyUrl: {
      type: String
    },

    publishedAtSource: {
      type: Date
    },

    updatedAtSource: {
      type: Date
    }
  },
  {
    timestamps: true 
  }
);


JobSchema.index(
  { source: 1, externalId: 1 },
  { unique: true }
);

export default mongoose.model("Job", JobSchema);
