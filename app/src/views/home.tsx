import React from "react";
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Tabs, Tab, Theme } from "@material-ui/core";

import Wrap from "../components/wrap";
import NavBar from "../components/navbar";
import TopBar from "../components/topbar";

import Album from "./album";
import routes from "./routes";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100%",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
    },
    wrapper: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 256,
        },
    },
    contentContainer: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
    },
    content: {
        flex: "1 1 auto",
        height: "100%",
        overflow: "auto",
    },
}));

const Home = (props: any) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

    const history = useHistory();
    const location = useLocation();

    const handleSquare = (author: string, book: string) => {
        console.log({ [author]: book });
    };

    React.useEffect(() => {
        handleSquare("Tom", "Friday");
    }, []);

    React.useEffect(() => {
        console.log("Location: ", location.pathname);
    }, [location]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Wrap title="Home" className={classes.root}>
            <NavBar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        <Switch>
                            <Route exact path="/album" component={Album} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Wrap>
    );
};

export default Home;
