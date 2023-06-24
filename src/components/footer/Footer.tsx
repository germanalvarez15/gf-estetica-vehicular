import React from "react";
import "../../styles/components/footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
            <div className="author">
                <span>Desarrollador por:</span><b><a href="https://www.linkedin.com/in/german-alvarez/">German Alvarez</a></b>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/GFEsteticaVehicular/" target="_blank" rel="noreferrer">
                    <FacebookIcon sx={{ color: 'white' }}/>
                </a>
                <a href="https://www.instagram.com/gf.esteticavehicular" target="_blank" rel="noreferrer">
                    <InstagramIcon sx={{ color: 'white' }}/>
                </a>
            </div>
        </footer>
    );
}; 
export default Footer;