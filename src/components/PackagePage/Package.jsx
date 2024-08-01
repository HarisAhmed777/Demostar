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
    },
    {
      img: cp1,
      title: 'Rajastan Expenditure',
      duration: '2 days 3 nights',
      loc: 'Udaipur (2N) Mount Abu (2N)',
      price: '3,400',
    },
  ];
  function handlepackagebooking(pkgw,catogory){
    const pkg= {
      title:pkgw.title,
      img :pkgw.img,
      duration :pkgw.duration,
      price:pkgw.price,
      catogory:catogory
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
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
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
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
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
          <h2 className='ml1'>Indutrial Visit Package</h2>
          {custompackages.map((pkg, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 packaecard container">
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
                      <button className="mt-4 ms-3 packagesidebtn bgc p-1" onClick={()=>handlepackagebooking(pkg,"Industrial Visit Package")}>Book now</button>
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
