import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProcessedCommentWhereInput = {
  authorName?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postTitle?: StringNullableFilter;
};
