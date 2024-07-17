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
