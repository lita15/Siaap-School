import React from "react";

export default function index() {
  return (
    <div>
      <main>
        <div className="">
          <div className=" col-md-6 offset-md-3 mt-5 ]">
            <div
              className="card card-login my-3 p-3 slide-fwd-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a href="homepage">
                <button type="button" className="close mr-3" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </a>
              <form className="card-body  ">
                <div className="content">
                  <div className="text-center">
                    <img
                      src="/images/Logo_Sekolah.png"
                      width="50"
                      className="mb-1"
                      alt=""
                    />
                    <h3 className="text-center Agenda mt-2 mb-5">LOGIN AS</h3>
                  </div>
                  <center>
                    <div className="row container mb-5">
                      <div
                        className="col-lg mt-5"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                      >
                        <a href="login-siswa">
                          <div className="card card-login-as ">
                            <div className="card-body text-center">
                              <img
                                src="/images/murid.png"
                                width="130"
                                alt=""
                                className="rounded-circle"
                              />
                              <div className="title mt-3">Siswa</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg mt-5 ">
                        <a href="login-pegawai">
                          <div
                            className="card card-login-as"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <div className="card-body text-center">
                              <img
                                src="/images/guru.png"
                                width="130"
                                alt=""
                                className="rounded-circle"
                              />
                              <h2 className="title mt-3">Pegawai</h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
