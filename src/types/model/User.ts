export type TUserBase = {
  userId?: string;
  _id?: string;
  name: string;
  role: string | "user" | "pro";
  position: string | null;
  phone?: string;
  profile_img?: string;
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
  name: string;
  profile_img: string;
  phone: string;
  role: string;
};

export type WriterSchema = TUserBase;
