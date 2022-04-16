
import axios from "axios";
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import API from '../../API'
import { setCookie } from '../../cookies'
import SessionContext from '../../components/session/SessionContext'
import NavBar from "../../components/NavBar/NavBar";
import ba333 from '../../components/images/pictures/ba333.jpg'

import { toast } from "react-toastify"

import {
    Container,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    InputAdornment,
    makeStyles
} from '@material-ui/core'


import {
    Visibility,
    LockOutlined,
    VisibilityOff,
    Opacity
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
  
        '&:nth-child(1)': {
            marginBottom: "20px",


        },
        '& label.Mui-focused': {
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
                borderColor: "white",

            },
            '&.Mui-focused fieldset': {
                borderColor: "black",

            },
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "white",
       

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#152D45",
        color: "white",

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
     color:"white",


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        // width: 120,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: "#152D45",
        color:"white",

    },
    InputLabel: {
    color: "white",

},
    container: {

    width: "80%",
    paddingBottom: "10px",
    marginBottom: "70px",
    borderRadius: "5px",
    backgroundColor: "white",
    color:"white",



},
    img: {
    backgroundImage: `url(${ba333})`,
    height: "569px",
    opacity: "0.9"

},


    linkTo: {
    color: "white",
    textDecoration: "none",
    '&:hover': {
        textDecoration: "underline",
        color: "white",
    },
    '& .linkSing:hover': {
        color: "white",
    },
    '& .linkSing': {
        color: "white",
        // textDecoration: "none",
    }
},
    flexDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    color:"white",

}
}));


const Login = () => {
    const classes = useStyles();



    const {
        actions: { login }
    } = useContext(SessionContext);



    const [state, setValue] = useState({
        username: '',
        password: ''
    });

    const { username, password } = state;

    function setState(nextState) {
        setValue(prevState => ({
            ...prevState,
            ...nextState
        }))
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    async function handleSubmit(e) {
        console.log("baraa")

        e.nativeEvent.preventDefault();
        login(state);
    }


    return (
        <div className={classes.img}>
            <NavBar />

            <Container maxWidth="xs" lassName={classes.container}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>


                    <form className={classes.form} onSubmit={handleSubmit}>


                        <TextField
                            required fullWidth
                            onChange={handleChange}
                            label="UserName"
                            name='username'
                            variant="outlined"
                            value={username}
                            type="text"
                            className={classes.root}
                            placeholder="UserName" />

                        <FormControl variant="outlined" fullWidth className={classes.root}>
                            <InputLabel htmlFor="pass">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="pass"

                                type={state.show ? 'text' : 'password'}
                                name="password"
                                value={state.password}
                                onChange={handleChange}
                                labelWidth={70}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item className={classes.linkTo}>
                                Don't have an account?
                                <Link
                                    to="/register"
                                    className='linkSing'
                                    variant="body2">
                                    Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>

    )
}

export default Login;
