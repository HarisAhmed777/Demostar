import React, { useState,useContext } from "react";
import CollapsibleExample from "./BottomHeader";
import { Context } from "../context";
function Header(){
  const {theme} = useContext(Context);
    return(
      <>
        <CollapsibleExample/>


      </>
    )
}

export default Header;