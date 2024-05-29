import React from 'react';      
import { GlobalState } from '../hooks/GlobalStateContextHooks';
import { TextField, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const Task = ({ task, listIndex, taskIndex }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [newTaskName, setNewTaskName] = React.useState(task.text);
  
    const handleRemove = () => {
      const { toDoLists } = GlobalState.get();
      const newTasks = toDoLists[listIndex].tasks.filter((_, i) => i !== taskIndex);
      const newToDoLists = [...toDoLists];
      newToDoLists[listIndex].tasks = newTasks;
      GlobalState.set({ toDoLists: newToDoLists });
    };
  
    const handleToggle = () => {
      const { toDoLists } = GlobalState.get();
      const newTasks = toDoLists[listIndex].tasks.map((t, i) => 
        i === taskIndex ? { ...t, completed: !t.completed } : t
      );
      const newToDoLists = [...toDoLists];
      newToDoLists[listIndex].tasks = newTasks;
      GlobalState.set({ toDoLists: newToDoLists });
    };
  
    const handleEdit = () => {
      setIsEditing(true);
      console.log(GlobalState.get());
    };
  
    const handleSave = () => {
      const { toDoLists } = GlobalState.get();
      const newTasks = toDoLists[listIndex].tasks.map((t, i) => 
        i === taskIndex ? { ...t, text: newTaskName } : t
      );
      const newToDoLists = [...toDoLists];
      newToDoLists[listIndex].tasks = newTasks;
      GlobalState.set({ toDoLists: newToDoLists });
      setIsEditing(false);
    };
  
    return (
      <ListItem
        secondaryAction={
          <>
            {isEditing ? (
              <IconButton edge="end" aria-label="save" onClick={handleSave}>
                <CheckIcon />
              </IconButton>
            ) : (
              <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            )}
            <IconButton edge="end" aria-label="delete" onClick={handleRemove}>
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <Checkbox
          checked={task.completed}
          onChange={handleToggle}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {isEditing ? (
          <TextField
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />
        ) : (
          <ListItemText
            primary={task.text}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
        )}
      </ListItem>
    );
  };

  export default Task;
  