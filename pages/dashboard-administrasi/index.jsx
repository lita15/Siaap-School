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
        {/* Card */}
        <center>
          <div className="container col-8 mt-5">
            <div className="row">
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a href="profil-administrasi">
                    <div className="card shadow rounded card-dashboard">
                      <div className="card-body">
                        <center>
                          <img
                            src="images/siswa.png"
                            width="90px"
                            height="90px"
                            className="mt-4"
                          />
                        </center>
                        <center>
                          <h2>Data Personal Administrsi</h2>
                        </center>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a href="pengisian-keuangan">
                    <div className="card card-dashboard shadow rounded">
                      <div className="card-body">
                        <center>
                          <img
                            src="images/list.png"
                            width="90px"
                            height="90px"
                            className="mt-4"
                          />
                        </center>
                        <center>
                          <h2>Pengisian Data dan Keuangan Siswa</h2>
                        </center>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a href="#">
                    <div className="card card-dashboard shadow rounded">
                      <div className="card-body">
                        <center>
                          <img
                            src="images/laporan_buku.png"
                            width="90px"
                            height="100px"
                            className="mt-4"
                          />
                        </center>
                        <center>
                          <h2>Laporan Pembayaran</h2>
                        </center>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </center>
      </main>
      {/* End Card  */}
      <br />
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}
