import React from 'react';
import { useGlobalState, GlobalState } from '../hooks/GlobalStateContextHooks';
import { Button, TextField } from '@mui/material';

const AddTask = ({ currentList }) => {
    const [task, setTask] = React.useState('');
    const { toDoLists } = useGlobalState();
  
    const handleAdd = () => {
      if (task.trim()) {
        const newTask = { text: task, completed: false };
        const newToDoLists = [...toDoLists];
        newToDoLists[currentList].tasks = [...newToDoLists[currentList].tasks, newTask];
        GlobalState.set({ toDoLists: newToDoLists });
        setTask('');
      }
    };
  
    return (
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          label="Add a new task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Task
        </Button>
      </div>
    );
  };

  export default AddTask;