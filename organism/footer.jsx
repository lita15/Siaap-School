import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white">
        {/* Grid container */}
        <div className="container">
          {/* <!-- Section: Text --> */}
          <section className="mb-0">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <p className="mt-5">
                  Orang-orang yang berhenti belajar akan menjadi pemilik masa
                  lalu. Orang-orang yang masih terus belajar, akan menjadi
                  pemilik masa depan - <b> Mario Teguh</b>
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Section: Text --> */}

          <hr className="my-5" />
          {/* <!-- Section: Links --> */}
          <section className="mb-3">
            {/* <!-- Grid row--> */}
            <div className="row text-center d-flex justify-content-center">
              {/* <!-- Grid column --> */}
              <div className="col-md-2">
                <h6 className="">
                  <a href="#!" className="text-white">
                    <div className="mb-3">
                      <i className="bi bi-telephone-fill"> </i>
                    </div>
                    <p className="footer-sosmed ">024-898989</p>
                  </a>
                </h6>
              </div>
              {/* <!-- Grid column -->
                <!-- Grid column --> */}
              <div className="col-md-2">
                <h6 className="">
                  <a href="#!" className="text-white">
                    <div className="mb-3">
                      <i className="bi bi-twitter"></i>
                    </div>
                    <p className="footer-sosmed">@SIIAP200</p>
                  </a>
                </h6>
              </div>
              {/* <!-- Grid column -->
                <!-- Grid column --> */}
              <div className="col-md-2">
                <h6 className="">
                  <a href="#!" className="text-white">
                    <div className="mb-3">
                      <i className="bi bi-instagram"></i>
                    </div>
                    <p className="footer-sosmed">@siaap-2022</p>
                  </a>
                </h6>
              </div>
              {/* <!-- Grid column -->

                <!-- Grid column --> */}
              <div className="col-md-2">
                <h6 className="">
                  <a href="#!" className="text-white">
                    <div className="mb-3">
                      <i className="bi bi-facebook"></i>
                    </div>
                    <p className="footer-sosmed">2022_Siaap</p>
                  </a>
                </h6>
              </div>
              {/* <!-- Grid column -->
                <!-- Grid column --> */}
              <div className="col-md-2">
                <h6 className=" ">
                  <a href="#!" className="text-white">
                    <div className="mb-3">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <p className="footer-sosmed">siaap2022@ymail.com</p>
                  </a>
                </h6>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <small className="text-center p-2 footer-credit">
          Version 2.0©
          <a className="text-white" href="https://mdbootstrap.com/" />
          2022 Noor Yulita Apsari
        </small>
      </footer>
    </div>
  );
};

export default Footer;
