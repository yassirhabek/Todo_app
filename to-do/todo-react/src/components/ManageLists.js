import React from 'react';
import { useGlobalState, GlobalState } from '../hooks/GlobalStateContextHooks';
import { Button, TextField, Tabs, Tab } from '@mui/material';

const ManageLists = ({ currentList, setCurrentList }) => {
    const { toDoLists } = useGlobalState();
    const [newListName, setNewListName] = React.useState('');
  
    const handleAddList = () => {
      if (newListName.trim()) {
        GlobalState.set({ toDoLists: [...toDoLists, { name: newListName, tasks: [] }] });
        setNewListName('');
      }
    };
  
    return (
      <div>
        <TextField
          label="New List Name"
          variant="outlined"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          fullWidth
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={handleAddList}>
          Add List
        </Button>
        <Tabs
          value={currentList}
          onChange={(event, newValue) => setCurrentList(newValue)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {toDoLists.map((list, index) => (
            <Tab key={index} label={list.name} />
          ))}
        </Tabs>
      </div>
    );
  };

  export default ManageLists;