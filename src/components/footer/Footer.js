import {GrInstagram,GrLinkedin } from "react-icons/gr"
import { AiOutlineTwitter } from "react-icons/ai";
import './Footer.css';
const Footer = () => {
    return(
        <div className="footer">
            <span className="name">
                Quantums made by - Gunjan Bundela
            </span>
            <p style={{color: "#DCDCDC"}}>Contact us - quantums@gmail.com</p>
            <hr style={{width: "80%"}}/>
            <div className="iconContainer">
                <ul>
                    <li><GrInstagram size='20px'/></li>
                    <li><GrLinkedin size='20px'/></li>
                    <li><AiOutlineTwitter size='25px'/></li>
                </ul>
            </div>
        </div>
    );
};
    
export default Footer;