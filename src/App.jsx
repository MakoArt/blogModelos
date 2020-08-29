import React from 'react';
import './App.css';
import Chicas from './Components/Chicas';
import Header from './Components/Header/Header'


function App() {
  return (
   
   <>

   <div className="container-fluid d-block">

     
   <div className="row-fluid  d-block ">
           <div className="col-12 d-block text-center">
             <Header/>
           </div>
      </div>
     
     
     
      <div className="row-fluid d-block">
           <div className="col-12 d-block text-center align-content-center">

           </div>
      </div>


       <div className="row d-block ">

       <div className="col-12 d-block text-center">
           <Chicas/>
           </div>
         
       </div>
    
    
    
    
    
    
    
   








   </div>
   
   
   
   
   
   
   
   </>
  
  
  
  
    );
}

export default App;
