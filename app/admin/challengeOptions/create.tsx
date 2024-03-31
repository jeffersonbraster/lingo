import React from "react";
import {
  BooleanInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const CreateChallengeOptions = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Texto" />
        <BooleanInput source="correct" label="Item correto" />
        <ReferenceInput source="challengeId" reference="challengers" />
        <TextInput source="imageSrc" label="Imagem" />
        <TextInput source="audioSrc" label="Áudio" />
      </SimpleForm>
    </Create>
  );
};

export default CreateChallengeOptions;
