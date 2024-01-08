import { configureStore, Tuple } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";

export default function createStore() {
  return configureStore({
    reducer,
    middleware: () => new Tuple(logger),
  });
}
