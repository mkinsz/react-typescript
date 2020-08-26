import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles,
} from "@material-ui/core";
import {
    AlertCircle as AlertCircleIcon,
    BarChart as BarChartIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
    ShoppingBag as ShoppingBagIcon,
    User as UserIcon,
    UserPlus as UserPlusIcon,
    Users as UsersIcon,
} from "react-feather";
import NavItem from "./navitem";

const user = {
    avatar: "",
    jobTitle: "Senior Developer",
    name: "MK Smith",
};

const items = [
    {
        href: "/dashboard",
        icon: BarChartIcon,
        title: "Dashboard",
    },
    {
        href: "/customers",
        icon: UsersIcon,
        title: "Customers",
    },
    {
        href: "/products",
        icon: ShoppingBagIcon,
        title: "Products",
    },
    {
        href: "/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/album",
        icon: SettingsIcon,
        title: "Album",
    },
    {
        href: "/login",
        icon: LockIcon,
        title: "Login",
    },
    {
        href: "/register",
        icon: UserPlusIcon,
        title: "Register",
    },
    {
        href: "/404",
        icon: AlertCircleIcon,
        title: "Error",
    },
];

const useStyles = makeStyles(() => ({
    mobileDrawer: {
        width: 256,
        height: "100%",
    },
    desktopDrawer: {
        width: 256,
        height: "100%",
    },
    avatar: {
        cursor: "pointer",
        width: 64,
        height: 64,
    },
    name: {},
}));

export interface NavBarProps {
    className?: String;
    onMobileClose: any;
    openMobile: boolean;
}

const NavBar = ({ onMobileClose, openMobile }: NavBarProps) => {
    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const content = (
        <Box height="100%" display="flex" flexDirection="column">
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Avatar
                    className={classes.avatar}
                    component={RouterLink}
                    src={user.avatar}
                    to="/account"
                />
                <Typography
                    className={classes.name}
                    color="textPrimary"
                    variant="h5"
                >
                    {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box p={2}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            className="navitem"
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
            <Box flexGrow={1} />
            {/* <Box p={2} m={2} bgcolor="background.dark" >
                <Typography align="center" gutterBottom variant="h4">Need more?</Typography>
                <Typography align="center" variant="body2" >
                    Upgrade to PRO version and access 20 more screens</Typography>
                <Box display="flex" justifyContent="center" mt={2} >
                    <Button color="primary" component="a"
                        href="https://github.com/mkinsz" variant="contained">See PRO version </Button>
                </Box>
            </Box> */}
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.mobileDrawer }}
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    open
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer }}
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

NavBar.defaultProps = {
    onMobileClose: () => {},
    openMobile: false,
};

export default NavBar;
