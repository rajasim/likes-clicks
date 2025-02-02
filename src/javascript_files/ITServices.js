import React, { useEffect, useRef } from "react";
import "../css_files/ITServices.css";

function ITServices() {
  const itservicesref = useRef();
  useEffect(() => {
    const observe = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const figures = entry.target.querySelectorAll("aside figure");
          for (let i = 0; i < figures.length; i++) {
            figures[i].style.transform = "translateY(0px)";
            figures[i].style.opacity = 1;
            figures[i].style.transition = "transform 2s ease";
          }

          observer.disconnect();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(observe, options);

    if (itservicesref.current) {
      observer.observe(itservicesref.current);
    }

    return () => {
      if (itservicesref.current) {
        observer.unobserve(itservicesref.current);
      }
    };
  }, []);

  return (
    <div className="it-services" ref={itservicesref}>
      <blockquote>
        <h2>Our Marketing Services</h2>
        <h1>
          Digital Marketing Services <br /> TAILORED TO YOUR NEEDS
        </h1>
      </blockquote>
      <aside>
        <figure>
          <h3>1. Marketing Automation</h3>
          <img src="/images/Image 725.png" />
        </figure>
        <figure>
          <h3>2. SEO</h3>
          <img src="/images/Image 727.png" />
        </figure>
        <figure>
          <h3>3. CRO</h3>
          <img src="/images/Image 728.png" />
        </figure>
        <figure>
          <h3>4. Google Analytics</h3>
          <img src="/images/Image 729.png" />
        </figure>
      </aside>
    </div>
  );
}

export default ITServices;
