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
          {/* button close  */}
          <a href="dashboard-siswa">
            <button type="button" className="close mt-4" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>
          {/* end button close  */}
          <div className="row">
            <div className="col-sm">
              <center>
                <div className="profil mt-5 p-4">
                  <img
                    src="/images/profil_siswa.png"
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
                    <h5>Data Siswa</h5>
                    <div className="content">
                      <div className="row mt-3">
                        <div className="col-4">Tahun Ajaran</div>
                        <div className="col-6">2021/2022</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Nama</div>
                        <div className="col-6">Rahma</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Kelas</div>
                        <div className="col-6">VIII E</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Semester</div>
                        <div className="col-6">II (Dua)</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Email</div>
                        <div className="col-6">dewirahmah@gmail.com</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-4">Wali Kelas</div>
                        <div className="col-6">Moh. Naufal S.Pd., M.Pd.,</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <div className="card mt-5">
              <div className="card-body card-profil">
                <h5 className="mb-3">Data Diri Siswa</h5>
                <div className="row">
                  <div className="col-4">Nama Lengkap</div>
                  <div className="col-8">: Dewi Rahma Bilqis Suyanto</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">NIM</div>
                  <div className="col-8">: 15423</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Email</div>
                  <div className="col-8">: dewirahmah@gmail.com</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Alamat</div>
                  <div className="col-8">: Jl. Kedondong No.89</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Tempat, Tanggal Lahir</div>
                  <div className="col-8">: 15 April 2010</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Nomor Telepon</div>
                  <div className="col-8">: 0875 - 6489 - 0000</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Agama</div>
                  <div className="col-8">: Islam</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Golongan Darah</div>
                  <div className="col-8">: B</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Tahun Masuk</div>
                  <div className="col-8">: 2020</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Status</div>
                  <div className="col-8">: Aktif belum lulus</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Wali Kelas</div>
                  <div className="col-8">: Moh. Naufal S.Pd., M.Pd.,</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Nama Wali</div>
                  <div className="col-8">: Putra Suyanto</div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Hubungan</div>
                  <div className="col-8">: Ayah Kandung</div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <div className="card mt-5">
              <div className="card-body card-profil">
                <h5>Riwayat Pembayaran SPP</h5>
                <table className="table table-striped table-hover mt-4">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Kelas / Semester</th>
                      <th scope="col">Nominal</th>
                      <th scope="col">Tanggal</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>VIII / II</td>
                      <td>-</td>
                      <td>-</td>

                      <td>
                        <button className="rounded-pill pl-3 pr-3 false">
                          Belum
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>VIII / I</td>
                      <td>Rp 650.000</td>
                      <td>18 Jan`21</td>
                      <td>
                        <button className="rounded-pill pl-3 pr-3 true">
                          Lunas
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>VII / II</td>
                      <td>Rp 850.000</td>
                      <td>20 Sept`20</td>
                      <td>
                        <button className="rounded-pill pl-3 pr-3 true">
                          Lunas
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>VII / I</td>
                      <td>Rp 1.015.000</td>
                      <td>01 Feb`20</td>
                      <td>
                        <button className="rounded-pill pl-3 pr-3 true">
                          Lunas
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
