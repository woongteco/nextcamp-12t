import { UserSchema } from "./User";
import { TSelectOption } from "./Category";

// get profile data .populate("userId")
// @deprecated
export type _ProfileSchema = {
  _id: string;
  userId: UserSchema;
  position_tag: string;
  introduce: string;
  my_category: TSelectOption[];
};

// @deprecated
// export type TProfileData = {
//   _id: string;
//   userId: UserSchema;
//   position_tag: string;
//   introduce: string;
//   my_category: TSelectOption[];
// };
