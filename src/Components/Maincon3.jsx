import React from "react";
import "../Style/Maincon3.css";
import Brussel from "../Image/Brussel.png";
import Colognerhine from "../Image/Colognerhine.png";
import Singapor from "../Image/Singapor.png";
import amsterdam from "../Image/amsterdam.png";
import disneyland from "../Image/disneyland.png";
import switzerland from "../Image/switzerland.png";
import singapore from "../Image/singapore.png";
import london from "../Image/london.png";
import bangkok from "../Image/bangkok.png";
import dubai from "../Image/dubai.png";
import hanoi from "../Image/hanoi.png";
import paris from "../Image/paris.png";
import hongkong from "../Image/hongkong.png";
import sydney from "../Image/sydney.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Maincon3() {
  return (
    <div className="maincon3_container">
      <h1>
        <span style={{borderBottom:"3px solid rgb(21, 212, 237)"}}>

        International - <span style={{ color: "rgb(21, 212, 237)" }}>Holidays Packages</span>
        </span>
      </h1>
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={Brussel} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Brussel</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Brussel
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={Colognerhine} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Colognerhine</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Colognerhine
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={Singapor} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Singapor</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Singapor
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={amsterdam} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Amsterdam</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Amsterdam
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={disneyland} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Disney-land</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Disney-land
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={switzerland} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Switzerland</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Switzerland
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={singapore} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Singapore</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Singapore
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={london} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>London</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> London
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={bangkok} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Bangkok</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Bangkok
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={dubai} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Dubai</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Dubai
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={hanoi} height={200} width={300}  style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Hanoi</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Hanoi
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={paris} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Paris</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Paris
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={hongkong} height={200} width={300} style={{borderRadius:"0.5rem"}} alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Hong-Kong</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaLocationDot /> Hong-Kong
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={sydney} height={200} width={300} style={{borderRadius:"0.5rem"}}alt="" />
              <h5>
                The Best of <span style={{ color: "rgb(21, 212, 237)" }}>Sydney</span>
              </h5>
              <hr style={{ border: "0.1rem solid rgb(21, 212, 237)", width: "80%" }}></hr>
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaRegCalendarAlt /> 7 Nights / 8 Days{" "}
                </div>
                <div
                  style={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  <FaLocationDot /> Sydney
                </div>
                <div>
                  <button className="btn btn-info btn-lg ">
                    View Details <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-info btn-lg">View More</button>
      </div>
    </div>
  );
}

export default Maincon3;
