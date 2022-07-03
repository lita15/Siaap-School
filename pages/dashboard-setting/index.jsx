import React from "react";
import Footer from "../../organism/footer";
import Header from "../../organism/header";
import Title from "../../organism/title";

export default function index() {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <main>
        <div className="container mt-4">
          {/* button close */}
          <a href="dasboard_siswa.html">
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>
        </div>
        {/* end button close  */}
        {/* Card  */}
        <center>
          <div className="container col-8 mt-5">
            <div className="row">
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a href="data_personal_siswa.html">
                    <div className="card shadow rounded card-dashboard">
                      <div className="card-body">
                        <center>
                          <img
                            src="images/edit_profil.png"
                            width="80px"
                            height="80px"
                            className="mt-5"
                          />
                        </center>
                        <center>
                          <h2>Edit Data Diri</h2>
                        </center>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a href="editpass_siswa.html">
                    <div className="card card-dashboard shadow rounded">
                      <div className="card-body">
                        <center>
                          <img
                            src="images/lock.png"
                            width="70px"
                            height="80px"
                            className="mt-5"
                          />
                        </center>
                        <center>
                          <h2>Edit Kata Sandi</h2>
                        </center>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </center>
        <br />
      </main>
      <Footer></Footer>
    </div>
  );
}
