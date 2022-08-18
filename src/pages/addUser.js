import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../redux/actions';


const AddUser = () => {
    let history = useHistory();
    let dispatch = useDispatch();

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });
    const [error, setError] = useState("");

    const { name, email, contact, address } = state;
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !email || !contact) {
            setError("Please fill all input fields ");
        } else {
            dispatch(addUser(state));
            history.push("/");
            setError("");

        }
    }

    return (
        <div style={{ "display": "flex", flexDirection: "column", "justifyContent": "center", "alignItems": "center", marginTop: 24 }}>
            <Button variant="outlined" type='submit' onClick={() => history.push("/")} >
                Go back
            </Button>
            <h3>Add User</h3>
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            <form noValidate autoComplete="off" style={{ "display": "flex", flexDirection: "column", "justifyContent": "center", "alignItems": "center", margin: "16px", minWidth: "300px" }} onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Name" variant="standard" type="text" name='name' fullWidth value={name} onChange={handleInputChange} /> <br />

                <TextField id="standard-basic" label="Email" variant="standard" type="email" name='email' fullWidth value={email} onChange={handleInputChange} /> <br />

                <TextField id="standard-basic" label="Contact" variant="standard" type="number" name='contact' fullWidth value={contact} onChange={handleInputChange} /> <br />

                <TextField id="standard-basic" label="Address" variant="standard" type="text" name='address' fullWidth value={address} onChange={handleInputChange} /> <br />

                <Button variant="contained" type='submit' onClick={() => history.push("/addUser")} >
                    Add User
                </Button>
            </form>
        </div >

    )
}

export default AddUser;