import React,{useRef,useEffect} from "react";
import eastimg from '../images/picnics-goa.jpg';
import goa from '../images/picnics-goa.jpg';
import lonavala from '../images/picnics-lonavala.jpg';
import mountabu from '../images/picnics-mount-abu.jpg';
import wayanad from '../images/picnics-wayanad.jpg';
import gpdavari from '../images/picnics-godavari.jpg';
import anaikatti from '../images/picnics-anaikatti.jpg';
import ooty from '../images/picnics-ooty.jpg';
import {useNavigate } from 'react-router-dom';
import cp1 from '../images/cp1.jpg';
import MountainSecondPage from "./Picnicrequest/MountainRequest";
import TamilNaduMountains from "./Mountains/TamilNaduMountains";
import KeralaMountains from "./Mountains/KeralaMountains";
import KarnatakaMountains from "./Mountains/KarnatakaMountains";
import AndhraMountains from "./Mountains/AndhraMountains";


function MountainsPage(){
    const navigate = useNavigate();

    const handleImageClick = (heading,img) => {
        const pkg = {
            title :heading,
            img:img,
            catogory:"Mountains Picnic",

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
        <TamilNaduMountains/>
        <KeralaMountains/>
        <KarnatakaMountains/>
        <AndhraMountains/>

            <MountainSecondPage/>

           
            
        </>
    )
}

export default MountainsPage;