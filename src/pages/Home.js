import React, { useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from '../redux/actions';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Home = () => {
    // const classes = useStyles();
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    let history = useHistory();
    useEffect(() => {
        dispatch(loadUsers());
    }, []);
    const handleDelete = (id) => {
        if (window.confirm("Are you sure, wanted to delete the user?")) {
            dispatch(deleteUser(id));
        }
    }

    return (
        <div>
            <div style={{ margin: "16px", "display": "flex", "justifyContent": "flex-end" }}>
                <Button variant="contained" onClick={() => history.push("/addUser")} >
                    Add User
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Contact</StyledTableCell>
                            <StyledTableCell align="left">Address</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length > 0 && users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component="th" scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{user.email}</StyledTableCell>
                                <StyledTableCell align="left">{user.contact}</StyledTableCell>
                                <StyledTableCell align="left">{user.address}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <ButtonGroup disableElevation variant="contained">
                                        <Button color="secondary" style={{ marginRight: "5px" }}
                                            onClick={() => handleDelete(user.id)}
                                        >Delete</Button>
                                        <Button color="primary" onClick={() => history.push(`/editUser/${user.id}`)}>Edit</Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default Home