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
          <div className="box1 mt-5 mb-4 p-4">
            <div className="row container raport">
              <div className="col-6">
                <div className="row mt-2">
                  <div className="col-4">Nama Sekolah</div>
                  <div className="col-6">: SMP 1 Gunung Pati</div>
                </div>
                <div className="row">
                  <div className="col-4">Nama Siswa</div>
                  <div className="col-6">: Dwi Rahma</div>
                </div>
                <div className="row">
                  <div className="col-4">Alamat</div>
                  <div className="col-6">: Brati</div>
                </div>
                <div className="row">
                  <div className="col-4">NIS</div>
                  <div className="col-6">: 14745</div>
                </div>
              </div>
              <div className="col-6">
                <div className="row mt-2">
                  <div className="col-4">Kelas</div>
                  <div className="col-6">: VIII</div>
                </div>
                <div className="row">
                  <div className="col-4">Semester</div>
                  <div className="col-6">: II</div>
                </div>
                <div className="row">
                  <div className="col-4">Tahun Pelajaran</div>
                  <div className="col-6">: 2020/2021</div>
                </div>
              </div>
            </div>
          </div>

          <div className="box2">
            <table className="tabel1 table-bordered">
              <thead>
                <tr>
                  <td
                    rowSpan="2"
                    colSpan="2"
                    className="kel text-center"
                    id="mapel "
                  >
                    Mata Pelajaran
                  </td>
                  <td colSpan="3" className="text-center">
                    Pengetahuan <br />
                    (KI-3)
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Angka</td>
                  <td>Predikat</td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td colSpan="2" text-align="leftt" className="kel">
                    <b>Kelompok A (Wajib)</b>
                  </td>
                  <td>1 - 100</td>
                  <td>A - D</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2">1</td>
                  <td className="kel">Pendidikan Agama dan Budi Pekerti</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2 ">2</td>
                  <td className="kel">
                    Pendidikan Pancasila dan Kewarganegaraan
                  </td>
                  <td>81</td>
                  <td>B</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2 ">3</td>
                  <td className="kel">Bahasa Indonesia</td>
                  <td>85</td>
                  <td>B</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2 ">4</td>
                  <td className="kel">Matematika</td>
                  <td>86</td>
                  <td>B</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2">5</td>
                  <td className="kel">Ilmu Pengetahuan Sosial</td>
                  <td>80</td>
                  <td>B</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2 ">6</td>
                  <td className="kel">Ilmu Pengetahuan Alam</td>
                  <td>87</td>
                  <td>A</td>
                </tr>
                <tr className=" text-center">
                  <td className="px-3 py-2 ">7</td>
                  <td className="kel">Bahasa Inggris</td>
                  <td>85</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td colSpan="4" className="kel">
                    <b>Kelompok B (Wajib)</b>
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="px-3 py-2 ">1</td>
                  <td className="kel">Seni Budaya</td>
                  <td>79</td>
                  <td>B</td>
                </tr>
                <tr className="text-center">
                  <td className="px-3 py-2 ">2</td>
                  <td className="kel">
                    Pendidikan Jasmani, Olah Raga, dan Kesehatan
                  </td>
                  <td>82</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td colSpan="4" className="kel">
                    <b>Kelompok C (Muatan Lokal)</b>
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="px-3 py-2 ">1</td>
                  <td className="kel">Bahasa Jawa</td>
                  <td>85</td>
                  <td>B</td>
                </tr>
              </tbody>
            </table>

            <table className="tabel2 mt-4 table-bordered ml-4 ">
              <thead>
                <tr className="text-center">
                  <td className="kel">
                    <b>Ekstrakulikuler</b>
                  </td>
                  <td className="kel">
                    <b>Kegiatan yang Telah dilakukan</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="kel py-2">
                    1. Praja Muda Karana (Pramuka)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="kel py-2">
                    2. Marching Band
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="kel py-2">
                    3. Paskibra
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="tabel3 mt-4 mb-5 table-bordered ml-4 text-center">
              <thead>
                <tr>
                  <td colSpan="2">
                    <b>Ketidakhadiran</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="kel py-2">Sakit</td>
                  <td className="kel">: 2 Hari</td>
                </tr>
                <tr>
                  <td className="kel py-2">Izin</td>
                  <td className="kel">: 1 Hari</td>
                </tr>
                <tr>
                  <td className="kel py-2">Tanpa Keterangan</td>
                  <td className="kel">: 1 Hari</td>
                </tr>
              </tbody>
            </table>

            <div className="orangtua">
              <b>Mengetahui :.............</b>
              <br />
              <br />
              <b>Orang Tua/Wali</b>
              <br />
              <br />
              <br />
              <br />
              <b>......................</b>
            </div>
            <div className="walikelas">
              <b>.............2021</b>
              <br />
              <br />
              <b>Wali Kelas</b>
              <br />
              <br />
              <br />
              <br />
              <b>......................</b>
            </div>
          </div>

          <div className="container">
            <button
              //   onclick="alert('Download Sukses')"
              type=" submit "
              className="btn btn-color float-right mt-5"
            >
              Download PDF
            </button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
