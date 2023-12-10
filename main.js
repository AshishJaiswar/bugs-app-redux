import createStore from "./store/createStore";
import { bugAdded, bugsResolved } from "./store/entitiesReducers/bugs";
import { projectAdded } from "./store/entitiesReducers/projects";

const store = createStore();
store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(bugAdded({ description: "Bugs 1" }));
store.dispatch(bugAdded({ description: "Bugs 2" }));
store.dispatch(bugAdded({ description: "Bugs 3" }));
store.dispatch(bugAdded({ description: "Bugs 4" }));
store.dispatch(bugsResolved({ id: 2 }));
store.dispatch(projectAdded({ name: "KMP" }));
