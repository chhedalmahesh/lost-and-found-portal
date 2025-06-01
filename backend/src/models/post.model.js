import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["lost", "found"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    dateLostFound: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "matched", "resolved"],
      default: "pending",
    },
    matchedWith: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      default: null,
    },
    claimQuestions: [
      {
        question: {
          type: String,
          required: true,
        },
      },
    ],
    isClaimed: {
      type: Boolean,
      default: false,
    },
    claimedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
