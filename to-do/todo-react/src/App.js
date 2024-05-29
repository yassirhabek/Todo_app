import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Global } from './hooks/GlobalStateContextHooks';
import {
  Box, AppBar, Toolbar, Typography, CssBaseline, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './components/Navbar';
import TodoPage from './pages/todoPage';
import Page2 from './pages/Page2';
import Page1 from './pages/Page1';


const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Global>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                To-Do App
              </Typography>
            </Toolbar>
          </AppBar>
          <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginTop: 8 }}
          >
            <Routes>
              <Route path="/" element={<TodoPage />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </Global>
  );
};

export default App;
