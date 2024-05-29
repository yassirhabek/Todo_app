import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Toolbar,
 Hidden
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

const drawerWidth = 240;

const Navbar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/page1">
            <ListItemIcon>
                <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Page 1" />
          </ListItem>
          <ListItem button component={Link} to="/page2">
            <ListItemIcon>
                <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Page 2" />
          </ListItem>
        </List>
        <Divider />
      </Box>
    </div>
  );

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navbar;
