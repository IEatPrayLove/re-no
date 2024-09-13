import { ProcessedPost as TProcessedPost } from "../api/processedPost/ProcessedPost";

export const PROCESSEDPOST_TITLE_FIELD = "authorName";

export const ProcessedPostTitle = (record: TProcessedPost): string => {
  return record.authorName?.toString() || String(record.id);
};
