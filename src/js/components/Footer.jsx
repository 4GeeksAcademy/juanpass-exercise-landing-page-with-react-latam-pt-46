import React from "react";

const Footer = () => {
    return (

      <footer className="bg-dark text-center text-white g-4"style={{ backgroundColor: '#33383f'} }>
      {/* Contenedor principal */}
      <div className="container ">
          {/* Copyright */}
          <div className="text-center p-4">
              © 2021 Copyright:{' '}
              <a className="text-white" href="https://4geeks.com/">
                  Juan Pablo Aquino 4Geeks
              </a>
          </div>
      </div>
  </footer>
);
};
export default Footer;