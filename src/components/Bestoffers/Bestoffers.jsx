import React, { useContext } from 'react';
import { Context } from '../context';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Bestoffers.css';
import Offer from './Offer';
import cp1 from '../images/kodaikanal.webp';
import cp2 from '../images/wonderla.avif';
import cp3 from '../images/wayanadcity.jpg';
import cp4 from '../images/mysore.jpg';

function Bestoffers() {
  const { theme } = useContext(Context);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const offersData = [
    {
      img: cp1,
      title: "Kodaikanal Hills",
      duration: "2 days 3 nights",
      price: "1000rs/person",
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
        perheadcost:"Rs:2000",
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
      duration: "5 days 4 nights",
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
        perheadcost:"Rs:2000",
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
      title: "Mysore",
      duration: "3 days 2 nights",
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
        perheadcost:"Rs:2000",
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
      duration: "2 days 3 nights",
      price: "1000rs/person",
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
        perheadcost:"Rs:2000",
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
      img: cp1,
      title: "Kolli Hills",
      duration: "5 days 4 nights",
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
        perheadcost:"Rs:2000",
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
        perheadcost:"Rs:2000",
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

  return (
    <div className={`container ${theme ? "bg-dark text-white" : ""}`}>
      <div className="mb-5">
        <div className='container mb-4'>
          <h2 className='mb-2 container-heading'>Exclusive Holiday Deals</h2>
          <p className='mb-4 ms-3'>Explore exclusive holiday deals crafted to make your dream vacation a reality.</p>
          <div>
            <Carousel responsive={responsive}>
              {offersData.map((offer, index) => (
                <Offer key={index} {...offer} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestoffers;
