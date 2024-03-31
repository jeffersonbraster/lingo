"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import ListCourses from "./course/list";
import CreateCourses from "./course/create";
import EditCourses from "./course/edit";

import ListUnit from "./unit/list";
import CreateUnits from "./unit/create";
import EditUnits from "./unit/edit";

import ListLesson from "./lesson/list";
import CreateLessons from "./lesson/create";
import EditLessons from "./lesson/edit";

import ListChallenge from "./challenge/list";
import CreateChallenge from "./challenge/create";
import EditChallenge from "./challenge/edit";
import ListChallengeOptions from "./challengeOptions/list";
import CreateChallengeOptions from "./challengeOptions/create";
import EditChallengeOptions from "./challengeOptions/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={ListCourses}
        create={CreateCourses}
        edit={EditCourses}
        recordRepresentation="title"
        options={{ label: "Cursos" }}
      />

      <Resource
        name="units"
        list={ListUnit}
        create={CreateUnits}
        edit={EditUnits}
        recordRepresentation="title"
        options={{ label: "Unidades" }}
      />

      <Resource
        name="lessons"
        list={ListLesson}
        create={CreateLessons}
        edit={EditLessons}
        recordRepresentation="title"
        options={{ label: "Aulas" }}
      />

      <Resource
        name="challengers"
        list={ListChallenge}
        create={CreateChallenge}
        edit={EditChallenge}
        recordRepresentation="question"
        options={{ label: "Desafios" }}
      />

      <Resource
        name="challengeOptions"
        list={ListChallengeOptions}
        create={CreateChallengeOptions}
        edit={EditChallengeOptions}
        recordRepresentation="text"
        options={{ label: "Opções de Desafios" }}
      />
    </Admin>
  );
};

export default App;
