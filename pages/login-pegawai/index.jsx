import React from "react";

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
                  src="/images/Login-pana.png"
                  alt=""
                  //   width="500"
                  height="500"
                  className="mt-5"
                />
              </div>
              <div className="col-md-6 offset-md-3 mt-5">
                <div className="card my-3 p-3 slide-fwd-center card-login">
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
                        />
                        <h3 className="text-center text-judul mt-2 mb-5">
                          LOGIN
                        </h3>
                      </div>

                      <div className="mb-3 mt-5">
                        <label className="title">Email atau Username</label>
                        <input
                          type="email"
                          className="form-control"
                          id="Username"
                          aria-describedby="emailHelp"
                          placeholder="Username"
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
                        <div className="title mt-5">
                          Klik button di bawah ini, jika login sebagai guru
                        </div>
                        <a
                          href="dashboard-guru"
                          type="submit"
                          className="btn btn-color px-5 py-2 mb-5 w-100 mt-4 rounded-pill"
                        >
                          Login as Guru
                        </a>
                        <div className="title">
                          Klik button di bawah ini, jika login sebagai Staff
                          Administrasi
                        </div>
                        <a
                          href="dashboard-administrasi"
                          type="submit"
                          className="btn btn-color px-5 py-2 mb-5 w-100 mt-4 rounded-pill"
                        >
                          Login as Staff Administrasi
                        </a>
                      </div>

                      <small className="form-text text-center mb-3">
                        Not Registered?
                        <a href="sign-up" className=" fw-bold ">
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
