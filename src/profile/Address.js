import React from "react";
import "./address.css"
// import { ReactComponent } from "*.svg";

// class Address extends ReactComponent{
    
//  render(){
//     const address = prompt("Enter a valid address")
//      return(
//         <>
//         <h2>Your Address</h2>
//         <label>{address}</label>
//         </>
//          )
//         }

// }


function Address(){
    const address = prompt("Enter a valid address")
    
     return(
         <>
         <h2>Your Address</h2>
         <label>{address}</label>
         </>
         )
 }




export default Address;


