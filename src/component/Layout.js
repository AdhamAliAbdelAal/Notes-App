import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, Avatar } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import farghaly from '../images/farghaly.jpg';
const useStyles = makeStyles(theme => {
    return {
        toolbarHeight: {
            height: `${theme.mixins.toolbar.minHeight}px !important`
        }
    }
})
const Layout = ({ children }) => {
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ];
    const classes = useStyles();
    const drawerWidth = 240;
    return (

        <div className="d-flex">
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth
                    }
                }}
            >
                <Typography variant="h5" sx={{
                    padding: "13px"
                }}
                    className={classes.toolbarHeight}
                >
                    Ninja Notes
                </Typography>
                <List>
                    {
                        menuItems.map(item => {
                            return (
                                <NavLink to={item.path} key={item.text} >
                                    <ListItem className="text-secondary">
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </Drawer>
            <div className='flex-grow-1 bg-light mx-0 d-flex flex-column'>
                <AppBar
                    className="position-static mb-3 bg-white"
                    elevation={0}
                >
                    <Toolbar className="d-flex justify-content-between">
                        <Typography color="textSecondary">
                            Today is  {new Date().toDateString()}
                        </Typography>
                        <div className="d-flex gap-2 align-items-center">
                            <Typography color="textSecondary">
                                Mario
                            </Typography>
                            <Avatar src={farghaly} />
                        </div>

                    </Toolbar>
                </AppBar>
                {children}
            </div>
        </div>
    );
}

export default Layout;
