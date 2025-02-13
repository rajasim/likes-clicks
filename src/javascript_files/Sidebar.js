import React, { useRef } from "react";
import "../css_files/Sidebar.css";

function Sidebar({ sidebarRef }) {
  function closeSidebar() {
    sidebarRef.current.style.transform = "translateX(-1920px)";
    sidebarRef.current.style.transition = "transform 1s ease";
  }

  

  
  return (
    <section className="sidebar" id="sidebar">
      <section ref={sidebarRef}>
        <div>
          <blockquote>
            <h1><a href="#homepage" id="homepage">Home</a></h1>
            <h1><a href="#about-us">About</a></h1>
            <h1><a href="#it-services">IT Service</a></h1>
            <h1><a href="#partner-with-us-intro" id="partner-with-us-intro">Parter</a></h1>
          </blockquote>
          <blockquote style={{ marginTop: "10rem" }}>
            <h3>SECURE YOUR BUSINESS TODAY</h3>
            <h3>INFO@MYSITE.COM</h3>
          </blockquote>
          <button onClick={closeSidebar}>
          <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Sidebar;
