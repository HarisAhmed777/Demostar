import React from 'react';
import { useLocation } from 'react-router-dom';

function Bookingpage() {
    const location = useLocation();
    const bookingData = location.state;

    return (
        <>
            <div className="container pt-5">
                <h1>Booking Details</h1>
                {bookingData ? (
                    <div>
                        <p><strong>Selected is :</strong> {bookingData.tab}</p>

                        <p><strong>Location:</strong> {bookingData.location}</p>
                        <p><strong>Start Date:</strong> {bookingData.startDate.toLocaleDateString()}</p>
                        <p><strong>End Date:</strong> {bookingData.endDate.toLocaleDateString()}</p>
                        <p><strong>Guests:</strong> {bookingData.guests}</p>
                    </div>
                ) : (
                    <h1>This is a booking page</h1>
                )}
            </div>
        </>
    );
}

export default Bookingpage;
