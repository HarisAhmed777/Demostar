import React,{useRef,useEffect} from "react";
import {useNavigate } from 'react-router-dom';
import cp1 from '../images/cp1.jpg';
import TamilNaduMountains from "../Picnichomepage/Mountains/TamilNaduMountains";
import TamilNaduTemples from "../Picnichomepage/Temples/TamilNaduTemples";
import TamilNaduTeaEstate from "../Picnichomepage/TeaEstate/TamilNaduTeaEstate";
import TamilNaduZoo from "../Picnichomepage/Zoo/TamilNaduZoo";
import TamilNaduHillStations from "../Picnichomepage/HillStation/TamilNaduHillStation";
import TamilNaduForest from "../Picnichomepage/Forest/TamilNaduForest";
import TamilNaduFalls from "../Picnichomepage/Falls/TamilNaduFalls";
import TamilNaduBeaches from "../Picnichomepage/Beaches/TamilNaduBeaches";


function TamilNaduPicnic(){
    const navigate = useNavigate();

    const handleImageClick = (heading,img) => {
        const pkg = {
            title :heading,
            img:img,
            catogory:"Tamil Nadu Picnic",

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
        <TamilNaduMountains/>
        <TamilNaduTemples/>
        <TamilNaduTeaEstate/>
        <TamilNaduZoo/>
        <TamilNaduHillStations/>
        <TamilNaduForest/>
        <TamilNaduFalls/>
        <TamilNaduBeaches/>

        </div>

           
            
        </>
    )
}

export default TamilNaduPicnic;