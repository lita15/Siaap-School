import React from "react";

export default function header() {
  return (
    <div>
      <header>
        {/* Navbar  */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="navbar-brand" href="# ">
              <img
                src="images/Logo_Sekolah.png  "
                width="55"
                height="40"
                alt="#"
              />
              SIAAP
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto nav-link-header">
                <li className="nav-item mr-5">
                  <a className="nav-link " href="#">
                    Info
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="dashboard-setting">
                    Setting
                  </a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link" href="homepage">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
