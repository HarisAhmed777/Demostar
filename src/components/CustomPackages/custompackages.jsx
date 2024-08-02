import React,{useContext}from "react";
import './custompackages.css';
import cp1 from '../images/kodaikanal.webp';
import cp2 from '../images/wonderla.avif';
import cp3 from '../images/wayanadcity.jpg';
import cp4 from '../images/mysore.jpg';

import { Context } from "../context";
import {Link,useNavigate} from 'react-router-dom'
const packages = [
    {
        img: cp1,
        title: "Kodaikanal Hills",
        duration: "2 days 3 nights",
        guest:"4 to 6 guest",
        price: "1000",
        mainpara:"Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara:"Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation:"49 seater AC Couch",
        day1city:"Kodaikanal",
         day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
              {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
              }
            ],
          day2city:"Kodaikanal",
          day2mainpara:"After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
          day2plan:"After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
          packagecostperstudent:"Min 45",
          foodplan:"With Food",
          Groupsize:"45 Students",
          perheadcost:2000,
          costincludes:[
            {
                accomodation:"accomadation in non A/c rooms",
                assistance:"assistance on arrival",
                complimentary:"complimentary trip for 2 teachers",
                sharingplan:"Accomadation on quad share basic",
                meals:"2 BreakFast + 2Lunch + 3 dinners",

            }
          ],
          costexcludes:[
            {
                fare:"train/flight fare",
                portage:"Any portage at airports and hotels, and all items of personal nature.",
                laundry:"laundry",
                cam:"camera fees",
            }
          ]

          

    },
    {
        img: cp2,
        title: "Wonderla",
        duration: "3 days 2 nights",
        guest:"4 to 6 guest",
        price: "5000rs/person",
        mainpara:"Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara:"Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation:"49 seater AC Couch",
        day1city:"Kodaikanal",
         day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
              {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
              }
            ],
          day2city:"Kodaikanal",
          day2mainpara:"After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
          day2plan:"After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
          packagecostperstudent:"Min 45",
          foodplan:"With Food",
          Groupsize:"45 Students",
          perheadcost:2000,
          costincludes:[
            {
                accomodation:"accomadation in non A/c rooms",
                assistance:"assistance on arrival",
                complimentary:"complimentary trip for 2 teachers",
                sharingplan:"Accomadation on quad share basic",
                meals:"2 BreakFast + 2Lunch + 3 dinners",

            }
          ],
          costexcludes:[
            {
                fare:"train/flight fare",
                portage:"Any portage at airports and hotels, and all items of personal nature.",
                laundry:"laundry",
                cam:"camera fees",
            }
          ]
    },
    {
        img: cp3,
        title: "Wayanad City",
        duration: "3 days 2 nights",
        guest:"4 to 6 guest",
        price: "3000rs/person",
        mainpara:"Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara:"Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation:"49 seater AC Couch",
        day1city:"Kodaikanal",
         day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
              {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
              }
            ],
          day2city:"Kodaikanal",
          day2mainpara:"After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
          day2plan:"After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
          packagecostperstudent:"Min 45",
          foodplan:"With Food",
          Groupsize:"45 Students",
          perheadcost:2000,
          costincludes:[
            {
                accomodation:"accomadation in non A/c rooms",
                assistance:"assistance on arrival",
                complimentary:"complimentary trip for 2 teachers",
                sharingplan:"Accomadation on quad share basic",
                meals:"2 BreakFast + 2Lunch + 3 dinners",

            }
          ],
          costexcludes:[
            {
                fare:"train/flight fare",
                portage:"Any portage at airports and hotels, and all items of personal nature.",
                laundry:"laundry",
                cam:"camera fees",
            }
          ]
    },
    {
        img: cp4,
        title: "Mysore Palace",
        duration: "3 days 2 nights",
        guest:"4 to 6 guest",
        price: "3000rs/person",
        mainpara:"Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara:"Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation:"49 seater AC Couch",
        day1city:"Kodaikanal",
         day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
              {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
              }
            ],
          day2city:"Kodaikanal",
          day2mainpara:"After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
          day2plan:"After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
          packagecostperstudent:"Min 45",
          foodplan:"With Food",
          Groupsize:"45 Students",
          perheadcost:2000,
          costincludes:[
            {
                accomodation:"accomadation in non A/c rooms",
                assistance:"assistance on arrival",
                complimentary:"complimentary trip for 2 teachers",
                sharingplan:"Accomadation on quad share basic",
                meals:"2 BreakFast + 2Lunch + 3 dinners",

            }
          ],
          costexcludes:[
            {
                fare:"train/flight fare",
                portage:"Any portage at airports and hotels, and all items of personal nature.",
                laundry:"laundry",
                cam:"camera fees",
            }
          ]
    }
];

function Custompackages(){
    const {theme} = useContext(Context);
    const navigate = useNavigate();



    const handlebooking= (pkg)=>{
        const catogory = "custom package";
        pkg.catogory = catogory;
        navigate('/bookingpage', { state:pkg });

    }
    return(
        <div className={`w-100 container mb-5 ${theme?"bg-dark text-white":null}`}>
        <div className={` w-100 text-center `}>
            <div className="conatinerhead  ">
                <h2 className="text-start conatinerheading mb-3">Custom Holiday Packages </h2>
                <p className="text-start  conatinerpara mb-4">Explore personalised holiday packages tailored to your unique preferences at Star Holidays, where 
every detail is crafted to exceed your expectations. </p>
            </div>
            <div className={`cards-container`}>
                {packages.map((pkg, index) => (
                    <div key={index} className="card ">
                        <img className="cardimg" src={pkg.img} alt="Card image cap"/>
                        <div className={`card-bbody ${theme?"bg-dark text-white":null}`}>
                            <h5 className="card-title">{pkg.title}</h5>
                            <div className="d-flex ">
                            <p className="card-text">{pkg.duration}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{pkg.price}</p>
                               <button className="pb-2 pe-3 rounded-pill  bgc tbnn" onClick={()=>handlebooking(pkg)}>Book now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Custompackages;
