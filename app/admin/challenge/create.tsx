import React from "react";
import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const CreateChallenge = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Questão" />
        <SelectInput
          source="type"
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" },
          ]}
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" validate={[required()]} label="Ordem" />
      </SimpleForm>
    </Create>
  );
};

export default CreateChallenge;
