import React, { Fragment } from "react";
import TodoListWrapper from './components/todo-list-wrapper';
import Login from './components/login';
import Signup from './components/signup';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(logger, thunk))
)

export default function App() {
    return <Fragment>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/todolist" component={TodoListWrapper} />
                </Switch>
            </Router>
        </Provider>
    </Fragment>
}

// Client
// TodoListWrapper statefull (fetch all tasks on load)

// TodoListAdd stateless
// TodoListTable stateless

// use the following component from matiral UI:
// https://material-ui.com/components/buttons/
// https://material-ui.com/components/pickers/
// https://material-ui.com/components/text-fields/
// https://material-ui.com/components/tables/
