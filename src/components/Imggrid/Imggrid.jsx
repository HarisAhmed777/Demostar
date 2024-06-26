import React from "react";
import './Imggrid.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp1.jpg';
import TCP1 from '../images/cp1.jpg';
import TCP2 from '../images/cp1.jpg';

function Imggrid(){
    return(
        <>
        <div className="container imggridwhole mb-5">
        <div className="containerr">
            <div className="row">
            <div className="content  col-6 col-lg-6">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum velit quis quam fermentum.</p>
            </div>
            <div className="col-lg-6 col-6">
                <div className="images">
                    <div className="top-images">
                        <div className="image oval-1"></div>
                        <div className="image oval-2"></div>
                    </div>
                    <div className="bottom-images">
                        <div className="image oval-3"></div>
                        <div className="image oval-4"></div>
                        <div className="image oval-5"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Imggrid;
