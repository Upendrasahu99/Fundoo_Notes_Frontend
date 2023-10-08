import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings' // setting icon
import SplitscreenSharpIcon from '@mui/icons-material/SplitscreenSharp'; //List view Icon
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp'; //Refresh screen Icon
import keepLogo from "../../../asset/keepLogo.png"
// import logo from '../asset/keepLogo'
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
import "./Appbaar.css"
import {  useNavigate } from 'react-router-dom';





//Define a styled Search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


//Define a styled SearchIconWrapper component
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


//Define a styled InputBase component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


//Define the Appbar component
export default function Appbar(props) {
  //State for men anchors
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  //Chec if meny isopen
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //Handle opening user account menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Handle closing mobile menu
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  //Handle closing menus
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  //Handle opening mobile menu
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //Define menu IDs
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >{/* Logout button */}
      <MenuItem onClick={handleLogout}>Logout</MenuItem> {/*4 step logout button */}
    </Menu>
  );

  //Define mobile menu Id
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Function to handle opening the side drawer 
  const handleDrawerOpen = () => {
    props.handleDrawerOpen();  // passing data using props in navbar(Parent component)
  }
//Logout funtionality
function handleLogout() {
  // Remove the token from local storage
  localStorage.removeItem('Token');
  navigate("/");
}
let navigate = useNavigate();
  return (
    <div>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color:"gray" /* 1 step give color*/ }} >
        <Toolbar>
          {/* Menu icon button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* Application logo */}
          <img src={keepLogo} alt="" style={{
            width:'70px'
          }}/>

          {/* Application title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block'}, paddingRight: '50px' // 2 step Adjust the value as needed
        }}
          >
            FundooNotes   
          </Typography>  
          {/* Search bar*/}   
          <Search className='Serach-Container' >
            {/* Search icon */}
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {/* Input field for searching */}
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sty
              className='Input'
            />
          </Search>
          {/* Spacer*/}
          <Box sx={{ flexGrow: 1 }} />

          {/* Icon buttons for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

           <IconButton aria-label='Refresh Screen'> {/* 5 Step Refresh Screen Button*/}
           <RefreshSharpIcon/>            
           </IconButton>
 
           <IconButton aria-label="List View">  {/* 4 Step Creat List view Button*/}
           <SplitscreenSharpIcon/>
           </IconButton>       

            <IconButton aria-label="Settings"> {/* 3 step create setting Button*/}
            <SettingsIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          {/* Icon buttons for smaller screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
    
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </div>
  );
}