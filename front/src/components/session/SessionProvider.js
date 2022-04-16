import React, { useState, useEffect } from 'react';
import SessionContext from './SessionContext';
import { setCookie, getCookie, removeCookie } from '../../cookies';
import { toast } from 'react-toastify';
import { useHistory } from "react-router";

export default function SessionProvider({ children }) {

    let history = useHistory();


    const [session, setValue] = useState({
        user: {
            result: {},
            token: getCookie('token'),
        }
    });
    const [role, setRole] = useState("");
    const [usernameee, setusernameee] = useState("")

    useEffect(() => {

        let id = getCookie('id');
        let token = getCookie('token');
        if (token) fetch(`http://localhost:9000/user/${id}`, {
            headers: {
                'token': token
            }
        }).then(res => res.json()).then(res => {
            let data = res.result;
            let user = { ...data, token };
            console.log(user)
            updateSession({ user });
            setRole(user.role)
            setusernameee(user.username)
        });

    }, []);

    function updateSession(nextSession) {
        let value = typeof nextSession === "function" ?
            nextSession : prevSession => ({ ...prevSession, ...nextSession });
        setValue(value);
    }

    async function login({ username, password }) {

        // try to login
        let { error, id = 4, token } = await fetch('http://localhost:9000/login', {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json());

        // return from the function if you have an error
        if (error || !token) return toast.error(error);

        // get the data of the loggedin user
        let response = await fetch(`http://localhost:9000/user/${id}`, {
            headers: {
                'token': token
            }
        }).then(res => res.json());

        let user = { ...response.result, token };

        setCookie('id', id, 30);
        setCookie('token', token, 30);

        updateSession({ user, token });

        setRole(user.role)

        toast.success(`Welcome ${user.firstname}!`);

    }

    async function logout() {
        let id = getCookie('id');
        let token = getCookie('token')
        let body = null;
        body = new URLSearchParams();

        body.append('token', token);
        body.append('id', id);

        await fetch(`http://localhost:9000/logout`, {

            method: "post",
            body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        updateSession({ user: { token: null } });
        removeCookie('id');
        removeCookie('token');
    }

    const context = {
        session,
        role,
        usernameee,
        actions: {
            login,
            logout,
            updateSession
        }
    }

    return (
        <SessionContext.Provider value={context}>
            {children}
        </SessionContext.Provider>
    )
}