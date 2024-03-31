import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";

const CreateCourses = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Titulo" />
        <TextInput source="imageSrc" validate={[required()]} label="Imagem" />
      </SimpleForm>
    </Create>
  );
};

export default CreateCourses;
