import { UserSchema } from "./User";

export type ProfileSchema = {
  _id: object;
  position_tag: string;
  introduce: string;
  my_category: string[];
};

export type ProfileFullDataSchema = ProfileSchema & {
  userId: UserSchema;
};
