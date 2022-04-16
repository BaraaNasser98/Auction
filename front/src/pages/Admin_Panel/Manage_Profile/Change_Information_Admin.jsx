import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import API from '../../../API'
// import SessionContext from '../../../components/session/SessionContext'
import { getCookie } from '../../../cookies'
import NavBar from '../../../components/NavBar/NavBar'
import ba333 from '../../../components/images/pictures/ba333.jpg'

import { toast } from "react-toastify"

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    makeStyles,
    Container
} from '@material-ui/core'

import { Person } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({

    root: {
        '& label.Mui-focused': {
            color: theme.palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },
        },
        marginBottom: 8
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: "white !important",
        backgroundColor:"#152D45"
    },
    img: {
        backgroundImage: `url(${ba333})`,
        height: "569px",
        opacity:"0.9"

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(4),
    },
    submit: {
        width: 120,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor:"#152D45"
    },
    container: {
        width: "80%",
        backgroundColor: "white",
        paddingBottom: "10px",
        marginBottom: "70px",
        borderRadius: "5px"
    },

    flexDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    },
}));

export default function Change_Information_Admin() {
    let id = getCookie('id')
    let token = getCookie('token')
    const classes = useStyles();
    const history = useHistory();

    // let { session: { user: { id, token } } } = useContext(SessionContext);

    const [state, updateState] = useState({
        id: id,
        username: "",
        firstname: "",
        lastname: "",
        phonenumber: "",

        // lastPhone: ""
    });

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

    async function handleSubmit(e) {
        e.preventDefault();

        let reqBody = state;
        let o = await API.put(`user/${id}`, reqBody, {
            headers: {
                id: id,
                token: token
            }
        })


            .then(toast.success("Update Profile Successfuly"))
    }

    useEffect(() => {
        async function fetData() {
            try {
                await API.get(`user/${id}`,
                    {
                        headers: {
                            id: id,
                            token: token,
                        }
                    }
                )
                    .then(res => {
                        const data = res.data.result;
                        const success = res.data.success;
                        if (success) {
                            setState({ username: data.username });
                            setState({ firstname: data.firstname });
                            setState({ lastname: data.lastname });
                            setState({ phonenumber: data.phonenumber });
                        }
                    });
            } catch (e) {
                console.log("ERROR", e);
            }
        }
        fetData();
    }, [])

    return (
        <div className={classes.img}>

            <NavBar />

            <Container component="main" maxWidth="xs" className={classes.container}>

                <Typography variant="h3" align="center" className="titlePage">
                </Typography>

                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Person />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Update Profile
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>

                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="User Name"
                                name="username"
                                value={state.username}
                                onChange={handleChange}
                                className={classes.root}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                type="number"
                                variant="outlined"
                                label="Phone Number"
                                name="phonenumber"
                                value={state.phonenumber}
                                onChange={handleChange}
                                className={classes.root}
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                variant="outlined"
                                label="First Name"
                                name="firstname"
                                value={state.firstname}
                                onChange={handleChange}
                                className={classes.root}
                            />
                        </Grid>



                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="Last Name"
                                name="lastname"
                                value={state.lastname}
                                onChange={handleChange}
                                className={classes.root}
                            />
                        </Grid>


                        <div className={classes.flexDiv}>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"

                                className={classes.submit}
                            >
                                Update
                            </Button>

                            <Button
                              color="primary"
                                type="button"
                                variant="contained"
                                className={classes.submit}
                                onClick={() => history.push({ pathname: "/adminprofile" })}
                            >
                                Cancel
                            </Button>

                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}