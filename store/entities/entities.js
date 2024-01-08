import { combineReducers } from "@reduxjs/toolkit";
import bugsReducer from "./bugs";
import projectReducer from "./projects";
import UserReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectReducer,
  users: UserReducer,
});
