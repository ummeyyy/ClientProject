import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware,compose } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import reducers from "../redux/index";
const persistConfig = {
  key: "root",
  storage: AsyncStorage
  //   whitelist: ["authReducer", "userReducer"]
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [
  thunk,
  // more middleware
];
// export default store = createStore(
//   persistedReducer,
//   {},
//   // +window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   //   window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

// const store = createStore(
//   reducer /* preloadedState, */,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
 export default store = createStore(persistedReducer, {}, composeEnhancers(

    applyMiddleware(...middleware)
  ));