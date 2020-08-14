import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

export const configureStore = (preloadedState?: any): any => {
    const store =
        process.env.NODE_ENV === "production"
            ? createStore(rootReducer, preloadedState, applyMiddleware(thunk))
            : window.__REDUX_DEVTOOLS_EXTENSION__
            ? createStore(
                  rootReducer,
                  preloadedState,
                  compose(
                      applyMiddleware(thunk, createLogger()),
                      window.__REDUX_DEVTOOLS_EXTENSION__({})
                  )
              )
            : createStore(
                  rootReducer,
                  preloadedState,
                  applyMiddleware(thunk, createLogger())
              );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};
