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
import { format } from 'date-fns';
import cp4 from '../images/cp2.avif';

function Booking() {
  const location = useLocation();
  const state = location.state || {};
  console.log(state)
  const title = location.state ||{};
  const getCityValue = () => {
    // if (pkg.title) return pkg.title;
    if(state.title) return state.title;
    // if(title) return(title)
    // if (pkglocation) return pkg.pkg.location;

    return '';
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [persons, setPersons] = useState(1);
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPromoValid, setIsPromoValid] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(Context);

  useEffect(() => {
    setEmail(user);
    setCity(getCityValue());
  }, [user]);

  const handleStartDateChange = (date) => {
    setStartdate(date);
    setEnddate(date);
  };

  const handleEndDateChange = (date) => {
    setEnddate(date);
  };

  const handlevalidateperson =  (e)=>{
    const value = e.target.value
    if (/^\d{1,5}$/.test(value))
    setPersons(value);
  }
  const handleagechange = (e)=>{
    const value =e.target.value
    if (/^\d{0,2}$/.test(value))
    setAge(value);
  }

  const calculateDays = () => {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const differenceInTime = end - start;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays + 1;
  };

  const calculateTotalAmount = () => {
    const days = parseInt(calculateDays());
    const totalAmountPerDay = persons * 1100;
    const totalAmount = parseInt(totalAmountPerDay * days);
    const discountedAmount = totalAmount - (totalAmount * discount / 100);
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
    if (age < 18 || age > 80) {
      toast.error("Age must be between 18 and 80", { autoClose: 3000 });
      return;
    }
    if (persons < 1) {
      toast.error("Number of persons must be at least 1.", { autoClose: 3000 });
      return;
    }
    const formattedStartDate = format(startdate, 'dd-MM-yyyy');
    const formattedEndDate = format(enddate, 'dd-MM-yyyy');
    const bookingData = {
      name,
      age,
      email,
      persons,
      city,
      startdate: formattedStartDate,
      enddate: formattedEndDate,
      mobile,
      totalamount: calculateTotalAmount(),
      promocode,
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

  const validateName = (value) => /^[A-Za-z\s]+$/.test(value);
  const validateAge = (value) => /^[0-9]+$/.test(value);
  const validatePersons = (value) => /^[0-9]+$/.test(value) && value >= 1;
  const validatePromo = (value) => /^[A-Za-z0-9]+$/.test(value);
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (validateName(value) || value === "") {
      setName(value);
    }
  };
  const handlepromochange = (e) => {
    const value = e.target.value;
    if (validatePromo(value) || value === "") {
      setPromocode(value);
    }
  };

  const totalamount = calculateTotalAmount();

  return (
    <>
      <div className="paddingtop">
        <img src={cp4} alt="" className="bookingimg" />
        <div className="booking-container pt-5 text-dark">
          <h2 className="fw-bold">Book now</h2>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="row">
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type='text' 
                    className="bookinginput text-dark" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={handleNameChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type='text' 
                    className="bookinginput text-dark" 
                    placeholder="Enter your age" 
                    value={age} 
                    onChange={handleagechange} 
                    required 
                    pattern="[0-9]+"
                    title="Age should be a number."
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input 
                    type='text' 
                    className="bookinginput text-dark" 
                    placeholder="Enter number of persons" 
                    value={persons} 
                    onChange={handlevalidateperson} 
                    required 
                    pattern="[0-9]+"
                    title="Number of persons should be a number."
                    min="1"
                  />
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
                <div className="form-group d-inline">
                  <label>Start Date:</label>
                  <DatePicker
                    selected={startdate}
                    onChange={handleStartDateChange}
                    className="bookinginput date-picker text-dark"
                    minDate={new Date()}
                    dateFormat="dd-MM-yyyy"
                    required
                  />
                </div>

                <div className="form-group d-inline">
                  <label>End Date:</label>
                  <DatePicker
                    selected={enddate}
                    onChange={handleEndDateChange}
                    className="bookinginput date-picker text-dark"
                    minDate={startdate}
                    dateFormat="dd-MM-yyyy"
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
                  countryCodeEditable={true}
                />
              </div>

              <div className="text-center">
                <h5>The total amount will be: {totalamount} Rs</h5>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="bookinginput text-dark"
                  value={promocode}
                  onChange={handlepromochange}
                />
                <div className="text-center">
                  <button type="button" className="btn-primary bookingbtn" onClick={validatePromoCode}>
                    Apply Promo Code
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn-booking">Book Now</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Booking;
