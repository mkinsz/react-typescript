import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Grid,
    Link,
    TextField,
    Typography,
    CssBaseline,
    makeStyles,
    FormControlLabel,
} from "@material-ui/core";
import Wrap from "../components/wrap";

const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    content: {
        marginTop: theme.spacing(20),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

const Register = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Wrap title="Register">
            <Container
                style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
                maxWidth="xs"
            >
                <div className={classes.content}>
                    <CssBaseline />
                    <Formik
                        initialValues={{
                            email: "",
                            firstName: "",
                            lastName: "",
                            password: "",
                            policy: false,
                        }}
                        onSubmit={() => history.replace("/home")}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email("Must be a valid email")
                                .max(255)
                                .required("Email is required"),
                            firstName: Yup.string()
                                .max(255)
                                .required("First name is required"),
                            lastName: Yup.string()
                                .max(255)
                                .required("Last name is required"),
                            password: Yup.string()
                                .max(255)
                                .required("password is required"),
                            policy: Yup.boolean().oneOf(
                                [true],
                                "This field must be checked"
                            ),
                        })}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box mb={1}>
                                    <Typography component="h1" variant="h5">
                                        Create new account
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        Use your email to create new account
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(
                                        touched.firstName && errors.firstName
                                    )}
                                    fullWidth
                                    helperText={
                                        touched.firstName && errors.firstName
                                    }
                                    label="First name"
                                    margin="normal"
                                    name="firstName"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                />
                                <TextField
                                    error={Boolean(
                                        touched.lastName && errors.lastName
                                    )}
                                    fullWidth
                                    helperText={
                                        touched.lastName && errors.lastName
                                    }
                                    label="Last name"
                                    margin="normal"
                                    name="lastName"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                />
                                <TextField
                                    error={Boolean(
                                        touched.email && errors.email
                                    )}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                <TextField
                                    error={Boolean(
                                        touched.password && errors.password
                                    )}
                                    fullWidth
                                    helperText={
                                        touched.password && errors.password
                                    }
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                <Box alignItems="center" display="flex" ml={-1}>
                                    <FormControlLabel
                                        name="remember"
                                        control={<Checkbox color="primary" />}
                                        label={
                                            <>
                                                I have read the{" "}
                                                <Link
                                                    color="primary"
                                                    component={RouterLink}
                                                    to="#"
                                                    underline="always"
                                                    variant="body2"
                                                >
                                                    Terms and Conditions
                                                </Link>
                                            </>
                                        }
                                    />
                                </Box>
                                {Boolean(touched.policy && errors.policy) && (
                                    <FormHelperText error>
                                        {errors.policy}
                                    </FormHelperText>
                                )}
                                <Button
                                    color="primary"
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Sign up now
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        Have an account?{" "}
                                        <Link
                                            component={RouterLink}
                                            to="/login"
                                            variant="body2"
                                        >
                                            Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </div>
            </Container>
        </Wrap>
    );
};

export default Register;
