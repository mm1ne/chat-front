import React from 'react';

import {
    Navbar
} from 'react-bootstrap';

import {
    Link
  } from "react-router-dom";

const Navigation = ({UserName}) => {
 return (
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      {/* <img
        alt=" "
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} */}
      Mm1ne Chat
    </Navbar.Brand>
    <Link to="/">Выход</Link>
    <h3>U Name : {UserName}</h3>
  </Navbar>
 )
}
export default Navigation