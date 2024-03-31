import React from "react";
import {
  BooleanInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const EditChallengeOptions = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Texto" />
        <BooleanInput source="correct" label="Item correto" />
        <ReferenceInput source="challengeId" reference="challengers" />
        <TextInput source="imageSrc" label="Imagem" />
        <TextInput source="audioSrc" label="Áudio" />
      </SimpleForm>
    </Edit>
  );
};

export default EditChallengeOptions;
