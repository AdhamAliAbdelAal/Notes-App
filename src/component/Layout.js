import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { NavLink } from "react-router-dom";
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
                    marginTop: "7px",
                    marginBottom: "7px",
                    marginLeft: "15px"
                }}>
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
            {children}
        </div>
    );
}

export default Layout;
