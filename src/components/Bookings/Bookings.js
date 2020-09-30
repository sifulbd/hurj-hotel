import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [user, setuser] = useContext(UserContext);
    const[bookings, setBookings] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/bookings?email='+ user.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            } 
        })
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(err => err)
    }, [])
    return (
        <div>
            <h3>You have {bookings.length}</h3>
            {
                bookings.map(bk =><li key={bk._id}>
                    <b>{bk.name}</b> 
                    from <b>{new Date(bk.checkInDate).toDateString('dd/MM/yyyy')}</b> 
                    to <b>{new Date(bk.checkOutDate).toDateString('dd/MM/yyyy')}</b>
                </li>)
            }
        </div>
    );
};

export default Bookings;