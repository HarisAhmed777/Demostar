import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context";
import { baseUrl } from "../../../url";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TablePagination, Typography
} from '@mui/material';
import './userbooking.css'; 

function UserBooking() {
    const [data, setData] = useState([]);
    const { user } = useContext(Context);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetch(`${baseUrl}/userbooking?mail=${user}`)
            .then(res => res.json())
            .then(view => {
                setData(view);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, [user]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className='userbookinghwholediv mt-3'>
            <div className=''>
                <Typography variant="h4" className='userbooking-header px-2 fw-light'>Your Bookings</Typography>
                <TablePagination
                            component="div"
                            count={data.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            rowsPerPageOptions={[5, 10, 25]}
                        />
                {data.length > 0 ? (
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Persons</TableCell>
                                        <TableCell>Bookings and Details</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((booking, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{booking.persons}</TableCell>
                                            <TableCell>
                                                <p><span className='booking-label'>Booking ID:</span> {booking.booking_id}</p>
                                                <p><span className='booking-label'>Name:</span> {booking.name}</p>
                                                <p><span className='booking-label'>City:</span> {booking.city}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p><span className='booking-label'>Start Date:</span> {new Date(booking.startdate).toLocaleDateString()}</p>
                                                <p><span className='booking-label'>End Date:</span> {new Date(booking.enddate).toLocaleDateString()}</p>
                                            </TableCell>
                                            <TableCell>{booking.totalamount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                    </Paper>
                ) : (
                    <Typography variant="body1" className='no-bookings'>No bookings found.</Typography>
                )}
            </div>
        </div>
    );
}

export default UserBooking;
