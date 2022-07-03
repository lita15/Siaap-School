import React from "react";
import Footer from "../../organism/footer";

export default function index() {
  return (
    <div>
      <main>
        {/* Gambar  */}
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="1800">
            <div className="row">
              <div className="col-md-2 image">
                <img
                  src="/images/Login-cuate.png"
                  alt=""
                  width="450"
                  height="450"
                  className="mr-5 mt-5"
                />
              </div>
              <div className="col-md-6 offset-md-3 mt-5">
                <div className="card card-login my-3 p-3 slide-fwd-center">
                  <a href="login-as">
                    <button
                      type="button"
                      className="close mr-3"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </a>
                  <form className="card-body cardbody-color p-lg-4 ">
                    <div className="content">
                      <div className="text-center">
                        <img
                          src="/images/Logo_Sekolah.png"
                          width="50"
                          className="mb-1"
                          alt=""
                        />
                        <h3 className="text-center text-judul mt-2 mb-5">
                          LOGIN
                        </h3>
                      </div>

                      <div className="mb-3 mt-3">
                        <label className="title">Email </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Username"
                          aria-describedby="emailHelp"
                          placeholder="Email atau Username"
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
                      <div className="text-center">
                        <a
                          href="/dashboard-siswa"
                          type="submit"
                          className="btn btn-color px-5 py-2 mb-5 w-100 mt-4 rounded-pill"
                        >
                          Login
                        </a>
                      </div>
                      <small
                        id="emailHelp"
                        className="form-text text-center mb-3"
                      >
                        Not Registered?
                        <a href="sign-up" className="fw-bold">
                          {" "}
                          Create an Account
                        </a>
                      </small>
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
