import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button, Container } from '@material-ui/core';
import Bookings from '../Bookings/Bookings';

const Book = () => {
    const {bedType} = useParams();
    const [user, setuser] = useContext(UserContext);
    let tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1);
    const [selectedDate, setSelectedDate] = useState({
        checkInDate: new Date(),
        checkOutDate: tomorrow
        
    });

    const handleCheckInDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkInDate = date;
        setSelectedDate(newDates)
    };
    const handleCheckOutDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkOutDate = date;
        setSelectedDate(newDates) 
    };
    const handleBtnClick = () => {
        const newBooking = {...user, ...selectedDate}
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json()
        .then(data => console.log(data))
    )}

    return (
        <div style={{textAlign: 'center'}}>
            <p>Hello, {user.name}</p>
            <h1>Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    // disableToolbar
                    // variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Select CheckIn date"
                    value={selectedDate.checkInDate}
                    onChange={handleCheckInDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Select Checkout Date"
                    format="dd/MM/yyyy"
                    value={selectedDate.checkOutDate}
                    onChange={handleCheckOutDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <Button className="btn" variant="contained" color="secondary" onClick={handleBtnClick}>Confirm Booking</Button>

            <Container>
                    <Bookings></Bookings>
            </Container>
        </div>
    );
};

export default Book;