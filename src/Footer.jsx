import React from "react";

function Footer() {
  return (
    <footer className="footer">
      
        <div>
          <h1>Building future, inspiring today</h1> 
          <h5>@{new Date().getFullYear()} Smart India Hackathon. All rights reserved.</h5>
       
        </div>
        <div className="footer-links">
        <div>
          <p className='city' href="">Bengaluru</p>
          <p>lorem.ipsim@1234.gmail</p>
          <p>+91 783972947</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
          <hr></hr>
        <div>
          <p className='city' href="">Mumbai</p>
          <p>lorem.ipsim@1234.gmail</p>
          <p>+91 783972947</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <hr></hr>
        <div>
          <p className='city' href="">Kolkata</p>
          <p>lorem.ipsim@1234.gmail</p>
          <p>+91 783972947</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <p className='city' href="">Pune</p>
          <p>lorem.ipsim@1234.gmail</p>
          <p>+91 783972947</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>

    </footer>
  );
}

export default Footer;
