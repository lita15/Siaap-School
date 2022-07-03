import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div>
      <main>
        <div className="container">
          <div
            className="col col-6 m-auto py-5"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="card mt-5 card-login container text-center py-2 ">
              <img src="/images/Enthusiastic-rafiki.png" alt="" />
              <div className="title mb-3">
                Selamat, akun anda telah terverifikasi.
              </div>
              <a href="login-as">
                <button
                  type="button"
                  className="btn btn-color py-2 px-5 mb-5  rounded-pill"
                >
                  Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
