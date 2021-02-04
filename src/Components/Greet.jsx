import React, { useState } from 'react';
import '../Components/css/Greet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Form,FormControl,Button, Card} from 'react-bootstrap';

const Greet=()=>{
  
  const [name, setName] = useState();
 

const inputEvent= (event)=>{
    console.log(event.target.value);
    setName(event.target.value);
};

const onSubmits =(event)=>{
event.preventDefault();
    setName(name);
  


}
    return(
        <div id ="greetform">
        
       
      <Card className="mt-greet">
      <Card.Header className="bg-info text-white"><h5>Type your Name and submit</h5></Card.Header>
  <Card.Body className="mt-2">
  <Form onSubmit = {onSubmits}>
<InputGroup className="mb-3">
    <FormControl
      placeholder="Enter your  Name"
      aria-label=" Name"
      aria-describedby="basic-addon2"
      value ={name} onChange={inputEvent}
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2" type="button" className="btn btn-md btn-primary">Submit</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
 <h5 className="text-dark mt-3 py-1">Hi <span className=" text-info">{name}</span> How are you doing</h5>
 </Form>
  </Card.Body> 
  
  </Card>

     

   </div>

    );


// return(
//     <>
//        <h2>Hi {name}{password}How Are You </h2>
      
//        <Form onSubmit = {onSubmits}>

// <div class="form-group">

// <input type="text" className="form-control" placeholder="Enter Your Name" value ={name} onChange={inputEvent}/>
// <input type="password" className="form-control" placeholder="Enter Your password" value ={password} onChange={inputEventTwo}/>
// </div>
// </Form>


// <button type ="submit" className="btn btn-md btn-primary">Click Here</button>
 

//       </> 
// );
}

export default Greet;



