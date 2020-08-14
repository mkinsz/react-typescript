import React from "react";
import {
    Box,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    Link,
    Typography,
    Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import Wrap from "../components/wrap";

const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(20),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/mkinsz">
                github.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

const Login = () => {
    const classes = useStyles();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values: object) => console.log("Values: ", values);

    return (
        <Wrap title="Login">
            <Container
                style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
                component="main"
                maxWidth="xs"
            >
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            id="email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            inputRef={register({
                                required: "Email address is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors.email && errors.email.message}
                        <TextField
                            id="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            inputRef={register({
                                required: "Password is required",
                            })}
                        />
                        <FormControlLabel
                            name="remember"
                            control={<Checkbox color="primary" />}
                            label="Remember me"
                            inputRef={register}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit(onSubmit)}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                Don&apos;t have an account?{" "}
                                <Link
                                    component={RouterLink}
                                    to="/register"
                                    variant="body2"
                                >
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={4}>
                    <Copyright />
                </Box>
            </Container>
        </Wrap>
    );
};

export default Login;
