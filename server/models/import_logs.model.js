import mongoose from "mongoose";

const ImportLogSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true
    },

    sourceUrl: {
      type: String,
      required: true
    },

    startedAt: {
      type: Date,
      required: true
    },

    finishedAt: {
      type: Date
    },

    totalFetched: {
      type: Number,
      default: 0
    },

    totalImported: {
      type: Number,
      default: 0
    },

    newJobs: {
      type: Number,
      default: 0
    },

    updatedJobs: {
      type: Number,
      default: 0
    },

    failedJobs: {
      type: Number,
      default: 0
    },

    failures: [
      {
        externalId: String,
        reason: String,
        type: {
          type: String, 
          default: "UNKNOWN"
        }
      }
    ],

    status: {
      type: String,
      enum: ["RUNNING", "COMPLETED", "FAILED"],
      default: "RUNNING"
    }
  },
  {
    timestamps: true
  }
);

ImportLogSchema.index({ startedAt: -1 });

export default mongoose.model("ImportLog", ImportLogSchema);
