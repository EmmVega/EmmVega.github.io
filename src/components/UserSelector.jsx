import React from 'react';
import '../styles/components/userSelector.css';
import {Link} from 'react-router-dom'; 

const UserSelector = () => (
   <>
      <div className="userselector">
         {/* <div className="container"> */}
         <div className="container">
            <p>Register...</p>
            <div className="block">
               <div className="columns">
                  <Link to="/sportplayer">
                     <button className="buttons">I am a sportplayer</button>
                  </Link>
                  <p className="description">
                     Train as hard as you can, go live, be creative, and receive
                     donations from those who want to help you to get a better
                     life
                  </p>
               </div>
               <div className="columns">
                  <Link to="/donor">
                     <button className="buttons">I want to help</button>
                  </Link>
                  <p className="description">
                     Give people a new way of work, save lives or just help
                     people to be healthier
                  </p>
               </div>
            </div>
            <p>
               Already have an account?&nbsp;
               <Link to="/login">Login</Link>
            </p>
         </div>
         {/* </div> */}
      </div>
   </>
);

export default UserSelector;