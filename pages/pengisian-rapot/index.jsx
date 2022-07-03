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
          {/* <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Perlu diingat penginputan nilai rapor tinggal
            <strong>3 hari lagi</strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div> */}

          <h4 className="container mt-5 mb-5 text-opening">
            <b>Tahun Ajar 2021/2022 Semseter II</b>
          </h4>
          <div className="row container mt-3 ">
            <div className="col-md-6 mt-4">
              <label className="title">NIS</label>
              <input
                type="text"
                className="form-control "
                placeholder="14745"
              />
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <label className="title">Nama Lengkap</label>
              <input
                type="text"
                className="form-control "
                placeholder="Dwi Rahma"
              />
            </div>
          </div>
          <div className="row container ">
            <div className="col-md-6 mt-4">
              <label className="title">Mata Pelajaran</label>
              <select
                className="custom-select form-control isi "
                id="inlineFormCustomSelect"
              >
                <option selected></option>
                <option value="1">PAI</option>
                <option value="2">Bahasa Indonesia</option>
                <option value="3">IPA</option>
                <option value="4">IPS</option>
                <option value="5">Bahasa Inggris</option>
                <option value="6">PPKN</option>
                <option value="7">Seni Budaya</option>
                <option value="8">Penjaskes</option>
                <option value="9">Bahasa Jawa</option>
                <option value="10">Matematika</option>
              </select>
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <div className="title">
                Kelas
                <select
                  className="custom-select form-control isi mt-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected></option>
                  <option value="1">VII</option>
                  <option value="2">VIII</option>
                  <option value="3">IX</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row container ">
            <div className="col-md-6 mt-4">
              <div className="title">
                Nilai Keterampilan
                <input
                  type="number"
                  className="form-control mt-2"
                  placeholder="87"
                />
              </div>
            </div>
            <div className="col-md-6 ml-auto mt-4">
              <div className="title">
                Nilai Pengetahuan
                <input
                  type="number"
                  className="form-control mt-2 mb-5"
                  placeholder="88"
                />
              </div>
            </div>
          </div>

          <div className="container mt-5 mb-5">
            <div className="row container">
              <a
                href="dashboard-guru"
                type="submit"
                className="btn btn-cancel px-5 rounded-pill "
              >
                Cancel
              </a>
              <button
                type="submit"
                className="btn btn-color ml-2 px-5 rounded-pill "
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
