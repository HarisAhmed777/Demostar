import React from "react";
import goa from '../../images/picnics-goa.jpg';
import lonavala from '../../images/picnics-lonavala.jpg';
import mountabu from '../../images/picnics-mount-abu.jpg';
import { useNavigate } from "react-router-dom";


function KarnatakaMountains(){
    const navigate = useNavigate();

    const handleImageClick = (heading,img) => {
        const pkg = {
            title :heading,
            img:img,
            catogory:"Karnataka Mountains",

        }
        navigate('/bookingpage', { state: pkg });
    };
    return(
        <div className='fourthwest container  mt-5'>
        <h2 className="">Karnataka Mountains</h2>
        <div className='row'>
            <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                <div className=" d-flex justify-content-center align-items-center mt-2">
                    <div className="image-container " onClick={() => handleImageClick('Kodaikanal',goa)}>
                        <img src={goa} alt="Image" className="image" />
                        <div className="overlay">
                            <h2 className="heading">Kodaikanal</h2>
                            <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <div className="image-container " onClick={() => handleImageClick('Conoor',lonavala)}>
                        <img src={lonavala} alt="Image" className="image" />
                        <div className="overlay">
                            <h2 className="heading">Connor</h2>
                            <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foutheastimg col-lg-3  col-12 col-md-4'>
                <div className=" d-flex justify-content-center align-items-center mt-2">
                    <div className="image-container " onClick={() => handleImageClick('Senji Fort',mountabu)}>
                        <img src={mountabu} alt="Image" className="image" />
                        <div className="overlay">
                            <h2 className="heading">Senji Fort</h2>
                            <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foutheastimg col-12 col-lg-3 col-md-4'>
                <div className=" d-flex justify-content-center  mt-2">
                    <div className="image-container " onClick={() => handleImageClick('Senji Fort',mountabu)}>
                        <img src={mountabu} alt="Image" className="image" />
                        <div className="overlay">
                            <h2 className="heading">Senji Fort</h2>
                            <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default KarnatakaMountains;