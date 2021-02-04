import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Greet from './Components/Greet';
import List from "./Components/List";
import EmployeeComponent from "./Components/EmployeeComponent";
import RegistrationForm from "./Components/RegistrationForm";


function App() {
  const words = ['Homedecor', 'kitchen & Dinning', 'Giftingkits' ];
  return (
    <div className="App">
    <>
  
  <Navigation/>
  
  <div className="container">

  <div className="row">
 <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center mt-4"><h4 className="mt-3">Day one and Day two assignment</h4></div>
  <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 "> <Greet/></div>
 
  <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 "> <List words={words} /></div>
 </div>
</div>

 <div class="container-fluid ">
 <div className="row bg-dark mt-5">
 <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
 <div className="container py-2 mb-3 pb-4"><EmployeeComponent/></div></div></div></div>
 <div className="container">

  <div className="row">
 <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center mt-5"><h3>Registration Form</h3></div>
 <div className="col-lg-9 col-xl-8 col-md-12 col-sm-12 m-auto"><RegistrationForm/></div></div></div>
 
 <div class="copyrights mt-5">
  <h6 className="text-white">neelam_hargunani@persistent.com <span className="ml-3 text-info">9503836763</span> </h6>
</div>
 

</>
    </div>
  );
}

export default App;
