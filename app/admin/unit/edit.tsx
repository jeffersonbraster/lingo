import React from "react";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const EditUnits = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Titulo" />
        <TextInput
          source="description"
          validate={[required()]}
          label="Descrição"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="Ordem" />
      </SimpleForm>
    </Edit>
  );
};

export default EditUnits;
