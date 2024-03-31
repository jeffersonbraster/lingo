import React from "react";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const EditLessons = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Titulo" />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Ordem" />
      </SimpleForm>
    </Edit>
  );
};

export default EditLessons;
