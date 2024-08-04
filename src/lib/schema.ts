import mongoose from "mongoose";

// 유저
const user = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
    name: { type: String, required: true },
    profile_img: { type: String, default: null },
    phone: { type: String },
    role: { type: String, enum: ["user", "pro", "admin"], default: "user" },
    provider: { type: String },
    providerAccountId: { type: String },
  },
  { timestamps: true }
);

const subLabelValue = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

// 마이페이지
const mypage = new mongoose.Schema({
  myStudy: [{ type: [String], default: [] }],
  likeStudy: [{ type: [String], default: [] }],
  myPost: [{ type: [String], default: [] }],
});

// 프로필
const profile = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  position_tag: { type: String, default: null },
  introduce: { type: String, default: null },
  my_category: { type: [subLabelValue], default: [] },
});

const subReply = new mongoose.Schema({
  commentId: { type: String, required: true },
  replyId: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

const subComment = new mongoose.Schema({
  commentId: { type: String, required: true },
  postId: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  reply: [subReply],
});

// 커뮤니티
const post = new mongoose.Schema({
  postId: { type: String },
  category: {
    value: { type: String, required: true },
    label: { type: String, required: true },
    isRecruiting: { type: Boolean, default: true },
  },
  contents: {
    title: { type: String, required: true },
    body: { type: String, required: true },
    linkedStudyId: { type: String, default: null },
  },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  view: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
  comments: [subComment],
  createdAt: { type: Date, default: Date.now },
});

const subStudyInfo = new mongoose.Schema({
  thumbnailUrl: { type: String, default: null },
  title: { type: String, required: true },
  jobCategory: { type: subLabelValue, required: true },
  targetCategory: { type: subLabelValue, required: true },
  expense: { type: Number, required: true },
  recruitmentPeople: { type: Number, required: true },
  recruitmentPeriod: { type: [String], default: [] },
  studyPeriod: { type: [String], default: [] },
  location: { type: subLabelValue, required: true },
  place: { type: String, default: null, required: true },
  heartCount: { type: Number, default: 0 },
});

const subContentDetail = new mongoose.Schema({
  listId: { type: String, required: false },
  content: { type: String, default: null, required: false },
});

const subContents = new mongoose.Schema({
  content: { type: String, default: null },
  rule: [subContentDetail],
  curriculum: [subContentDetail],
});

// 스터디
const study = new mongoose.Schema({
  studyId: { type: String },
  thumbnailInfo: { type: subStudyInfo, required: true },
  contents: { type: subContents, required: true },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models?.User || mongoose.model("User", user);
export const Mypage =
  mongoose.models?.Mypage || mongoose.model("Mypage", mypage);
export const Profile =
  mongoose.models?.Profile || mongoose.model("Profile", profile);
export const Post = mongoose.models?.Post || mongoose.model("Post", post);
export const Study = mongoose.models?.Study || mongoose.model("Study", study);
