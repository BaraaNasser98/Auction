// import React, { useState, useEffect, useContext } from 'react'
// import API from '../API'
// import SessionContext from "./session/SessionContext"

// import { TextField } from '@material-ui/core';
// import { Autocomplete } from '@material-ui/lab';

// export default function Users(props) {


//     let { session: { user: { id, token } } } = useContext(SessionContext);

//     const [users, setUsers] = useState([]);

//     useEffect(() => {

//         async function fetchData() {
//             await API.get(`user`, {
//                 headers: {
//                     id: id,
//                     token: token
//                 }
//             })
//                 .then(res => {
//                     const result = res.data.result;
//                     setUsers(result);
//                 });
//         }
//         fetchData();
//     }, [props.value]);

//     return (
//         <Autocomplete
//             options={users}
//             getOptionLabel={(option) => option.firstname + " " + option.lastname +  " - " + option.id}
//             value={props.value != "" ? users.find(p => p.id == props.value) : null}
//             onChange={props.onChange}
//             renderInput={(params) =>
//                 <TextField
//                     fullWidth
//                     required
//                     {...params}
//                     variant="outlined"
//                     label="user"
//                     className={props.className}
//                 />
//             }
//         />
//     );
// }