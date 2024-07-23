import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    email: { type: String, require: true },
    password: { type: String },
    name: { type: String, require: true },
    profile_img: { type: String, default: null },
    phone: { type: String, require: true },
    role: { type: String, enum: ["user", "pro", "admin"], default: "user" },
    provider: { type: String, required: false },
    providerAccountId: { type: String, required: false },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", user);

const profile = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  position_tag: { type: String, default: null },
  introduce: { type: String, default: null },
  my_category: { type: [String], default: [] },
});

export const Profile =
  mongoose.models?.Profile || mongoose.model("Profile", profile);

const study_card = new mongoose.Schema();
const category = new mongoose.Schema();
const post = new mongoose.Schema();

export const StudyCard =
  mongoose.models?.User || mongoose.model("StudyCard", study_card);
export const Category =
  mongoose.models?.User || mongoose.model("Category", category);
export const Post = mongoose.models?.User || mongoose.model("Post", post);
