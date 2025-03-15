import React from "react";

const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </div>
    <div className="collapse navbar-collapse text-white" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">About</a>
        <a className="nav-link text-white" href="#">Services</a>
        <a className="nav-link disabled text-white">Contact</a>
      </div>
    </div>
</nav>
    );
};

export default Navbar;