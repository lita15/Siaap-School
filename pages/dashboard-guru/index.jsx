import React from "react";
import Footer from "../../organism/footer";
import Header from "../../organism/header";
import Title from "../../organism/title";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <Header></Header>
      <Title title="Guru" />
      {/* Card */}
      <main>
        <center>
          <div className="container col-8 mt-5">
            <div className="row">
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <Link href={"/profil-guru"}>
                    <a href="">
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
                            <h2 className="detail-card">Data Personal Guru</h2>
                          </center>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <Link href={"/agenda-guru"}>
                    <a href="">
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
                            <h2 className="detail-card">Jadwal Mengajar</h2>
                          </center>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col p-5">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <Link href={"/pengisian-rapot"}>
                    <a href="">
                      <div className="card card-dashboard shadow rounded">
                        <div className="card-body">
                          <center>
                            <img
                              src="images/laporan_buku.png"
                              width="90px"
                              height="90px"
                              className="mt-4"
                            />
                          </center>
                          <center>
                            <h2 className="detail-card">
                              Pengisian Data Rapor Siswa
                            </h2>
                          </center>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </center>
      </main>

      <br />
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}
