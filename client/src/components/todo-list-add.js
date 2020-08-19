import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function TodoListAdd({onChange, onClick}) {
    return <div>
        <TextField id="todo" label="todo" onChange={({target: {value}}) => onChange('todo', value)}/>
        <br />
        <TextField
            id="date"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={({target: {value}}) => onChange('date', value)}
        />
        <br />
         <Button onClick={() => onClick()} variant="contained" color="primary">Add Todo</Button>
    </div>;
}
