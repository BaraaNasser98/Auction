// import React, { useContext, useEffect, useState } from 'react'
// import { getCookie, removeCookie } from '../cookies'
// import { Link } from 'react-router-dom'
// import API from '../API'
// import SessionContext from './session/SessionContext'

// import {
//     Container,
//     makeStyles,
//     Typography,
//     AppBar,
//     Toolbar
// } from "@material-ui/core"

// import {
//     Bookmark,
//     List,
//     ExitToApp,
//     Home,
//     Person,
//     Settings,
//     Storefront,
//     Group,
//     EventNote,
//     Menu,
//     ClearAll,
//     MonetizationOn,
//     InsertInvitation,
//     AssignmentTurnedIn,
//     AssignmentInd,
//     AddBox,
//     Timer
// } from "@material-ui/icons"

// // import Logo from '../images/Logo.png'

// const useStyles = makeStyles(theme => ({
//     container: {
//         position: 'absolute',
//         height: "100vh",
//         color: "#FFFFFF",
//         paddingTop: theme.spacing(20),
//         backgroundColor: "#8BE3D9",
//         position: "sticky",
//         top: 0,
//         [theme.breakpoints.down('sm')]: {
//             display: "none",
//             paddingTop: theme.spacing(10),
//         },
//         [theme.breakpoints.down('sm')]: {
//             display: "none",
//             paddingTop: theme.spacing(10),
//         },
//     },
//     item: {
//         display: "flex",
//         alignItems: "center",
//         color: "#FFFFFF",
//         cursor: "pointer",
//         borderRadius: "5px",
//         textDecoration: "none",
//         padding: "10px",
//         '&:hover': {
//             backgroundColor: "#FFFFFF",
//             color: "#000000"
//         },
//     },
//     item2: {
//         display: "flex",
//         alignItems: "center",
//         color: "#FFFFFF",
//         cursor: "pointer",
//         borderRadius: "5px",
//         textDecoration: "none",
//         padding: "6px",
//         '&:hover': {
//             backgroundColor: "#FFFFFF",
//             color: "#000000"
//         },
//     },
//     icon: {
//         marginRight: theme.spacing(1)
//     },
//     text: {
//         fontSize: 15,
//         fontWeight: 400,
//     },
//     bottomDiv: {
//         paddingTop: theme.spacing(1),
//         position: 'absolute',
//         bottom: 0,
//         width: "80%",
//         borderTop: "2px solid #FFFFFF ",
//         marginBottom: 10,
//         marginTop: 10,
//         marginLeft: 3,
//         marginRight: 3,
//         backgroundColor: "#8BE3D9"
//     },
//     topDiv: {
//         height: "70%",
//         overflowX: "hidden",
//         overflowY: "visible",
//         '&::-webkit-scrollbar-thumb': {
//             background: "#FF0000"
//         },
//         ' &::-webkit-scrollbar': {
//             width: 0,
//             background: 'transparent',
//         }
//     },
//     smallLogo: {
//         width: '10px'
//     },
//     bigLogo: {
//         position: 'absolute',
//         top: 5,
//         left: 20,
//         width: '200px',
//         padding: 5,
//         [theme.breakpoints.down('sm')]: {
//             display: "none",
//         },
//     },
//     btnShowHide: {
//         display: "none",
//         position: "absolute",
//         top: 10,
//         right: 10,
//         [theme.breakpoints.down('sm')]: {
//             display: "block"
//         },
//     },
//     toolbar: {
//         display: "none",
//         justifyContent: "space-between",
//         backgroundColor: "#8BE3D9",
//         [theme.breakpoints.down('sm')]: {
//             display: "flex"
//         },
//     },
//     logo: {
//         display: "block",
//     },
//     showIcon: {
//         alignItems: "center",
//         display: (props) => (props.show ? "none" : "block"),
//     },
//     hideIcon: {
//         alignItems: "center",
//         display: (props) => (props.show ? "block" : "none"),
//     },
// }));

// export default function Sidebar(props) {


//     let view = props.view;

//     const [show, setShow] = useState(true);

//     const classes = useStyles({ show });

//     const {
//         session: { user },
//         actions: { setSession }
//     } = useContext(SessionContext);

//     async function handleHideShow() {
//         (show) ?
//             setShow(false) :
//             setShow(true);
//     }

//     async function handleLogout() {

//         const id = getCookie('id');
//         const token = getCookie('token');

//         let reqBody = {
//             id: id,
//             token: token
//         }

//         try {
//             await API.post('logout', reqBody);
//         } catch (e) {
//             console.log(e);
//         }
//         removeCookie('id');
//         removeCookie('token');
//         removeCookie('role_id');
//         setSession({ user: {} });
//     }

//     useEffect(() => {
//         window.addEventListener('resize', e => {
//             (window.innerWidth > 960) ?
//                 setShow(true) :
//                 setShow(false);
//         })
//     }, [show])

//     return (
//           <div>{
//             <AppBar
//                 style={{ display: view ? 'block' : 'none' }}
//             >
//                 <Toolbar className={classes.toolbar}>

//                     <div className={classes.icons}>
//                         <a onClick={handleHideShow}>
//                             <Menu className={classes.showIcon} />
//                             <ClearAll className={classes.hideIcon} />
//                         </a>
//                     </div>

//                 </Toolbar>
//             </AppBar>

//         }

//             <div style={{ display: view ? 'block' : 'none' }} >

//                 <Container
//                     className={classes.container}
//                     style={{ display: show ? 'block' : 'none' }}
//                 >
//                     <Link
//                         to="/admin/panel"
//                         className={classes.item}
//                     >
//                         <Home className={classes.icon} />
//                         <Typography className={classes.text}>HOME</Typography>
//                     </Link>

//                     <Link
//                         to="/post/update/:id"
//                         className={classes.item}
//                     >
//                         <List className={classes.icon} />
//                         <Typography className={classes.text}>UPDATE POSTS</Typography>
//                     </Link>


//                     <Link
//                         to="/post/now"
//                         className={classes.item}
//                     >
//                         <Group className={classes.icon} />
//                         <Typography className={classes.text}>POSTS NOW</Typography>
//                     </Link>


//                     <Link
//                         to="/post/history"
//                         className={classes.item}
//                     >
//                         <Person className={classes.icon} />
//                         <Typography className={classes.text}>POSTS HISTORY</Typography>
//                     </Link>


//                     <Link
//                         to="/post/list"
//                         className={classes.item}
//                     >
//                         <Bookmark className={classes.icon} />
//                         <Typography className={classes.text}>Psts LISTS</Typography>
//                     </Link>


//                     <Link
//                         to="/list/user"
//                         className={classes.item}
//                     >
//                         <Storefront className={classes.icon} />
//                         <Typography className={classes.text}>USERS</Typography>
//                     </Link>



//                     <div className={classes.bottomDiv}>

//                         {/* <div style={{ 'display': user.role_id === "_SuPE8/@DmIn&^%(0)__" ? 'block' : 'none' }}> */}


//                         <Link
//                             to="/admin/profile"
//                             className={classes.item2}
//                         >
//                             <Settings className={classes.icon} />
//                             <Typography className={classes.text}>PROFILE</Typography>
//                         </Link>


//                         <a
//                             onClick={handleLogout}
//                             className={classes.item2}
//                         >
//                             <ExitToApp className={classes.icon} />
//                             <Typography className={classes.text}>LOGOUT</Typography>
//                         </a>

//                     </div>
//                 </Container >
//             </div>




//             <div style={{ display: view ? 'block' : 'none' }} >



//                 <Container
//                     className={classes.container}
//                     style={{ display: show ? 'block' : 'none' }}
//                 >

//                     {/* <img src={Logo} className={classes.bigLogo} alt="MOBAYED" /> */}

//                     <div className={classes.topDiv}>


//                         <Link
//                             to="/user/panel"
//                             className={classes.item}
//                         >
//                             <Home className={classes.icon} />
//                             <Typography className={classes.text}>HOME</Typography>
//                         </Link>



//                         <Link
//                             to="/post/old"
//                             className={classes.item}
//                         >
//                             <Timer className={classes.icon} />
//                             <Typography className={classes.text}>Old Posts</Typography>
//                         </Link>


//                         <Link
//                             to="/post/create"
//                             className={classes.item}
//                         >
//                             <InsertInvitation className={classes.icon} />
//                             <Typography className={classes.text}>Create Post</Typography>
//                         </Link>

//                     </div>

//                     <div className={classes.bottomDiv}>

//                         <Link
//                             to="/user/profile"
//                             className={classes.item2}
//                         >
//                             <Settings className={classes.icon} />
//                             <Typography className={classes.text}>PROFILE</Typography>
//                         </Link>

//                         <a
//                             onClick={handleLogout}
//                             className={classes.item2}
//                         >
//                             <ExitToApp className={classes.icon} />
//                             <Typography className={classes.text} >LOGOUT</Typography>
//                         </a>

//                         </div>
//                 </Container >
//             </div>
//                     </div>
//     )
// }





