import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./combineReducer";
import productSaga from "./middleware/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productSaga);

