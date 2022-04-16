
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import API from '../../API'
// import SessionContext from '../../../components/session/SessionContext'
import { getCookie } from '../../cookies'
import NavBar from '../../components/NavBar/NavBar'
import ba333 from '../../components/images/pictures/ba333.jpg'

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
            color: "black",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "black",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "black",
            },
            '&:hover fieldset': {
                borderColor: "black",
            },
            '&.Mui-focused fieldset': {
                borderColor: "black",
            },
        },
        marginBottom: 9
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "black",
        backgroundColor: "white",
 
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#18344C",
        color: "white !important",


    },
    form: {
        width: '50%',
        marginTop: theme.spacing(4),
    },
    img: {
        backgroundImage: `url(${ba333})`,
        height: "569px",
        opacity: "0.9"

    },
    submit: {

        width: 120,
        marginBottom: 20,
        marginTop: 20,
        color: "white",
        backgroundColor: "#18344C"


    },
    container: {

        width: "80%",

        paddingBottom: "40px",
        marginBottom: "100px",
        borderRadius: "10px",
       

    },
    flexDiv: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",

    },
}));

export default function Update_Profile() {
    let id = getCookie('id')
    let token = getCookie('token')
    const classes = useStyles();
    const history = useHistory();

    // let { session: { user: { id, token } } } = useContext(SessionContext);

    const [state, updateState] = useState({
        id: id,
        phonenumber: "",
        address: "",

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
                            setState({ phonenumber: data.phonenumber });
                            setState({ address: data.address });

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
            <Container >
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
                                required
                                fullWidth
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
                                fullWidth
                                required
                                variant="outlined"
                                label="address"
                                name="address"
                                value={state.address}
                                onChange={handleChange}
                                className={classes.root}
                            />
                        </Grid>


                        <div className={classes.flexDiv}>

                            <Button
                                type="submit"
                                variant="contained"


                                className={classes.submit}
                            >
                                Update
                            </Button>

                            <Button
                                type="button"
                                variant="contained"

                                className={classes.submit}
                                onClick={() => history.push({ pathname: "/userpanel" })}
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