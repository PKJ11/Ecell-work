import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./producttable.css";
import RightSide from "../../components/RigtSide/RightSide";

// const AllUsers = () => {
//   return (
//     <div>
//       <Sidebar />
//     </div>
//   );
// };

// export default AllUsers;

const AllProducts = ({heading,subheading}) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const buttonPosition = isCalendarVisible
    ? { right: window.innerWidth - 1215 } // Adjust the value based on your calendar component width
    : { right: 0 };
  return (
    <div className="head">
    <h1 style={{margin:"10px 20px"}}>{heading}</h1>
    <h4 style={{margin:"10px 20px"}}>{subheading}</h4>
    <div class="container">
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <a id="name" class="filter__link" href="#">
              Keyword
            </a>
          </div>
           <div class="header__item">
            <a id="name" class="filter__link" href="#">
              Impressions
            </a>
          </div> 
          <div class="header__item">
            <a id="name" class="filter__link" href="#">
              Clicks
            </a>
          </div>
          <div class="header__item">
            <a
              id="wins"
              class="filter__link filter__link--number"
              href="#"
            >
              CTR
            </a>
          </div>
        </div>
        <div class="table-content">
          <div class="table-row">
            <div class="table-data">Keyword1</div>
            <div class="table-data">-</div>
            <div class="table-data">-</div>
            <div class="table-data">-</div>
          </div>
          <div class="table-row">
          <div class="table-data">Keyword2</div>
          <div class="table-data">-</div>
          <div class="table-data">-</div>
          <div class="table-data">-</div>
          </div>
          <div class="table-row">
          <div class="table-data">Keyword3</div>
          <div class="table-data">-</div>
          <div class="table-data">-</div>
          <div class="table-data">-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AllProducts;
