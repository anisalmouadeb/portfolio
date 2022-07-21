import React,{useState} from "react";
import "./nav.css";
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail}from "react-icons/bi"
import {RiServiceLine}from "react-icons/ri"

const Nav = () => {

  const[activeNow,setActiveNow] = useState("#");
  return <nav>

    <a href="#"
    onClick={()=>setActiveNow("#")}
    className={activeNow === "#" ? "active":""}><AiOutlineHome/></a>
    <a href="#about" 
    onClick={()=>setActiveNow("about")}
    className={activeNow === "about" ? "active":""}
    ><AiOutlineUser/></a>
    <a href="#experience"
      onClick={()=>setActiveNow("experience")}
      className={activeNow === "experience" ? "active":""}
    ><BiBook/></a>
    <a href="#services"
      onClick={()=>setActiveNow("services")}
      className={activeNow === "services" ? "active":""}
    ><RiServiceLine/></a>
    <a href="#contact"
      onClick={()=>setActiveNow("contact")}
      className={activeNow === "contact" ? "active":""}
    ><BiMessageSquareDetail/></a>

  </nav>;
};

export default Nav;
