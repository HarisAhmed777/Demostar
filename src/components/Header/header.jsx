import React from "react";
import CollapsibleExample from "./BottomHeader";


function Header(){
    return(
      <>
        <div className="topheader bg-dark text-center position-fixed w-100 z-3">
          <p className="text-center text-white d-inline">Unlock the magic of travles with star holidays-Your gateway to extraordinary experince</p>
          <p className="text-warning d-inline ms-5">Get this now</p>
        </div>
        <CollapsibleExample/>


      </>
    )
}

export default Header;