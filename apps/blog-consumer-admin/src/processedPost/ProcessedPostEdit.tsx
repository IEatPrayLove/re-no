import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProcessedPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
