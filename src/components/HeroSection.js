import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../App.css"
import { Button } from "./Button";
import "./HeroSection.css"


function HeroSection() {
    return (
        <div className="hero-container">
           
            <video src="/videos/vvvv.mp4" autoPlay loop muted/>
            <h1>Rochel Leah clinic</h1>
            <p>?למה את מחכה</p>
            <div className="hero-btns">
                <Button 
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    הרשמה
                </Button>
                <Button 
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                   כניסה
                </Button>
            </div>                
        </div>
    )
}

export default HeroSection
