import React from "react";
import "../Style/Maincon2.css";
import img1 from "../Image/logo2.png";
import Maincon3 from "./Maincon3";
import manlogo from "../Image/men.jpeg";
import Maincon4 from "./Maincon4";
import Maincon5 from "./Maincon5";
function Maincon2() {
  return (
    <div className="maincon2_container">
      <div className="about_headingclass">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="d-flex justify-content-center ">
          <div
            style={{ border: "2px solid rgb(21, 212, 237)", width: "11rem" }}
          ></div>
        </div>
      </div>
        <div className="about_paraclass">
          <div className="about_paraclass_subcon1">
            <p>
              We are glad to present our company Global Destination Management
              as a pioneer in the Travel Industry based in New Delhi since 2005.
              We work in Mice, leisure holidays for groups as well as
              individuals. We are proud Members of IATA/OTAI/ADTOI/ETAA/IAAI.
              The main activity of our company is conferences, incentive tours,
              hotel bookings, holiday packages and individual trips to all over
              the globe.
            </p>
            <p>
              Global Destination Management is poised to take advantage of this
              growth and moderate competition in the travel portion of the
              industry with dedicated,experienced staff, excellent networking,
              effective management and marketing.
            </p>
            <p>We promise to provide you memorable experiences...</p>
          </div>
          <div className="about_paraclass_subcon2">
            <img
              src={manlogo}
              alt="image not load"
              style={{
                width: "20rem",
                height: "22rem",
                borderRadius: "1rem",
                boxShadow: "0px 0px 8px black",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img className="mt-3" src={img1} style={{ width: "95%" }} alt="" />
        </div>
      
      <Maincon3 />
      <Maincon4 />
      <Maincon5 />
    </div>
  );
}

export default Maincon2;
