import React,{useRef,useEffect} from "react";
import eastimg from '../images/picnics-goa.jpg';
import goa from '../images/picnics-goa.jpg';
import lonavala from '../images/picnics-lonavala.jpg';
import mountabu from '../images/picnics-mount-abu.jpg';
import wayanad from '../images/picnics-wayanad.jpg';
import gpdavari from '../images/picnics-godavari.jpg';
import anaikatti from '../images/picnics-anaikatti.jpg';
import ooty from '../images/picnics-ooty.jpg';
import { Link, useNavigate } from 'react-router-dom';
import cp1 from '../images/cp1.jpg';


function KeralaPicnic(){
    const navigate = useNavigate();
    const packageImgRef = useRef(null);


    const handleImageClick = (heading) => {
        navigate('/bookingpage', { state: { city: heading } });
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
    return(
        <>
        <div className="thirdimg">
            <img src={cp1} ref={packageImgRef}/>
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
        <div className='fourtheast text-center mt-5'>
                <h1 className='textcenter clr'>Kerala South</h1>
                <div className='foutheastimg'>
                    <div className="container d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container " onClick={() => handleImageClick('Puri')}>
                            <img src={eastimg} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Anayirankal, Munnar</h2>
                                <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h1 className='text-center clr'>Kerala West</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Goa')}>
                                <img src={goa} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Akkulam Tourist Village…</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Lonavala')}>
                                <img src={lonavala} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Aruvikkara Dam.</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Mount Abu')}>
                                <img src={mountabu} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Beypore in Kozhikode.</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h1 className='text-center clr'>Kerala South</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Wayanad')}>
                                <img src={wayanad} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">KanyaKumari</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Godavari')}>
                                <img src={gpdavari} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Idukki Arch Dam</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Anaikatti')}>
                                <img src={anaikatti} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Dharmadam Island</h2>
                                    <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex row justify-content-start'>
                    <div className='foutheastimg col-12 col-md-4 col-lg-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Ooty')}>
                                <img src={ooty} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Pookkot lake, Wayanad</h2>
                                    <p className="contentp">Easy drive to from Coimbatore and other cities • Enjoy activities like Rope adventure activities , Archery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>

           
            
        </>
    )
}

export default KeralaPicnic;