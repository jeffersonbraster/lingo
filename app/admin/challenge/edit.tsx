import React from "react";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const EditChallenge = () => {
  return (
    <Edit>
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
    </Edit>
  );
};

export default EditChallenge;
