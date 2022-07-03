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
        <div className="container">
          {/* button close */}
          <a href="dashboard-guru">
            <button type="button" className="close mt-4" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>
          {/* end button close */}
          <div className="row">
            <div className="col-sm">
              <center>
                <div className="profil mt-5 p-4">
                  <img
                    src="/images/profil_guru.png"
                    className="image-profil"
                    height="200"
                  />
                  <p>Foto Profil</p>
                </div>
              </center>
            </div>
            <div className="col-sm">
              <div className="container">
                <div className="card mt-5">
                  <div className="card-body card-profil">
                    <h5>Data Diri Guru</h5>
                    <div className="content">
                      <div className="row mt-3">
                        <div className="col-4">NIP</div>
                        <div className="col-6">12348539397</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Nama</div>
                        <div className="col-6">Ibnu Taehyung Samsudi</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">User Name</div>
                        <div className="col-6">@taehyungg</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Jabatan</div>
                        <div className="col-6">Wapres</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Email</div>
                        <div className="col-6">taehyung@pacar.aing.com</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Nomer Telepon</div>
                        <div className="col-6">08630269124</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-5">
            <div
              className="card-body card-profil"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h5>Riwayat Jabatan</h5>
              <table className="table table-striped table-hover mt-4">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Tahun</th>
                    <th scope="col">Jabatan</th>
                    <th scope="col">Wali kelas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2021</td>
                    <td>Bendahara I</td>
                    <td>
                      <button className="rounded-pill pl-3 pr-3 false">
                        False
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2020</td>
                    <td>Bendahara II</td>
                    <td>
                      <button className="rounded-pill pl-3 pr-3 false">
                        False
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>2019</td>
                    <td>Guru Seni Budaya</td>
                    <td>
                      <button className="rounded-pill pl-3 pr-3 true">
                        True
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>2018</td>
                    <td>Guru Seni Musik</td>
                    <td>
                      <button className="rounded-pill pl-3 pr-3 true">
                        True
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
      </main>
      <Footer></Footer>
    </div>
  );
}
