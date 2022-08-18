import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getSingleUser } from '../redux/actions';



const EditUser = () => {
    let history = useHistory();
    let { id } = useParams();
    let dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });
    const [error, setError] = useState("");

    useEffect(() => {
        dispatch(getSingleUser(id));
    }, [id]);

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user]);

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
            dispatch(updateUser(state, id));
            history.push("/");
            setError("");

        }
    }

    return (
        <div style={{ "display": "flex", flexDirection: "column", "justifyContent": "center", "alignItems": "center", marginTop: 24 }}>
            <Button variant="outlined" type='submit' onClick={() => history.push("/")} >
                Go back
            </Button>
            <h3>Edit User</h3>
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            <form noValidate autoComplete="off" style={{ "display": "flex", flexDirection: "column", "justifyContent": "center", "alignItems": "center", margin: "16px", minWidth: "300px" }} onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Name" fullWidth variant="standard" type="text" name='name' value={name || ""} onChange={handleInputChange} /> <br />
                <TextField id="standard-basic" label="Email" fullWidth variant="standard" type="email" name='email' value={email || ""} onChange={handleInputChange} /> <br />
                <TextField id="standard-basic" label="Contact" fullWidth variant="standard" type="text" name='contact' value={contact || ""} onChange={handleInputChange} /> <br />
                <TextField id="standard-basic" label="Address" fullWidth variant="standard" type="text" name='address' value={address || ""} onChange={handleInputChange} /> <br />
                <Button variant="contained" type='submit' >
                    Update
                </Button>
            </form>
        </div >

    )
}

export default EditUser;