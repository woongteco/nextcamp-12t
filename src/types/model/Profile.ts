import { CategoryOption } from "./Category";
import { UserSchema } from "./User";

export type ProfileSchema = {
  _id: string;
  userId: UserSchema;
  position_tag: string;
  introduce: string;
  my_category: string[];
};

export type TProfileData = {
  _id: string;
  userId: UserSchema;
  position_tag: string;
  introduce: string;
  my_category: Array<CategoryOption>;
};
