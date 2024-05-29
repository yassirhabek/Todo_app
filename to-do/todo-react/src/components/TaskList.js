import Task from './Task';
import React from 'react';
import { useGlobalState } from '../hooks/GlobalStateContextHooks';
import { List } from '@mui/material';


const TaskList = ({ currentList }) => {
    const { toDoLists } = useGlobalState();
    const tasks = toDoLists[currentList]?.tasks || [];
  
    return (
      <List>
        {tasks.map((task, index) => (
          <Task key={index} task={task} listIndex={currentList} taskIndex={index} />
        ))}
      </List>
    );
  };

  export default TaskList;