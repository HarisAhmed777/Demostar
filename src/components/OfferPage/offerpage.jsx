import React ,{useRef,useEffect}from 'react';
import './offer.css';
import { useNavigate } from 'react-router-dom';

function OfferPage() {
  const navigate = useNavigate();
  const packageImgRef = useRef(null);


  const handlePromoClick = (promoType) => {
    navigate('/availpromo', { state: { promoType } });
  };
  useEffect(() => {
    function setWindowHeight() {
      var windowHeight = window.innerHeight;
      if (packageImgRef.current) {
        packageImgRef.current.style.height = windowHeight -35+ "px";
      }
    }
  
    window.addEventListener('resize', setWindowHeight);
  
    // Initial call to set the height when the page loads
    setWindowHeight();
  
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', setWindowHeight);
  }, []);

  return (
    <>
      <div ref={packageImgRef} className="packageimg pt-5 mb-4">
        <h1 className="text-white">
          Exclusive offers <br />
          Of the month
        </h1>
        <p className="text-white">
          Offers start from <span className="text-warning">20%-40%</span>
        </p>
      </div>
      <div className='container'>
        <div className=''>
        <div className='row ms-3 mb-5'>
          <div className=' col-lg-3  schimg mb-4'>
            <button className='bg-warning item1 text-dark' onClick={() => handlePromoClick('school')}>AvailPromo</button>
            <p className='text-dark fw-bold item2'>For School Offers you can avail this promo</p>
          </div>
          <div className=' col-lg-4 col-md-6 schimg mb-4'>
            <button className='bg-warning item1 text-dark' onClick={() => handlePromoClick('college')}>AvailPromo</button>
            <p className='text-dark fw-bold item2'>For College Offers you can avail this promo</p>
          </div>
          <div className=' col-lg-4  col-md-6 schimg mb-4'>
            <button className='bg-warning item1 text-dark' onClick={() => handlePromoClick('iv')}>AvailPromo</button>
            <p className='text-dark fw-bold item2'>For Industrial Visit Offers you can avail this promo</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default OfferPage;
