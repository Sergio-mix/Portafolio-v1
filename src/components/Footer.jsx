import React from 'react'
import {BsWhatsapp} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <a href="https://www.linkedin.com/in/sergio-alejandro-hernandez-zambrano-090070212/"
                   target="_blank" className="pr-5 flex justify-center items-center">
                    <FaLinkedin size={23} className="pr-1"/> Linkedin
                </a>
                <a href="https://github.com/Sergio-mix" target="_blank"
                   className="pr-5 flex justify-center items-center">
                    <FaGithub size={23} className="pr-1"/> Github
                </a>
                <a href="https://wa.me/573222406726" target="_blank" className="pr-5 flex justify-center items-center">
                    <BsWhatsapp size={23} className="pr-1"/>Whatsapp
                </a>
            </footer>
        </div>

    )
}
export default Footer