import React from "react";
import { useLocation } from "react-router-dom";


function AvailPromo(){
    const location = useLocation();
    const { promoType } = location.state || {};
    const renderPromoContent = () => {
        switch (promoType) {
          case 'school':
            return <div>
                        <p>Details for School Offers</p>
                        <p>The promo code will be <span className="fw-bold text-warning">WAH10</span> </p>
                        <p>Apply this promo on the booking page and enjoy the trip</p>
                    </div>;
          case 'college':
            return <div>
                        <p>Details for College Offers</p>
                        <p>The promo code will be <span className="fw-bold text-warning">Starsch20</span></p>
                        <p>Apply this promo on the booking page and enjoy the trip</p>

                    </div>;
          case 'iv':
            return  <div>
                        <p>Details for Industial Visit Offers</p>
                        <p>The promo code will be <span className="fw-bold text-warning">Starsch30</span></p>
                        <p>Apply this promo on the booking page and enjoy the trip</p>

                    </div>;
          default:
            return <p>Select a promo to see details</p>;
        }
      };
    
    return(
        <>
              <div className="packageimg pt-5 mb-4">
        <h1 className="text-white">
          Exclusive offers <br />
          Of the month
        </h1>
        <p className="text-white">
          Offers start from <span className="text-warning">20%-40%</span>
        </p>
      </div>
      <div className="container">
      <h2>Couple code is only for limited period</h2>
      {renderPromoContent()}
      </div>
        </>
    )
}

export default AvailPromo;