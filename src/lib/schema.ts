import mongoose from "mongoose";

// 유저
const user = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String },
    name: { type: String, required: true },
    profile_img: { type: String, default: null },
    phone: { type: String, required: true },
    role: { type: String, enum: ["user", "pro", "admin"], default: "user" },
    provider: { type: String, required: false },
    providerAccountId: { type: String, required: false },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

// 프로필 등록
const profile = new mongoose.Schema({
  userId: { type: String, required: true },
  position_tag: { type: String, default: null },
  introduce: { type: String, default: null },
  my_category: { type: [String], default: [] },
  providerAccountId: { type: String },
});

// 커뮤니티 작성 및 댓글
const subWriter = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  position: { type: String, default: null },
  profileUrl: { type: String, default: null },
});

const subReply = new mongoose.Schema({
  commentId: { type: String, required: true },
  replyId: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: subWriter, required: true },
  createdAt: { type: Date, default: Date.now },
});

const subComment = new mongoose.Schema({
  commentId: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: subWriter, required: true },
  createdAt: { type: Date, default: Date.now },
  reply: [subReply],
});

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
  writer: { type: subWriter, required: true },
  view: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
  comments: [subComment],
  createdAt: { type: Date, default: Date.now },
});

// 스터디 개설
const subCategory = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

const subStudyInfo = new mongoose.Schema({
  thumbnailUrl: { type: String, default: null },
  title: { type: String, required: true },
  jobCategory: { type: subCategory, required: true },
  targetCategory: { type: subCategory, required: true },
  expense: { type: Number, required: true },
  recruitmentPeople: { type: Number, required: true },
  recruitmentPeriod: { type: [String], default: [] },
  studyPeriod: { type: [String], default: [] },
  location: { type: String, default: "온라인", required: true },
  place: { type: String, default: null, required: true },
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

const study = new mongoose.Schema({
  studyId: { type: String },
  thumbnailInfo: { type: subStudyInfo, required: true },
  contents: { type: subContents, required: true },
  heartStatus: { type: Boolean, default: false },
  heartCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// 스터디 리스트
const studyList = new mongoose.Schema({
  studyId: { type: String },
  thumbnailUrl: { type: String, default: null },
  title: { type: String, required: true },
  jobCategory: { type: subCategory, required: true },
  targetCategory: { type: subCategory, required: true },
  recruitmentPeople: { type: Number, required: true },
  recruitmentPeriod: { type: [String], default: [] },
  location: { type: String, default: "온라인", required: true },
  place: { type: String, default: null, required: true },
  heartCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models?.User || mongoose.model("User", user);
export const Profile =
  mongoose.models?.Profile || mongoose.model("Profile", profile);
export const Post = mongoose.models?.Post || mongoose.model("Post", post);
export const Study = mongoose.models?.Study || mongoose.model("Study", study);
export const StudyList =
  mongoose.models?.StudyList || mongoose.model("StudyList", studyList);
