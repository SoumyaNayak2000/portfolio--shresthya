import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => {
  return (
    <>
      <h2>Shresthya.</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Exprience</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:senapatishresthya@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
