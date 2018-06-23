import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "./reducers";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
