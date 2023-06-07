import React, { useState } from "react";
import "./header.css";
export const Header = () => {
  const [mobile,setMobile] = useState(false)
 // console.log(mobile);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/logo.png" alt='' />
            </div>
            <ul className={mobile? "navMenu-list" :"flexSB"} onClick={()=> setMobile(false)}>
            <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Pages</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
            <button className="toggle" onClick={()=> setMobile(!mobile)}>
             {mobile ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>} 
            </button>
          </nav>
          <div className="account flexSB">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-user"></i>
          <button>Subcribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};
