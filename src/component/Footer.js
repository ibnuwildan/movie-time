import React from "react";
import { Button } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <div>
           <footer className="footer pt-5 pb-4">
            <div className="row mx-5 text-light">
                <div className="col-md-1 fs-5">
                    <p>Profile</p>
                </div>
                <div className="col-md-1 fs-5">
                    <p>Terms Of Use</p>
                </div>
                <div className="col-md-8 text-end">
                    <Button variant="outline-light"><FaInstagram /></Button>
                    <Button variant="outline-light"><FaFacebookF /></Button>
                    <Button variant="outline-light"><FaTwitter /></Button>
                    <Button variant="outline-light"><FaYoutube /></Button>
                </div>
            </div>
            <div className="mx-5 pt-3">
                <div className="row">
                   <div className="col-md-8 pe-5" style={{textAlign:"justify", fontSize: "14px", color: "lightgray"}}>
                <p> Terms of Use Advertising
 © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.
 Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside
 PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya</p>
                    </div>
                </div>
            </div>
            </footer> 
        </div>
    )
}

export default FooterComponent;