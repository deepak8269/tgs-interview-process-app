// external imports
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// root reducer import
import rootReducer from "./reducers";

const persistConfig = {
  key: "authentication",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middlewares
const middlewares = [];
// middlewares.push(any_middleware)

const configureStore = () => {
  // Middleware Enhancer
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // Store configuration for Production
  if (process.env.NODE_ENV === "production") {
    return createStore(persistedReducer, undefined, compose(middlewareEnhancer));
  }

  // Enabling Redux Devtools only for development environment
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  // Store configuration for Development
  return createStore(persistedReducer, undefined, composeEnhancers(middlewareEnhancer));
};

const store = configureStore();
const persistor = persistStore(store);

export default store;
export { persistor };
