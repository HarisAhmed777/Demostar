import React, { useState, useContext, useEffect } from "react";
import './bookingpage.css';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../context';
import { baseUrl } from '../../../url';
// import bookingimg from '../images/bookingpageimg.jpg';
import cp4 from '../images/cp2.avif';

function Booking() {
  const location = useLocation();
  const [city, setCity] = useState(location.state?.city || '');
  const { datas } = location.state || {};
  const { pkg } = location.state || {};

  const getCityValue = () => {
    if (city) return city;
    if (datas?.location) return datas.location;
    if (pkg?.loc) return pkg.loc;
    return '';
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [persons, setPersons] = useState("");
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0); // State to store the discount
  const [isPromoValid, setIsPromoValid] = useState(false); // State to store promo validation status

  const navigate = useNavigate();
  const { user } = useContext(Context);

  useEffect(() => {
    setEmail(user);
  }, [user]);

  const handleStartDateChange = (date) => {
    setStartdate(date);
    setEnddate(date);
  };

  const handleEndDateChange = (date) => {
    setEnddate(date);
  };

  const calculateDays = () => {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const differenceInTime = end - start;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays + 1;
  };

  const calculateTotalAmount = () => {
    const days = parseInt(calculateDays());
    const totalamountPerDay = adults * 1100 + children * 600;
    const totalamount = parseInt(totalamountPerDay * days);
    const discountedAmount = totalamount - (totalamount * discount / 100);
    return parseInt(discountedAmount);
  };

  const validatePromoCode = async () => {
    try {
      const response = await axios.post(`${baseUrl}/validate-promocode`, { promocode });
      if (response.data.status === "ok") {
        setDiscount(response.data.discount);
        setIsPromoValid(true);
        toast.success("Promo code applied successfully!", { autoClose: 3000 });
      } else {
        setDiscount(0);
        setIsPromoValid(false);
        toast.error("Invalid promo code", { autoClose: 3000 });
      }
    } catch (error) {
      setDiscount(0);
      setIsPromoValid(false);
      toast.error("Error validating promo code", { autoClose: 3000 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      name,
      age,
      email,
      persons,
      city,
      startdate,
      enddate,
      adults,
      children,
      mobile,
      totalamount: calculateTotalAmount(),
      promocode, // Add promocode to booking data
    };
    try {
      const response = await axios.post(`${baseUrl}/booking`, bookingData);
      if (response.data.status === "ok") {
        toast.success("Booking confirmed successfully, See Dashboard", { autoClose: 3000 });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error("Internal Server error");
      }
    } catch (error) {
      toast.error("Please Login and try again");
    }
  };

  const totalamount = calculateTotalAmount();

  return (
    <>
      <img src={cp4} alt="" className="packageimg" />
      <div className="booking-container pt-5 text-dark">
        <h2 className="fw-bold">Book now</h2>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="form-row">
            <div className="form-group">
              <input type='text' className="bookinginput text-dark" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="form-group">
              <input type='number' className="bookinginput text-dark" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type='number' className="bookinginput text-dark" placeholder="Enter number of persons" value={persons} onChange={(e) => setPersons(e.target.value)} required />
            </div>

            <div className="form-group">
              <input
                type="text"
                value={getCityValue()}
                placeholder="Enter city name"
                className="bookinginput text-dark"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Enter how many adults</label>
              <select className="bookinginput text-dark" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                {[...Array(11).keys()].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Enter promo code"
                className="bookinginput  text-dark"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
              />
              <button type="button" className="btn btn-primary mt-5  bookingbtn" onClick={validatePromoCode}>
                Apply
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date:</label>
              <DatePicker
                selected={startdate}
                onChange={handleStartDateChange}
                className="bookinginput date-picker text-dark"
                minDate={new Date()}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date:</label>
              <DatePicker
                selected={enddate}
                onChange={handleEndDateChange}
                className="bookinginput date-picker text-dark"
                minDate={startdate}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <PhoneInput
              country={'in'}
              value={mobile}
              onChange={setMobile}
              inputClass="bookinginput phone-input text-dark"
              specialLabel=""
              countryCodeEditable={false}
            />
          </div>

          <div className="text-center">
            <h5>The total amount will be: {totalamount} Rs</h5>
          </div>

          <div className="text-center">
            <button type="submit" className="btn-booking">Book Now</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Booking;
