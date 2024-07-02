import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Custompackages from './components/CustomPackages/custompackages';
import Picnicpackages from './components/Picnichomepage/Picnichomepage';
import Homeimg from './components/Homeimg/homeimg';
import Promotion from './components/Promotion/promotion';
import Bestoffers from './components/Bestoffers/Bestoffers';
import Travelwithus from './components/WhyTravelwithus/Travelwithus';
import FAQ from './components/FAQ/faq';
import Testimonials from './components/Testimonials/Testimonials';
import Newsandtips from './components/NewsandTips/Newsandtips';
import Footer from './components/Footer/footer';
import { ContextProvider } from './components/context';

function App() {
  return (
    <>
    <ContextProvider>
    <div>
      <Header/>
      </div>
      <Homeimg/>
      <Custompackages/>
      <Picnicpackages/>
      <Promotion/>
      <Bestoffers/>
      <Travelwithus/>
      <FAQ/>
      <Testimonials/>
      <Newsandtips/>
      <Footer/>
      </ContextProvider>
    </>
    
  )
}

export default App
