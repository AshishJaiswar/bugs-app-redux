import { configureStore } from "@reduxjs/toolkit";
import reducer from "./entitiesReducers/reducer";

export default function createStore() {
  return configureStore({
    reducer,
  });
}
