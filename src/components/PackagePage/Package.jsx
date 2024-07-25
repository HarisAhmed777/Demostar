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
      title: 'Rajastan Expenditure',
      duration: '2 days 3 nights',
      loc: 'Udaipur (2N) Mount Abu (2N)',
      price: '3,400',
    },
    {
      img: cp1,
      title: 'Rajastan Expenditure',
      duration: '2 days 3 nights',
      loc: 'Udaipur (2N) Mount Abu (2N)',
      price: '3,400',
    },
    {
      img: cp1,
      title: 'Rajastan Expenditure',
      duration: '2 days 3 nights',
      loc: 'Udaipur (2N) Mount Abu (2N)',
      price: '3,400',
    }
  ];
  function handlepackagebooking(pkg){
    navigate('/bookingpage',{state:{pkg}})
  }

  function scrollToPackageSecondPage() {
    packagesecondpageref.current.scrollIntoView({ behavior: 'smooth' });
}


  return (
    <>
      <div   className="packageimg pt-5 ">
        <h1 className="text-white">
          Trek, Chill, Repeat <br />
          Book Your Escape
        </h1>
        <p className="text-white">
          Himachal Holiday Starting at <span className="text-warning">Rs:17000/</span>
        </p>
        <button className="packagemainbtn bgc" onClick={scrollToPackageSecondPage}>Enquire Now</button>
      </div>

      <div className="container mt-5 mb-5">
        <h2>
          <span className="purple">Explore</span> more vacations tailored to your wanderlust
        </h2>
        <div className="row">
          <h2>School Packaes</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
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
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg)}>Book now</button>
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
          <h2>College Packaes</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
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
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg)}>Book now</button>
            
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
          <h2>Indutrial Visit Packaes</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
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
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg)}>Book now</button>
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
