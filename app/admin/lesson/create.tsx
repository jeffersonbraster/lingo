import React from "react";
import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const CreateLessons = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Titulo" />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Ordem" />
      </SimpleForm>
    </Create>
  );
};

export default CreateLessons;
