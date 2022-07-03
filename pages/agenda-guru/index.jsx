import React from "react";
import Header from "../../organism/header";
import Footer from "../../organism/footer";
import Title from "../../organism/title";

export default function index() {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <main>
        <div className="container">
          {/* button close */}
          <a href="/dashboard-guru">
            <button type="button" className="close mt-3" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </a>
          {/* end button close  */}
          <h5 className="mt-5 py-5 text-center text-opening ">
            <b>
              Jadwal Mengajar Guru SMP 1 Gunung Pati Tahun Pembelajaran
              2021/2022 Semester II
            </b>
          </h5>
          <div className="container title mt-5">
            <div className="row justify-content-start ">
              <div className="col-4">Nama</div>
              <div className="col-4">: Ibnu Taehyung Samsudi</div>
            </div>
            <div className="row justify-content-start mt-3">
              <div className="col-4">Guru Pengampu</div>
              <div className="col-4">: Seni Musik</div>
            </div>
            <div className="row justify-content-start mt-3">
              <div className="col-4">Status</div>
              <div className="col-4">: Aktif</div>
            </div>
            <div className="row justify-content-start mt-3">
              <div className="col-4">Total Jam Mengajar (Satu Minggu)</div>
              <div className="col-4">: 20 Jam</div>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-duration="1000">
            <div className="card mt-5">
              <div className="card-body card-profil">
                <h5>Jadwal Pelajaran</h5>
                <table className="table table-striped table-hover mt-4 text-center">
                  <thead>
                    <tr>
                      <th scope="col jam-kelas"></th>
                      <th scope="col">Senin</th>
                      <th scope="col">Selasa</th>
                      <th scope="col">Rabu</th>
                      <th scope="col">Kamis</th>
                      <th scope="col">Jumat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>7:45 - 8:30</td>
                      <td>VII A</td>
                      <td>-</td>
                      <td>VIII D</td>
                      <td>VII F</td>
                      <td>VII A</td>
                    </tr>
                    <tr>
                      <td>8:30 - 9:15</td>
                      <td>VII A</td>
                      <td>VIII B</td>
                      <td>VIII D</td>
                      <td>VII F</td>
                      <td>VII A</td>
                    </tr>
                    <tr>
                      <td>9:15 - 9:35</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>9:35 - 10:20</td>
                      <td>IX B</td>
                      <td>VIII B</td>
                      <td>-</td>
                      <td>IX D</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>10:20 - 11:05</td>
                      <td>-</td>
                      <td>VIII E</td>
                      <td>-</td>
                      <td>IX D</td>
                      <td>IX C</td>
                    </tr>
                    <tr>
                      <td>11:05 - 11:50</td>
                      <td>IX C</td>
                      <td>VIII E</td>
                      <td>IX C</td>
                      <td>-</td>
                      <td>IX C</td>
                    </tr>
                    <tr>
                      <td>11:50 - 12:10</td>
                      <td>IX C</td>
                      <td>-</td>
                      <td>-</td>
                      <td>VII B</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>12:10 - 12:55</td>
                      <td>-</td>
                      <td>-</td>
                      <td>IX C</td>
                      <td>VII B</td>
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
                <h5>Jadwal Mengajar Ekstra Rutin</h5>
                <table className="table table-striped table-hover mt-4 text-center">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Nama Kegiatan</th>
                      <th scope="col">Hari</th>
                      <th scope="col">Bulan</th>
                      <th scope="col">Ruangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Pramuka</td>
                      <td>Jumat</td>
                      <td>Januari - April</td>
                      <td>Lapangan Indoor</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Seni Musik</td>
                      <td>Kamis</td>
                      <td>Februari - September</td>
                      <td>Ruang Musik</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
      <Footer></Footer>
    </div>
  );
}
