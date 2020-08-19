import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import { connect } from 'react-redux';
import { deleteTaskAction } from '../actions/todolist';

const FIELDS = ['id', 'create_date', 'active', 'creator_name'];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ActionComponent = ({ onDelete, onDone }) => {
    return <div>
        <Button onClick={onDone} variant="contained" color="primary">
            Done
        </Button>
        <Button onClick={onDelete} variant="contained" color="secondary">
            Delete
        </Button>
    </div>
}

function TodoListTable({ tasks, deleteTask, onDone }) {
    const classes = useStyles();
    const fields = _.omit(_.head(tasks), FIELDS);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {_.keys(fields).map((x, idx) =>
                            <TableCell key={idx}>{x}</TableCell>)}
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((row, idx) => <TableRow key={idx}>
                        {_.values(_.omit(row, FIELDS))
                            .map((field, idx2) => <TableCell key={idx2}>{field}</TableCell>)}
                        <TableCell>
                            <ActionComponent
                                onDelete={() => {
                                    debugger;
                                    deleteTask(row.id);
                                }}
                                onDone={() => onDone(row.id)}
                            />
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: id => {
            debugger;
            dispatch(deleteTaskAction(id));
        }
    }
}
//props.deleteTask(6)

export default connect(null, mapDispatchToProps)(TodoListTable);