import createStore from "./store/createStore";
import { bugAdded, bugsResolved } from "./store/entities/bugs";
import { projectAdded } from "./store/entities/projects";
import { userAdded } from "./store/entities/users";

const store = createStore();
store.subscribe(() => {
  console.log("Store changed");
});

// store.dispatch(bugAdded({ description: "Bugs 1" }));
// store.dispatch(bugAdded({ description: "Bugs 2" }));
// store.dispatch(bugAdded({ description: "Bugs 3" }));
// store.dispatch(bugAdded({ description: "Bugs 4" }));
// store.dispatch(bugsResolved({ id: 2 }));
// store.dispatch(projectAdded({ name: "KMP" }));
store.dispatch(userAdded({ name: "Ashish" }));
