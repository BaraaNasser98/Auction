

import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar'

import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import API from '../../API'
import moment from 'moment'
import { setCookies } from '../../cookies'
import SessionContext from "../../components/session/SessionContext"
import ba333 from '../../components/images/pictures/ba333.jpg'

import { toast } from "react-toastify"

import {
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Grid,
    Typography,
    makeStyles,
    Container,
    InputAdornment,
    RadioGroup,
    FormLabel,
    Radio
} from '@material-ui/core'

import {
    Visibility,
    LockOutlined,
    VisibilityOff,
    PlayCircleFilledWhite
} from '@material-ui/icons'

import MomentUtils from '@date-io/moment'

import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'


const useStyles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: "white",
        },
        '&.MuiInputBase-input': {
            color: "white",

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "white",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "white",
            },
            '&:hover fieldset': {
                borderColor: "white"
            },
            '&.Mui-focused fieldset': {
                borderColor: "black",
            },
        },
    },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "black"
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: "black",
        color: "white !important",
        backgroundColor:"#152D45"
    },
    form: {
        width: '100%',

        marginTop: theme.spacing(1.8),

    },
    submit: {
        margin: theme.spacing(1, 8, 1),
        backgroundColor:"#152D45"
    },

    container: {
        paddingBottom: "10px",
        marginBottom: "70px",
        marginTop: "40px",
        borderRadius: "5px",
        backgroundColor:"white",
        paddingTop:"12px"
    },

    img: {
        backgroundImage: `url(${ba333})`,
        height: "569px",
        opacity: "0.9"

    },
    FormLabel: {
        textAlign: "center",
        marginTop: 12,



    },

   
    FormControl: {
        display: "flex",
        flexFlow: "row",
        marginLeft: 20,
        '& .radioR1': {
            display: "flex",
            flexFlow: "row",
            marginLeft: 70,
            '& .MuiFormControlLabel-root:nth-child(2)': {
                marginLeft: 35
            }
        },
        '& .radioR2': {
            display: "flex",
            flexFlow: "row",
            marginLeft: 75,

            '& .MuiFormControlLabel-root:nth-child(2)': {
                marginLeft: 25
            }
        }
    },

    linkTo: {
        color: "white",
        textDecoration: "none",
        '&:hover': {
            textDecoration: "underline",
        },
        '& .linkSing:hover': {
            color: "#101E38",
        },
        '& .linkSing': {
            color: "white",
            textDecoration: "none",
        }
    },
    flexDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",

    }
}));


export default function Register() {

    const classes = useStyles();

    const [state, updateState] = useState({
        firstname: "",
        lastname: "",
        username: "",
        birthdate: "",
        address: "",
        phonenumber: "",
        password: ""
    });

    let { actions: { setSession } } = useContext(SessionContext);

    function setState(nextState) {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }));
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        let reqBody = {

            firstname: state.firstname,
            lastname: state.lastname,
            username: state.username,
            birthdate: state.birthdate,
            address: state.address,
            phonenumber: state.phonenumber,
            password: state.password
        }


        axios.post('http://localhost:9000/signup', reqBody)


    }
    console.log(state);


    return (
        <div className={classes.img}>
            <NavBar />
            <Container component="main" maxWidth="xs" className={classes.container}>
                <CssBaseline />

                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
<center>
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={1}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type="text"
                                    name="username"
                                    value={state.username}
                                    placeholder="Username"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type="text"
                                    name="password"
                                    value={state.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    required
                                    type="text"
                                    name="firstname"
                                    value={state.firstname}
                                    placeholder="First Name"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    required
                                    type="text"
                                    name="lastname"
                                    value={state.lastname}
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    type="text"
                                    name="phonenumber"
                                    value={state.phonenumber}
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    type="text"
                                    name="birthdate"
                                    value={state.birthdate}
                                    placeholder="Date of Birth"
                                    onChange={handleChange}
                                />
                            </Grid>


                            <Grid item xs={12} >
                                <TextField
                                    required
                                    type="text"
                                    name="address"
                                    value={state.address}
                                    placeholder="Address"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>

                            <Grid container justifyContent="center">
                                <Grid item className={classes.linkTo}>
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="linkSing"
                                    >
                                        Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                    </center>
                </div>
            </Container>
        </div>
    )
}