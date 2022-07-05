import React from "react";
import Footer from "../../organism/footer";
import Header from "../../organism/header";
import Title from "../../organism/title";

export default function index() {
  return (
    <div>
      <Header></Header>
      <Title title="Siswa" />
      <main>
        <div className="container">
          {/* button close  */}
          <a href="dashboard-siswa">
            <button type="button" className="close mt-0" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>
          {/* end button close  */}
          <h5 className="mt-5 py-5 text-opening">
            Agenda Kelas VIII E Semester II
          </h5>
          <div data-aos="fade-down" data-aos-duration="1000">
            <div className="card ">
              <div className="card-body card-profil">
                <h5>Jadwal Pelajaran</h5>
                <table className="table table-striped table-hover mt-4 text-center">
                  <thead>
                    <tr>
                      <th scope="col">Senin</th>
                      <th scope="col">Selasa</th>
                      <th scope="col">Rabu</th>
                      <th scope="col">Kamis</th>
                      <th scope="col">Jumat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IPA</td>
                      <td>KWU</td>
                      <td>Bahasa Inggris</td>
                      <td>Penjaskes</td>
                      <td>TIK</td>
                    </tr>
                    <tr>
                      <td>IPA</td>
                      <td>KWU</td>
                      <td>Bahasa Inggris</td>
                      <td>Penjaskes</td>
                      <td>TIK</td>
                    </tr>
                    <tr>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                    </tr>
                    <tr>
                      <td>MTK</td>
                      <td>Bahasa Indonesia</td>
                      <td>Bahasa Inggris</td>
                      <td>Penjaskes</td>
                      <td>MTK</td>
                    </tr>
                    <tr>
                      <td>MTK</td>
                      <td>Bahasa Indonesia</td>
                      <td>Bahasa Sunda</td>
                      <td>Penjaskes</td>
                      <td>MTK</td>
                    </tr>
                    <tr>
                      <td>Seni Budaya</td>
                      <td>IPS</td>
                      <td>Bahasa Sunda</td>
                      <td>Agama</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                      <td>Istirahat</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>IPS</td>
                      <td>IPS</td>
                      <td>Seni Budaya</td>
                      <td>Agama</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <div className="card mt-5">
              <div className="card-body card-profil">
                <h5>Ekstra Rutin</h5>
                <table className="table table-striped table-hover mt-4 text-center">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Nama Kegiatan</th>
                      <th scope="col">Hari</th>
                      <th scope="col">Jam</th>
                      <th scope="col">Ruangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Pramuka</td>
                      <td>Jumat</td>
                      <td>15.00</td>
                      <td>Lapangan Indoor</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Marching Band</td>
                      <td>Sabtu</td>
                      <td>08.30</td>
                      <td>Lapangan Voly</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Paskriba</td>
                      <td>Rabu</td>
                      <td>15.30</td>
                      <td>Lapngan Sepak Bola</td>
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
