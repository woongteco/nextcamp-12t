import { UserSchema } from "./User";

export type ProfileSchema = {
  _id: object;
  userId: UserSchema;
  position_tag: string;
  introduce: string;
  my_category: string[];
};
