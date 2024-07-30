import React,{useRef,useEffect} from "react";
import goa from '../images/picnics-goa.jpg';
import lonavala from '../images/picnics-lonavala.jpg';
import mountabu from '../images/picnics-mount-abu.jpg';
import wayanad from '../images/picnics-wayanad.jpg';
import gpdavari from '../images/picnics-godavari.jpg';
import anaikatti from '../images/picnics-anaikatti.jpg';
import {useNavigate } from 'react-router-dom';
import cp1 from '../images/cp1.jpg';
import SafariSecondPage from "./Picnicrequest/SafariRequest";


function SafariPage(){
    const navigate = useNavigate();

    const handleImageClick = (heading,img) => {
        const pkg = {
            title :heading,
            img:img,
            catogory:"Safari Picnic",

        }
        navigate('/bookingpage', { state: pkg });
    };
    return(
        <>
        <div className="thirdimg">
            <img src={cp1} className="picnicmainimg"/>
        </div>
        <div className="thirdpart container">
            <h3 className="text-center mt-4">Break Free from the monotony of city life</h3>
            <h3 className="text-center">Enjoy the outdoors and pamper yourself with Star Holidays</h3>
            <p className="text-center">
                Whether it’s to relax and detox, or treat your kids to loads of enjoyment, or catch up with friends is the ideal solution<br></br>
                for a fun day out! Simply drive over to the resort nearby and indulge yourself with all the resort facilities and sumptuous food. Enjoy nature and <br></br>
                the open spaces within the resort premises… or use the resort as a base to explore the surrounding locales…
            </p>
        </div>
        <div>
            <p className="text-center">Either way we are sure you’ll go back home in the evening with a carload of lovely memories.</p>

        </div>
        <div className="over">
        <div className='fourthwest  mt-5'>
                <h2 className="container">Best Safari in TamilNadu</h2>
                <div className='d-flex ms-3 justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className=" d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Cloud Forest Entertainment park',goa)}>
                                <img src={goa} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Cloud Forest Entertainment park</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('VOC park and zoo',lonavala)}>
                                <img src={lonavala} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">VOC park and zoo</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className=" d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Arignar Anna Zoological Park',mountabu)}>
                                <img src={mountabu} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Arignar Anna Zoological Park</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h2 className="container">Best Safari in Kerala</h2>
                <div className='d-flex ms-3 justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Parassinikkadavu Snake Park.',goa)}>
                                <img src={goa} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Parassinikkadavu Snake Park.</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Kauthuka Park. ',lonavala)}>
                                <img src={lonavala} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Kauthuka Park. </h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Thiruvananthapuram Zoo. ',mountabu)}>
                                <img src={mountabu} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Thiruvananthapuram Zoo. </h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h2 className='container'>Best Safari In Andhra</h2>
                <div className='d-flex ms-3 justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('G. V. K. Industries Deer Park.',wayanad)}>
                                <img src={wayanad} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">G. V. K. Industries Deer Park.</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Matsya Darshini, Visakhapatnam.',gpdavari)}>
                                <img src={gpdavari} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Matsya Darshini, Visakhapatnam.</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 mb-4 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Deer Park, Nellore.',anaikatti)}>
                                <img src={anaikatti} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Deer Park, Nellore.</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>

           
            <SafariSecondPage/>
        </>
    )
}

export default SafariPage;