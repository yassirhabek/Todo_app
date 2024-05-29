import React from 'react';
import { Typography, Container } from '@mui/material';
import { useGlobalState } from '../hooks/GlobalStateContextHooks';
import TaskList from '../components/TaskList';
import ManageLists from '../components/ManageLists';
import AddTask from '../components/AddTask';

const TodoPage = () => {
  const [currentList, setCurrentList] = React.useState(0);
  const { toDoLists } = useGlobalState();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do Lists
      </Typography>
      <ManageLists currentList={currentList} setCurrentList={setCurrentList} />
      {toDoLists?.length > 0 && (
        <>
          <AddTask currentList={currentList} />
          <TaskList currentList={currentList} />
        </>
      )}
    </Container>
  );
};

export default TodoPage;