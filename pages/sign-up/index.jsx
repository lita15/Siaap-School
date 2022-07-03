import React from "react";

export default function index() {
  return (
    <div>
      <main>
        {/* Gambar  */}
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="1800">
            <div className="row">
              <div className="col-md-6 offset-md-3 mt-5">
                <div className="card my-3 p-3 slide-fwd-center card-login">
                  <a href="homepage">
                    <button
                      type="button"
                      className="close mr-3"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </a>
                  <form className="card-body cardbody-color p-lg-4">
                    <div className="content">
                      <div className="text-center">
                        <img
                          src="/images/Logo_Sekolah.png"
                          width="50"
                          className="mb-1"
                          alt=""
                        />
                        <h3 className="text-center text-judul text-dark mt-2 mb-5">
                          Sign Up
                        </h3>
                      </div>
                      <div className="mb-3 mt-3">
                        <label className="title">Nama Lengkap</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Username"
                          aria-describedby="emailHelp"
                          placeholder="Dwi Rahma"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="title">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="Username"
                          aria-describedby="emailHelp"
                          placeholder="Dwi Rahma@gmail.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="title">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="title">Konfirmasi Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Konfirmasi Password"
                        />
                      </div>
                      <div className="mb-3 mt-3">
                        <label className="title">Token</label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          placeholder="Token"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <small>
                        Dengan membuat akun ini, saya setuju dengan ketentuan
                        layanan dan kebijakan privasi
                      </small>
                      <a
                        href="aktivasi-login"
                        type="submit"
                        className="btn btn-color px-5 py-2 mb-5 w-100 mt-5 rounded-pill"
                      >
                        Sign Up
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
