
import React from "react"
import { useHistory } from 'react-router'
import NavBar from "../../../components/NavBar/NavBar"
import ba333 from '../../../components/images/pictures/ba333.jpg'

import {
    Avatar,
    Button,
    Typography,
    Container,
    Grid,
    CssBaseline,
    makeStyles,
    Paper
} from '@material-ui/core'

import { SettingsSharp } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({

    container: {
        width: ' 100%',
        marginTop: '80px'
    },
    Typography: {
        marginBottom: 25,
        marginTop: 25,
      
    },
    linkButton: {
        margin: 20,
        width: "60%",
        backgroundColor:"#152D45"
    },
    paper: {
        textAlign: "center",
        padding: 30,
        margin: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       
    },
    img: {
        backgroundImage: `url(${ba333})`,
        height: "569px",
        opacity:"0.9"

    },
    avatar: {
        textAlign: "center",
        backgroundColor: "#152D45",
        color: "white !important"
    }
}));

export default function Update_Profile() {

    const classes = useStyles();
    const history = useHistory();

    return (
        <>
        <div className={classes.img}>
        <NavBar/>
            <CssBaseline />
            <Container className={classes.container}>
                <Grid>

                    <Paper className={classes.paper}>

                        <Avatar className={classes.avatar}>
                            <SettingsSharp />
                        </Avatar>

                        <Typography
                            variant="h3"
                            className={classes.Typography}
                        >
                            Update Profile
                        </Typography>

                        <Button
                            fullWidth
                            type="button"
                            color="primary"
                            variant="contained"
                            className={classes.linkButton}
                            onClick={() => history.push({ pathname: '/adminprofileinformation' })}
                        >
                            {/* <AddCircleOutline className={classes.AddCircleOutline} /> */}
                            Change Information
                        </Button>

                        <Button
                            fullWidth
                            type="button"
                            color="primary"
                            variant="contained"
                            className={classes.linkButton}
                            onClick={() => history.push({ pathname: '/adminprofilepassword' })}
                        >
                            {/* <AddCircleOutline className={classes.AddCircleOutline} /> */}
                            Change Password
                        </Button>

                    </Paper>

                </Grid>
            </Container>
            </div>
        </>
    )
}