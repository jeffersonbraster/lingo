import React from "react";
import { Edit, SimpleForm, TextInput, required } from "react-admin";

const EditCourses = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Titulo" />
        <TextInput source="imageSrc" validate={[required()]} label="Imagem" />
      </SimpleForm>
    </Edit>
  );
};

export default EditCourses;
