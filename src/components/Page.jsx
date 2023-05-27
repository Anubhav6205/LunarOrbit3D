import React, { useEffect } from "react";
import Planet from "./planet";
import "./page.css";
const Page = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Perform actions based on scroll position
      // You can access the scroll position using window.scrollY
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Your website content goes here */}
      {/* You can add sections, divs, text, images, etc. */}
      {/* Example: */}
      <section className="section">
        <h1>Welcome to my website!</h1>
        {/* Add more content */}
      </section>

      {/* Render the Planet component as the background */}
      <Planet />
    </div>
  );
};

export default Page;
