import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./AllProducts.css";
import MainDash from "../../components/MainDash/MainDash";
import RightSide from "../../components/RigtSide/RightSide";

// const AllUsers = () => {
//   return (
//     <div>
//       <Sidebar />
//     </div>
//   );
// };

// export default AllUsers;

const AllProducts = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const buttonPosition = isCalendarVisible
    ? { right: window.innerWidth - 1215 } // Adjust the value based on your calendar component width
    : { right: 0 };
  return (
    <div className="AppGlass">
      <Sidebar />
      <h1 className="navbar">Home</h1>
      <div>
        <div className="head">
          <h1>Product Strategy</h1>
          <h4>A brief description</h4>
          <div class="container">
            <div class="table">
              <div class="table-header">
                <div class="header__item">
                  <a id="name" class="filter__link" href="#">
                    Name
                  </a>
                </div>
                <div class="header__item">
                  <a
                    id="wins"
                    class="filter__link filter__link--number"
                    href="#"
                  >
                    Wins
                  </a>
                </div>
              </div>
              <div class="table-content">
                <div class="table-row">
                  <div class="table-data">Tom</div>
                  <div class="table-data">2</div>
                </div>
                <div class="table-row">
                  <div class="table-data">Dick</div>
                  <div class="table-data">1</div>
                </div>
                <div class="table-row">
                  <div class="table-data">Harry</div>
                  <div class="table-data">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="head">
          <h1>User Persona Strategy</h1>
          <h4>A brief description</h4>
          <div class="container">
            <div class="table">
              <div class="table-header">
                <div class="header__item">
                  <a id="name" class="filter__link" href="#">
                    Name
                  </a>
                </div>
                <div class="header__item">
                  <a
                    id="wins"
                    class="filter__link filter__link--number"
                    href="#"
                  >
                    Wins
                  </a>
                </div>
              </div>
              <div class="table-content">
                <div class="table-row">
                  <div class="table-data">Tom</div>
                  <div class="table-data">2</div>
                </div>
                <div class="table-row">
                  <div class="table-data">Dick</div>
                  <div class="table-data">1</div>
                </div>
                <div class="table-row">
                  <div class="table-data">Harry</div>
                  <div class="table-data">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "relative" }}>
          <button
            style={{
              position: "fixed",
              top: 0,
              ...buttonPosition,
              // margin: "10px",
              padding: "10px",
              width: "77px",
              height: "286px",
              cursor: "pointer",
              background: "#23B4FF",
              transition: "right 0.3s ease",
            }}
            onClick={toggleCalendar}
            className="grid"
          >
            <span>C</span>
            <span>A</span>
            <span>L</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span>A</span>
            <span>R</span>
          </button>
          {isCalendarVisible && <RightSide />}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
