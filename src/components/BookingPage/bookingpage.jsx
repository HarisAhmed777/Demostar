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
  const cost = state.perheadcost
  const title = location.state ||{};
  const getCityValue = () => {
    // if (pkg.title) return pkg.title;
    if(state.title) return state.title;
    // if(title) return(title)
    // if (pkglocation) return pkg.pkg.location;

    return '';
  };
const getcatogoryvalue = ()=>{
  if(state.catogory) return state.catogory;
}
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [persons, setPersons] = useState(1);
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [mobile, setMobile] = useState("");
  const [catogory,setCatogory] = useState("");
  const [email, setEmail] = useState("");
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPromoValid, setIsPromoValid] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(Context);

  useEffect(() => {
    setEmail(user || "");
    setCity(getCityValue());
    setCatogory(getcatogoryvalue())
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
    const totalAmountPerDay = persons * cost;
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
    const bookingData = {
      name,
      age,
      email,
      persons,
      city,
      catogory,
      startdate: startdate, // Pass the date object directly
      enddate: enddate, // Pass the date object directly
      mobile,
      totalamount: calculateTotalAmount(),
      promocode,
    };
    const combineddata = {
      ...state,
      ...bookingData
    }
    if (!user || Object.keys(user).length === 0) {
      toast.error("Please login and try again");
    }
    else{
      navigate('/paymentpage',{state:combineddata});

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
        <img src={state.img?state.img:cp4} alt="booking img" className="bookingimg" />
        <div className="container mt-2">
          <div className="mb-4">
          <h5>Destinations covered</h5>
            <p>{state.mainpara}</p>
            <p>{state.subpara}</p>
          </div>
          <div className="mb-4">
            <h5 className="bg-secondary mb-4"><span className="ms-2">
            Transportation</span></h5>
            <p className="ms-2">{state.Transportation}</p>
          </div>
          <div>
          <h5 className="bg-secondary mb-4"><span className="ms-2">Day 1 :{state.day1city}</span></h5>
          <p className="mb-3 ms-2">Food ,BreakFast Lunch and Dinner</p>
          <ul className="ms-4">
          {Object.keys(state.day1plan[0]).map((key, index) => (
          <li key={index}>{state.day1plan[0][key]}</li>
          ))}
          </ul>
          <p>After sightseeing them return to hotel</p>
          <p>Overnight at {state.day1city}</p>
          </div>
          <div>
          <h5 className="bg-secondary mb-4"><span className="ms-2">Day 1 :{state.day1city}</span></h5>
          <p className="mb-3 ms-2">Food ,BreakFast Lunch and Dinner</p>
            <p>{state.day2mainpara}</p>
            <p className="ms-2">{state.day2plan}</p>
          </div>
          <div>
          <h5 className="bg-secondary mb-4"><span className="ms-2">Package cost per student{state.packagecostperstudent}</span></h5>
          <div className="d-flex justify-content-between">
          <p>Food plan :{state.foodplan}</p>
          <p>Group size :{state.Groupsize}</p>
          <p>Per head Cost :{state.perheadcost}</p>
          
          </div>
            <hr />
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <h5>Cost Includes</h5>
              <ul className="ms-4">
              {Object.keys(state.costincludes[0]).map((key, index) => (
          <li key={index}>{state.costincludes[0][key]}</li>
          ))}
              </ul>
            </div>
            <div>
              <h5>Cost excludes</h5>
              <ul className="ms-4">
              {Object.keys(state.costexcludes[0]).map((key, index) => (
          <li key={index}>{state.costexcludes[0][key]}</li>
          ))}
              </ul>
            </div>
          </div>
          
        </div>
        <div className="container">
                    <h2>For more details</h2>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <p>Call Us <br /><span className="cllr fw-bold">+919876543210</span></p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p>Email <br /><span className="cllr fw-bold">info@starholiday.com</span></p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p>Office<br /><span className="cllr fw-bold">Navalpur Mosque Street <br />Ranipet-632401</span></p>
                        </div>
                    </div>
                </div>
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
              <div className="row">
              <div className="form-group col-lg-6">
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
              <div className="col-lg-6">
                <label htmlFor="">Catogory</label>
                <input 
                type="text"
                className="bookinginput m-0 pt-1"
                value={getcatogoryvalue()} />

              </div>
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
