import React from "react";


function Footer(){
  var curyear= new Date().getFullYear();

  return(
    <footer>
      <p>Copyrights @ {curyear}</p>
    </footer>
  );
}
export default Footer;