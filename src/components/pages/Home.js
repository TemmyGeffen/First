import React from 'react'
import { PopupboxManager } from 'react-popupbox';
import Popup from 'reactjs-popup';
import "../../App.css"
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from "../HeroSection"
import SignUp from './SignUp';
import { useState } from "react";
import { Checkbox } from 'pretty-checkbox-react';

function Home () {
 
    return(
        <>
            <HeroSection />
            <Cards  />
            <Footer />
            {/* <Checkbox >sdfghjk</Checkbox> */}
        </>
    )
}

export default Home;