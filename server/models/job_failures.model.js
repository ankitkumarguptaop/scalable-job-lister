import mongoose from "mongoose";

const JobFailureSchema = new mongoose.Schema(
  {
    importLogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImportLog",
      index: true
    },
    source: String,
    sourceUrl: String,
    externalId: String,
    reason: String,
    errorType: {
      type: String,
      enum: ["VALIDATION", "DATABASE", "QUEUE", "UNKNOWN"]
    },
    payload: Object 
  },
  {
    timestamps: true
  }
);

export default mongoose.model("JobFailure", JobFailureSchema);
