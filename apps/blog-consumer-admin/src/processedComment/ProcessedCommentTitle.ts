import { ProcessedComment as TProcessedComment } from "../api/processedComment/ProcessedComment";

export const PROCESSEDCOMMENT_TITLE_FIELD = "authorName";

export const ProcessedCommentTitle = (record: TProcessedComment): string => {
  return record.authorName?.toString() || String(record.id);
};
