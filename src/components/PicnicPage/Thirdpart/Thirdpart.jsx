import React,{useEffect,useRef}from "react";
import './Thirdpart.css';
import picnic from '../../images/picnicmain.jpg';

function Thirdpart(){
    const picnicImgRef = useRef(null);


    useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (picnicImgRef.current) {
            picnicImgRef.current.style.height = windowHeight -35+ "px";
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
            <img src={picnic} ref={picnicImgRef}   />
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
        </>
    )
}

export default Thirdpart;
