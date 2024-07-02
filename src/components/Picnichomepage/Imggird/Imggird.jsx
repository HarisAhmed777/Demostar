import React,{useContext} from "react";
import './imggird.css';
import { Context } from "../../context";

function Imggird(){
    const {theme} = useContext(Context);
    return(
        <>
        <div className={`container-fluid ${theme?"bg-dark text-white":null}`}>
        <div class={`container ${theme?"bg-dark text-white":null}`}>
             <div class="content">
            <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum velit quis quam fermentum.</p>
            </div>
        <div class="images">
            <div class="top-images">
            <div class="image oval-1"></div>
            <div class="image oval-2"></div>
        </div>
        <div class="bottom-images">
            <div class="image oval-3"></div>
            <div class="image oval-4"></div>
            <div class="image oval-5"></div>
        </div>
    </div>
</div>
    </div>
        </>
    )
}

export default Imggird;