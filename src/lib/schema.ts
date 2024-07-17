import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: false },
    name: { type: String, default: null },
    profile_img: { type: String, default: null },
    phone: { type: String, require: true },
    role: { type: String, enum: ["user", "pro", "admin"], default: "user" },
  },
  { timestamps: true }
);

const study_card = new mongoose.Schema();
const category = new mongoose.Schema();
const post = new mongoose.Schema();
const mypage = new mongoose.Schema();

export const User = mongoose.models?.User || mongoose.model("User", user);
export const StudyCard =
  mongoose.models?.User || mongoose.model("StudyCard", study_card);
export const Category =
  mongoose.models?.User || mongoose.model("Category", category);
export const Post = mongoose.models?.User || mongoose.model("Post", post);
export const Mypage = mongoose.models?.User || mongoose.model("Mypage", mypage);