import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import { baseUrl } from "../../../url";
import 'react-toastify/dist/ReactToastify.css'; // Ensure you have this import for toastify CSS



function Bookingpage2() {
    const location = useLocation();
    const loc = location.state || {};
    console.log(loc);
    const name = loc.name;
    const age = loc.age;
    const email = loc.email;
    const persons = loc.persons;
    const city = loc.city;
    const catogory = loc.catogory;
    const startdate = loc.startdate;
    const enddate = loc.enddate;
    const mobile = loc.mobile;
    const totalamount = loc.totalamount;
    const promocode = loc.promocode;
    const navigate = useNavigate();

    function handlepaymentbooking() {
        if (!email) {
            toast.error("Please login to proceed with the booking", { autoClose: 3000 });
            return;
        }

        var options = {
            key: "rzp_test_hDsakaidaRXD9P",
            key_secret: "PGB1vHAy241V6ek8Ofmmb0UV",
            amount: loc.totalamount * 100,  // Amount in paise
            currency: "INR",
            name: "Haris Ahmed Company",
            description: "Testing payment",
            handler: async function (response) {
                const booking_id = response.razorpay_payment_id;
                const bookingData = {
                    booking_id,
                    name,
                    age,
                    email,
                    persons,
                    city,
                    catogory,
                    startdate, // Pass the date object directly
                    enddate, // Pass the date object directly
                    mobile,
                    totalamount,
                    promocode,
                };

                try {
                    const resp = await axios.post(`${baseUrl}/booking`, bookingData);
                    if (resp.data.status === "ok") {
                        toast.success("Booking confirmed successfully, See Dashboard", { autoClose: 3000 });
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                    } else {
                        toast.error("Internal Server error", { autoClose: 3000 });
                    }
                } catch (error) {
                    toast.error("Please Login and try again", { autoClose: 3000 });
                }
            },
            prefill: {
                name: loc.name,
                email: loc.email,
                contact: loc.mobile
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: '#3399cc'
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }

    return (
        <>
            <h2 className="paddingtop container">Confirm Booking</h2>
            <div className="container">
                <div className="card mb-3">
                    <div className="d-flex">
                        <div className="">
                            <img className="img-fluid" src={loc.img} alt="Card image cap" style={{ height: "300px" }} />
                        </div>
                        <div className="">
                            <div className="card-body">
                                <h5 className="card-title">{loc.title}</h5>
                                <p className="card-text"><strong>Duration:</strong> {loc.duration}</p>
                                <p className="card-text"><strong>Persons:</strong> {loc.persons}</p>
                                <p className="card-text"><strong>City:</strong> {loc.city}</p>
                                <p className="card-text"><strong>Total Amount:</strong> ₹{loc.totalamount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="additional-info">
                    <h4>Package Details</h4>
                    <p>{loc.mainpara}</p>
                    <p><strong>Group Size:</strong> {loc.Groupsize}</p>
                    <p><strong>Transportation:</strong> {loc.Transportation}</p>
                    <p><strong>Food Plan:</strong> {loc.foodplan}</p>
                    <h4>Day-wise Plan</h4>
                    <div className="day-plan">
                        <h5>Day 1: {loc.day1city}</h5>
                        <p>{loc.day1}</p>
                        <h5>Day 2: {loc.day2city}</h5>
                        <p>{loc.day2mainpara}</p>
                        <p>{loc.day2plan}</p>
                    </div>
                </div>
                <button className="btn btn-primary mb-4" onClick={handlepaymentbooking}>Confirm payment</button>
                <ToastContainer/>
            </div>
        </>
    );
}

export default Bookingpage2;
