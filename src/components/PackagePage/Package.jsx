import React,{useRef,useEffect} from 'react';
import './Package.css';
import { Link } from 'react-router-dom';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import PackageSecondPage from './Packagesecondpage';
import { useNavigate } from 'react-router-dom';

function PackagePage() {
  const navigate = useNavigate();
  const packagesecondpageref = useRef(null);
  const custompackages = [
    {
      img: cp1,
      title: 'KanyaKumari Expenditure',
      duration: '3 days 4 nights',
      loc: 'Rameshwaram (2N) KanyaKumari (2N)',
      price: '3,400',
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
      img: cp1,
      title: 'Chennai Expenditure',
      duration: '2 days 3 nights',
      loc: 'malls(2N) Muselum(2N)',
      price: '1,400',
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
      img: cp1,
      title: 'Ooty Expenditure',
      duration: '4 days 5 nights',
      loc: 'hills(2N) forest(2N)',
      price: '3,400',
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
      img: cp1,
      title: 'Munnar Expenditure',
      duration: '5 days 6 nights',
      loc: 'Munnar top(3N) down(2N)',
      price: '5,200',
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
  ];
  function handlepackagebooking(pkgw,catogory){
    const pkg= {
      title:pkgw.title,
      img :pkgw.img,
      duration :pkgw.duration,
      price:pkgw.price,
      catogory:catogory,
      mainpara:pkgw.mainpara,
      subpara:pkgw.subpara,
      Transportation:pkgw.Transportation,
      day1city:pkgw.day1city,
      day1plan:pkgw.day1plan,
      day2city:pkgw.day2city,
      day2mainpara:pkgw.day2mainpara,
      day2plan:pkgw.day2plan,
      packagecostperstudent:pkgw.packagecostperstudent,
      foodplan:pkgw.foodplan,
      Groupsize:pkgw.Groupsize,
      perheadcost:pkgw.perheadcost,
      costincludes:pkgw.costincludes,
      costexcludes:pkgw.costexcludes
    }
    navigate('/bookingpage',{state:pkg})
  }

  function scrollToPackageSecondPage() {
    packagesecondpageref.current.scrollIntoView({ behavior: 'smooth' });
}


  return (
    <>
    <div className='paddingtop'>
      <div   className="packageimg">
        <h1 className="text-white mb-5">
          Trek, Chill, Repeat <br />
          Book Your Escape
        </h1>
        <p className="text-warning fw-bold">
          Himachal Holiday Starting at <span className="text-warning">Rs:17000/</span>
        </p>
        <button className="packagemainbtn bgc" onClick={scrollToPackageSecondPage}>Enquire Now</button>
      </div>
    </div>

      <div className="container mt-5 mb-5">
        <h2 className='mb-2 ml1'>Discover Star Holidays' Exclusive Holiday Packages </h2>
        <p className='ml1'>
          <span className="purple  fw-bold">Explore</span>  our meticulously crafted holiday packages that cater to every traveller's unique 
preferences. From luxurious retreats to adventurous expeditions, each package promises 
unparalleled experiences that capture the essence of travel. Begin your journey with Star Holidays 
and unlock extraordinary destinations and memories. 
        </p>
        <div className="row">
          <h2 className='ml1'>School Package</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-3 col-lg-4 mb-4">
              <div className="card h-100 packaecard">
                <img className="cardimg" src={pkg.img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-title fw-bold">{pkg.title}</p>
                  <p className="card-text purple">{pkg.duration}</p>
                  <p className="card-text">{pkg.loc}</p>
                  <hr />
                  <div className="d-flex ">
                    <div>
                      <p>
                        Package Starts from <br />
                        <span className="card-text purple">
                          <FontAwesomeIcon icon={faRupeeSign} />
                          {pkg.price} per person <br />
                          per night
                        </span>
                      </p>
                    </div>
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg,"School Package")}>Book now</button>
                  </div>
                  <div className="d-flex justify-content-between"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5 mb-5">

        <div className="row">
          <h2 className='ml1'>College Package</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="card h-100 packaecard">
                <img className="cardimg" src={pkg.img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-title fw-bold">{pkg.title}</p>
                  <p className="card-text purple">{pkg.duration}</p>
                  <p className="card-text">{pkg.loc}</p>
                  <hr />
                  <div className="d-flex ">
                    <div>
                      <p>
                        Package Starts from <br />
                        <span className="card-text purple">
                          <FontAwesomeIcon icon={faRupeeSign} />
                          {pkg.price} per person <br />
                          per night
                        </span>
                      </p>
                    </div>
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg,"College Package")}>Book now</button>
            
                  </div>
                  <div className="d-flex justify-content-between"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5 mb-5">

      <div className="row">
          <h2 className='ml1'>Industial Visit Package</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-3 col-lg-4 mb-4">
              <div className="card h-100 packaecard">
                <img className="cardimg" src={pkg.img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-title fw-bold">{pkg.title}</p>
                  <p className="card-text purple">{pkg.duration}</p>
                  <p className="card-text">{pkg.loc}</p>
                  <hr />
                  <div className="d-flex ">
                    <div>
                      <p>
                        Package Starts from <br />
                        <span className="card-text purple">
                          <FontAwesomeIcon icon={faRupeeSign} />
                          {pkg.price} per person <br />
                          per night
                        </span>
                      </p>
                    </div>
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg,"School Package")}>Book now</button>
                  </div>
                  <div className="d-flex justify-content-between"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div ref={packagesecondpageref}><PackageSecondPage/></div>
    </>
  );
}

export default PackagePage;
