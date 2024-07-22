import React from 'react';
import './fourthpart.css';
import eastimg from '../../images/picnics-goa.jpg';
import goa from '../../images/picnics-goa.jpg';
import lonavala from '../../images/picnics-lonavala.jpg';
import mountabu from '../../images/picnics-mount-abu.jpg';
import wayanad from '../../images/picnics-wayanad.jpg';
import gpdavari from '../../images/picnics-godavari.jpg';
import anaikatti from '../../images/picnics-anaikatti.jpg';
import alleppey from '../../images/picnics-alleppey.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Fourthpart() {
    const navigate = useNavigate();

    const handleImageClick = (heading) => {
        navigate('/bookingpage', { state: { city: heading } });
    };

    return (
        <>
        <div className='overflow-hidden'>
            <div className='fourtheast text-center mt-5 '>
                <h1 className='textcenter clr'>Goa</h1>
                <div className='foutheastimg'>
                    <div className="container d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container " onClick={() => handleImageClick('Puri')}>
                            <img src={eastimg} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">A-Z Goa</h2>
                                <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwest mt-5'>
                <h1 className='text-center clr'>TamilNadu</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg  col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Goa')}>
                                <img src={goa} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Rameshwaram</h2>
                                    <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Lonavala')}>
                                <img src={lonavala} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">OOTY</h2>
                                    <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Mount Abu')}>
                                <img src={mountabu} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Kodaikanal</h2>
                                    <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h1 className='text-center clr'>Kerala</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Wayanad')}>
                                <img src={wayanad} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Wayanad</h2>
                                    <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Godavari')}>
                                <img src={gpdavari} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Godavari</h2>
                                    <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Anaikatti')}>
                                <img src={anaikatti} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Anaikatti</h2>
                                    <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex row justify-content-start'>

                    <div className='row'>
                        <div className='foutheastimg col-12 col-md-4 col-lg-4 ms-2'>
                            <div className="container d-flex justify-content-center align-items-center mt-2 ">
                                <div className="image-container " onClick={() => handleImageClick('Alleppey')}>
                                    <img src={alleppey} alt="Image" className="image" />
                                    <div className="overlay">
                                        <h2 className="heading">Alleppey</h2>
                                        <p className="contentp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus exercitationem quod nobis doloremque mollitia nesciunt et dicta necessitatibus eaque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fifthpart text-center mt-5'>
                <Link to='/bookingpage'><button className='btn btnbook text-center'>Book Now</button></Link>
                <hr></hr>
            </div>
            </div>
        </>
    );
}

export default Fourthpart;
