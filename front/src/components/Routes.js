import React, { useContext } from "react";
import { Switch, Route } from 'react-router-dom'
import SessionContext from "./session/SessionContext"
import { Redirect } from "react-router";

import Home from '../pages/Home/Home'

import Admin_Panel from '../pages/Admin_Panel/Admin_Panel'
import User_Panel from '../pages/User_Panel/User_Panel'

import Update_Profile_Admin from '../pages/Admin_Panel/Manage_Profile/Update_Profile'
import Update_Profile_User from '../pages/User_Panel/Update_Profile'

// import List_User from '../pages/Admin_Panel/List_User'

import List_Post from '../pages/Admin_Panel/Manage_Post/List_Post'
import SinglePost from '../pages/Admin_Panel/Manage_Post/SinglePost'
// import History_Post from '../pages/Admin_Panel/Manage_Post/History_Post'
import Now_Post from '../pages/User_Panel/Manage_Post/Now_Post'
import UserSinglePost from '../pages/User_Panel/Manage_Post/SinglePost'
import Update_Post from '../pages/Admin_Panel/Manage_Post/Update_Post'
import Login from "../pages/Home/login"

import Create_Post from '../pages/User_Panel/Manage_Post/Create_Post'
// import Old_Post from '../pages/User_Panel/Manage_Post/Old_Post'

import Create_Auction from '../pages/User_Panel/Create_Auction'
import Register from '../pages/Home/Register'
import ContactUs from '../pages/Home/ContactUs'
import AboutUs from '../pages/Home/AboutUs'

import Change_Information_Admin from '../pages/Admin_Panel/Manage_Profile/Change_Information_Admin'
import Change_Password_Admin from '../pages/Admin_Panel/Manage_Profile/Change_Password_Admin'

export default function Routes(props) {

    const {
        session: { user: { token } }
    } = useContext(SessionContext);


    return (
        <Switch>


            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path="/Register" component={Register} token={token} />
            <PublicRoute path="/login" component={Login} token={token} />


            <PublicRoute path="/AboutUs"  component={AboutUs}  />
            <PublicRoute path="/ContactUs" exact component={ContactUs}/>

            <PrivateRoute path="/adminpanel" component={Admin_Panel} token={token} />
            <PrivateRoute path="/userpanel" component={User_Panel} token={token} />

            <PrivateRoute path="/adminprofile" component={Update_Profile_Admin} token={token} exact />
            <PrivateRoute path="/userprofile" component={Update_Profile_User} token={token} />
            {/* <PrivateRoute path="/listuser" component={List_User} token={token} /> */}

            <PrivateRoute path="/postlist" component={List_Post} token={token} />
            <PrivateRoute path="/post/:id" component={SinglePost} token={token} />

            {/* <PrivateRoute path="/post/history" component={History_Post} token={token} /> */}
            <PrivateRoute path="/postnow" component={Now_Post} token={token} />
            <PrivateRoute path="/userpost/:id" component={UserSinglePost} token={token} />
            {/* <PrivateRoute path="/hahaha" component={Now_Post} token={token} /> */}

            <PrivateRoute path="/postupdate/:id" component={Update_Post} token={token} />

            <PrivateRoute path="/postcreate" component={Create_Post} token={token} />
            {/* <PrivateRoute path="/postold" component={Old_Post} token={token} /> */}

            <PrivateRoute path="/createauction" component={Create_Auction} token={token} />


            <PrivateRoute path="/adminprofileinformation" component={Change_Information_Admin} token={token} />
            <PrivateRoute path="/adminprofilepassword" component={Change_Password_Admin} token={token} />

        </Switch>
    )
}

function PublicRoute({ path, component: Component, token, ...props }) {
    return (
        <Route {...props} path={path} render={props => token ?
            <Redirect to="/" /> :
            <Component {...props} />
        } />
    )
}

function PrivateRoute({ path, component: Component, token, ...props }) {
    return (
        <Route {...props} path={path} render={props => token ?
            <Component  {...props} /> :
            <Redirect to="/login" />
        } />
    )
}