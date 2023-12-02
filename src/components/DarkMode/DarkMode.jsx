import React from "react";
import "./DarkMode.css";

export const DarkMode = () => {

    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) =>{
        if(e.target.checked){
             setDarkMode()
            }
        else setLightMode();
    };




    return (    
        <>
      <div className="contenedor2">

      
        <input type="checkbox" id="toggle_checkbox" onChange={toggleTheme}/>

        <label htmlFor="toggle_checkbox" id="label1">
        <div id="star">
            <div className="star" id="star-1">★</div>
            <div className="star" id="star-2">★</div>
        </div>
        <div id="moon"></div>
        </label>
        </div>


        </> 
    );
};
