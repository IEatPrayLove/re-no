import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProcessedCommentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="postTitle" source="postTitle" />
      </SimpleForm>
    </Create>
  );
};
