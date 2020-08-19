import React, { Fragment } from 'react';
import axios from 'axios';
import TodoListTable from './todo-list-table';
import TodoListAdd from './todo-list-add';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchTasksAction, addTaskAction } from '../actions/todolist';

const TASK_ENDPOINT = '/tasks';

class TodoListWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            date: '',
        }
    }

    onDone(id) {
        alert(id);
    }

    onChange(field, value) {
        this.setState({ [field]: value });
    }

    async onAdd() {
        try {
            this.props.addTodo(this.state);
        } catch (err) {
            console.log(err);
        }
    }

    async logout() {
        try {
            await axios.get('/auth/logout');
            this.props.history.push('/login');
        } catch (err) {
            this.props.history.push('/login');
        }
    }

    render() {
        const { todos } = this.props;
        return (
            <Fragment>
                <Fragment>
                    <TodoListAdd
                        onChange={(field, value) => this.onChange(field, value)}
                        onClick={() => this.onAdd()}
                    />
                    {todos.length > 0 && (
                        <TodoListTable
                            onDone={this.onDone}
                            tasks={todos}
                        />
                    )}
                    <Button onClick={() => this.logout()} variant="contained" color="secondary">Logout</Button>
                </Fragment>
            </Fragment>
        );
    }

    async componentDidMount() {
        this.props.fetchTodos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.shouldRefresh) {
            this.props.fetchTodos();
        }
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todolist.todos,
        shouldRefresh: state.todolist.shouldRefresh
    }
}

// this.props.shouldRefresh

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTasksAction()),
        addTodo: task => dispatch(addTaskAction(task)),
    }
}
//this.props.addTodo({......});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);






// axios.get('/tasks/2')
// axios.delete('/tasks/2')


// fetch('/tasks', {
//     method: 'PATCH'
// })