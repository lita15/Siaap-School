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
        <div className="container mt-3">
          <h4 className="container mt-5 mb-5 text-opening">
            <b>Pengisian Data Keuangan Siswa</b>
          </h4>
          <div className="row container mt-3 ">
            <div className="col-md-6 mt-4">
              <div className="title">
                NIS
                <input
                  type="text"
                  className="form-control mt-2"
                  id="nis"
                  placeholder="14745"
                />
              </div>
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <div className="title">
                Nama Lengkap
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Dwi Rahma"
                />
              </div>
            </div>
          </div>
          <div className="row container ">
            <div className="col-md-6 mt-4">
              <div className="title">
                Kelas
                <select
                  className="custom-select form-control isi mt-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected></option>
                  <option value="1">VII A</option>
                  <option value="2">VII B</option>
                  <option value="3">VII C</option>
                  <option value="4">VII D</option>
                  <option value="5">VII E</option>
                  <option value="6">VIII A</option>
                  <option value="7">VIII B</option>
                  <option value="8">VIII C</option>
                  <option value="9">VIII D</option>
                  <option value="10">VIII E</option>
                  <option value="11">IX A</option>
                  <option value="12">IX B</option>
                  <option value="13">IX C</option>
                  <option value="14">IX D</option>
                  <option value="15">IX E</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <div className="title">
                Semester
                <select
                  className="custom-select form-control isi mt-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected></option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row container ">
            <div className="col-md-6 mt-4">
              <div className="title">
                Pembangunan Gedung
                <input
                  type="number"
                  className="form-control mt-2"
                  placeholder="Rp 1.500.000"
                />
              </div>
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <div className="title">
                Dana Hibahan
                <input
                  type="number"
                  className="form-control mt-2"
                  placeholder="Rp 100.000"
                />
              </div>
            </div>
          </div>
          <div className="row container ">
            <div className="col-md-6 mt-4">
              <div className="title">
                Tanggal Pembayaran
                <input type="date" className="form-control mt-2" />
              </div>
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <div className="title">
                Total Pembayaran
                <input
                  type="number"
                  className="form-control mt-2 mb-5"
                  placeholder="Rp 1.500.000"
                />
              </div>
            </div>
          </div>

          <div className="container py-5 mb-5 ">
            <div className="row container ">
              <a
                href="dashboard-administrasi"
                type="submit"
                className="btn btn-cancel px-5 rounded-pill "
              >
                Cancel
              </a>
              <button
                type="submit"
                className="btn btn-color px-5 ml-2 rounded-pill "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
