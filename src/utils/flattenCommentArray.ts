import { CommentBase, CommentSchema, ReplySchema } from "@/types/model/Comment";

type FlattenArrayType = (
  comments: CommentSchema[]
) => (CommentBase | ReplySchema)[];
export const flattenCommentArray: FlattenArrayType = (comments) => {
  const flattend = comments.reduce(
    (prev: (CommentBase | ReplySchema)[], curr: CommentSchema) => {
      const { reply, ...comment } = curr;
      return [...prev, comment, ...reply];
    },
    []
  );
  return flattend;
};

type FlattenLengthType = (comments: CommentSchema[]) => number;
export const flattenCommentLength: FlattenLengthType = (comments) => {
  return flattenCommentArray(comments).length;
};
