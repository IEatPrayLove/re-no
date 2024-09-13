import { SortOrder } from "../../util/SortOrder";

export type ProcessedCommentOrderByInput = {
  authorName?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postTitle?: SortOrder;
  updatedAt?: SortOrder;
};
