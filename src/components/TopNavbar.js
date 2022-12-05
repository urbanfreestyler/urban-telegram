import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faLockOpen,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function TopNavbar() {
  const menuIcon = <FontAwesomeIcon icon={faBars} className="menuIcon" />;
  const lockIcon = <FontAwesomeIcon icon={faLockOpen} className="menuIcon" />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const openNav = () => {
    console.log("opened nav");
  };

  return (
    <div>
      <div className="navbar_top">
        <div className="d-flex justify-content-center px-2">
          <button
            onClick={openNav}
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            {menuIcon}
          </button>
        </div>

        <div className="position-relative search_container">
          <div className="searchIcon">{searchIcon}</div>

          <input
            type="text"
            placeholder="Search"
            className="search_input rounded-pill"
          ></input>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn" onClick={openNav}>
            {lockIcon}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
