export type TUserBase = {
  userId: string;
  name: string;
  role: string | "user" | "pro";
  position: string;
  profileUrl: string;
};

type UserIntroduce = TUserBase & {
  introduce: string;
  email: string;
};

type UserInfo = UserIntroduce & {
  phone: string;
  interest: { categoryId: string; label: string }[];
};

export type UserSchema = {
  _id: string;
  email: string;
  password: string;
  name: string;
  profile_img: string;
  phone: string;
  role: string;
  createdAt: object;
  updatedAt: object;
};

export type WriterSchema = TUserBase;
