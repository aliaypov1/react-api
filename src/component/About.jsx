import React from "react";
import { Link } from "react-router-dom";
import Api2 from './Api2'




const About = () => {
    
    return (
        <>
        <div className="">
        <Link to='/About' class="header__link"></Link>
        <Api2></Api2>
    </div>
    
    </>
    )
  
} 

export default About;