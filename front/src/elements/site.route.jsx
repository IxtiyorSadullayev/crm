import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import ListDrawer from './drawer';
import { useNavigate } from 'react-router-dom';


export default function SiteNavbar() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    let navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="appbar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={()=> setIsDrawerOpen(true)}
                        sx={{ mr: 2 }}
                    >
                        {/* <Drawer
                            open={isDrawerOpen}
                            anchor='left'
                            onClose={setIsDrawerOpen(false)}
                        >
                            <ListDrawer />
                        </Drawer> */}
                        <MenuIcon />
                        {/* <Button onClick={()=> setIsDrawerOpen(prev => !prev)}>ok</Button> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CRM platform
                    </Typography>
                    <Button color="inherit" onClick={()=> navigate('/login')} >Login</Button>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer
                    open={isDrawerOpen}
                    onClose={()=> setIsDrawerOpen(false)}
                    width='300px'
                >
                    {localStorage.getItem('loggin')==="true"? <ListDrawer />: 
                    <Box
                    sx={{ width: 250 }}
                    role="presentation"
                        >
                            <Typography>Not Authorization</Typography>
                        </Box>

                    }
                    
                </Drawer>
            </Box>
        </Box>
    );
}
