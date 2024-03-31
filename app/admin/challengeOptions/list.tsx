import React from "react";
import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

const ListChallengeOptions = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challengers" />
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
};

export default ListChallengeOptions;
