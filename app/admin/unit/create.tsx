import React from "react";
import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const CreateUnits = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Titulo" />
        <TextInput
          source="description"
          validate={[required()]}
          label="Descrição"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="Ordem" />
      </SimpleForm>
    </Create>
  );
};

export default CreateUnits;
