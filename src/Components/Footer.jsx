import React from "react";
import "../Style/Footer.css";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaEnvelopeSquare } from "react-icons/fa";
function Footer() {
  return (
    <div>
    <div className="footer_container bg-dark">
      <div className="footer_cotainer_subcon1">
        <h2> <span className="p-2" style={{borderBottom:"5px solid rgb(21, 212, 237)"}}>
             Contact Us
            </span>
        </h2>
        <p className="pt-3">
          Prasant Vihar,Rohini, New
          Delhi-110085
        </p>
        <p><IoMdPhonePortrait/> + 91 01147512341, + 91 9310123488</p>
        <p> <FaEnvelopeSquare/> getyourtrip@gmail.com</p>
      </div>
      <div className="footer_cotainer_subcon2">
        <h2>
        <span className="p-2" style={{borderBottom:"5px solid rgb(21, 212, 237)"}}>
            Our Services
        </span></h2>
        <p className="pt-3">Holidays Packages</p>
        <p>Hotel Booking</p>
        <p>Flight Booking</p>
        <p>Train Booking</p>

        <p>Car Rentals</p>
      </div>
      <div className="footer_cotainer_subcon3">
        <h2>
        <span className="p-2" style={{borderBottom:"5px solid rgb(21, 212, 237)"}}>
            Quick links
            </span></h2>
        <p className="pt-3">Travel Tips</p>
        <p>Testimonials And Reviews</p>
        <p>Why travel with us.?</p>
        <p>About Indian Driver</p>

      </div>
      <div className="footer_cotainer_subcon4">
        <h2>
            
        <span className="p-2" style={{borderBottom:"5px solid rgb(21, 212, 237)"}}>
            Legal
            </span>
            </h2>
        <p className="pt-3">Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>About us</p>
        <p>contact us</p>
</div>

    </div>
    <div className="d-flex w-100 bg-dark text-white flex-wrap justify-content-between">
    <div className="footer_last_para">
    &copy; All right reserved by GET YOUR TRIP .
    </div>
    <div className="footer_last_para1">
    Designed and Developed by <a href="https://www.kanakdrishtiinfotec.in/" target="_blank">Kanak Drishti Infotech Pvt Ltd</a>.
    </div>
</div>
    </div>
  );
}

export default Footer;
