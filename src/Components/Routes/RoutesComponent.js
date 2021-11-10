// import {Route} from 'react-router-dom';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import UserDetail from "../UserDetail/UserDetail";
import { Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router,Switch} from 'react-router-dom';
// Switch

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default RoutesComponent;
