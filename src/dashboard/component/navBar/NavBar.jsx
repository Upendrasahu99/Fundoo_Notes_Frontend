import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//Import the Appbar component form another file
import Appbar from '../appBar/Appbar';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'; //Notes
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'; //Reminders
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';// EditLabels
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'; //Archive
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'; //Bin

//Define the widht of the sidebar
const drawerWidth = 240;

//Define styles for the opened sidebar
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

//Define styles for the closed sidebar
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

//Define the header of the drawer
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


//Define styles for the AppBar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//Define styles for the Drawer component
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

//Main Sidebar component
export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //Function to toggle the sidebar open/Close state
  const handleDrawer = () => {
    if(open === true){
    setOpen(false);
    }else{
      setOpen(true)
    }
  };

  // const handleDrawerOpen = () => {
  //   setOpen(true)
  // }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}

      {/* AppBar compnent */}
      <AppBar open={open}>
        {/* Appbar component from another file */}
      <Appbar handleDrawerOpen = {handleDrawer}/>
      </AppBar>
      {/* Drawe component*/}
      <Drawer variant="permanent" open={open}>
        {/* DrawerHeader compnent*/}
        <DrawerHeader>
          {/* Icon button to toggle the sidebar */}
          <IconButton onClick={handleDrawer} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        {/* Divider */}
        <Divider />

        {/* List of IconButton compnents for sidebar menu items */}
        <List style={{ display: 'flex', flexDirection: 'column', }}>
        <IconButton aria-label='Notes'> {/* Notes */}
           <LightbulbOutlinedIcon/>  
           {/* Notes */}
           </IconButton>

           <IconButton aria-label='Notes'> {/* Reminders */}
           <NotificationsNoneOutlinedIcon/>  
           {/* Reminders */}
           </IconButton>

           <IconButton aria-label='Edit-Labels'> {/* Edit Labels */}
           <ModeEditOutlinedIcon/>  
           {/* Edit Label*/}
           </IconButton>

           <IconButton aria-label='Archive'> {/* Archive */}
           <ArchiveOutlinedIcon/>  
           {/* Archive*/}
           </IconButton>

           <IconButton aria-label='Bin'> {/* Bin*/}
           <DeleteOutlinedIcon/>  
           {/* Archive*/}
           </IconButton>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
       
        
      </Box>
    </Box>
  );
}