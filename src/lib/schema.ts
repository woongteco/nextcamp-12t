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

const writer = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  position: { type: String, default: null },
  profileUrl: { type: String, default: null },
});

const reply = new mongoose.Schema({
  originId: { type: String, required: true },
  commentId: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: writer, required: true },
  createdAt: { type: Date, default: Date.now },
});

const comment = new mongoose.Schema({
  commentId: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: writer, required: true },
  createdAt: { type: Date, default: Date.now },
  reply: [reply],
});

const post = new mongoose.Schema({
  postId: { type: String },
  category: {
    value: { type: String, require: true },
    label: { type: String, require: true },
    isRecruiting: { type: Boolean, default: true },
  },
  contents: {
    title: { type: String, require: true },
    body: { type: String, require: true },
    linkedStudyId: { type: String, default: null },
  },
  writer: { type: writer, require: true },
  createdAt: { type: Date, default: Date.now },
  view: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
  comments: [comment],
});

export const Post = mongoose.models?.Post || mongoose.model("Post", post);

const study_card = new mongoose.Schema();

export const StudyCard =
  mongoose.models?.User || mongoose.model("StudyCard", study_card);
