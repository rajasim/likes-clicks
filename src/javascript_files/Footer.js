import React from "react";
import "../css_files/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <figure>
        <video src="/videos/likesand.mp4" autoPlay loop muted></video>
        <h1>Likes And Clicks</h1>
      </figure>
      <footer>
        <blockquote>
          <p>Contact Us</p>
          <p>+61466289709</p>
          <p></p>
          
        </blockquote>
        <blockquote>
          <p>Address</p>
          <p>Kuraby, Queensland.<br></br> 
          <br></br> Companies office:
Likes And Clicks PRIVATE LIMITED 
</p>
          
        </blockquote>
        
          
        <blockquote></blockquote>
         
       
        <blockquote>
          <p>Info@Likes And Clicks.com</p>
          
          <p>
            Built on <b>React</b>
          </p>
        </blockquote>
      </footer>
    </div>
  );
}

export default Footer;
