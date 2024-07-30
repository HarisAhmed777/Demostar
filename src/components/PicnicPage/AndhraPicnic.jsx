import React,{useRef,useEffect} from "react";
import cp1 from '../images/cp1.jpg';
import AndhraBeaches from "../Picnichomepage/Beaches/AndhraBeaches";
import AndhraFalls from "../Picnichomepage/Falls/AndhraFalls";
import AndhraForest from "../Picnichomepage/Forest/AndhraForest";
import AndhraHillStations from "../Picnichomepage/HillStation/AndhraHillStation";
import AndhraTeaEstate from "../Picnichomepage/TeaEstate/AndhraTeaEstate";
import AndhraTemples from "../Picnichomepage/Temples/AndhraTemples";
import AndhraMountains from "../Picnichomepage/Mountains/AndhraMountains";
import AndhraZoo from "../Picnichomepage/Zoo/AndhraZoo";




function AndhraPicnic(){
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
        <AndhraBeaches/>
        <AndhraFalls/>
        <AndhraForest/>
        <AndhraHillStations/>
        <AndhraTeaEstate/>
        <AndhraTemples/>
        <AndhraMountains/>
        <AndhraZoo/>
        </div>

           
            
        </>
    )
}

export default AndhraPicnic;