import React, { useState,useContext } from "react";
import CollapsibleExample from "./BottomHeader";
import { Context } from "../context";
function Header(){
  const {theme} = useContext(Context);
    return(
      <>
        <div className={`topheader  col-12  text-center position-fixed w-100 z-3 ${theme?"bg-white text-dark":"bg-dark text-white"}`}>
          <p className={`text-center  d-inline`}>Unlock the magic of travles with star holidays-Your gateway to extraordinary experince</p>
          <p className="text-warning d-inline ms-5">Get this now</p>
        </div>
        <CollapsibleExample className = "mt-5"/>


      </>
    )
}

export default Header;