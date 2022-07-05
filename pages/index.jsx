import React from "react";
import Footer from "../organism/footer";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <nav className="navbar navbar-light justify-content-between container">
        <a className="navbar-brand">
          <img
            src="/images/Logo_Sekolah.png"
            className="img-fluid"
            alt="home"
          />
          {/* <Logo></Logo> */}
        </a>
        <div className="">
          <a
            href="login-as"
            type="submit"
            className="btn btn-login  rounded-pill px-4"
          >
            LOGIN
          </a>
          <a
            href="sign-up"
            type="submit"
            className="btn btn-signup ml-2 px-4 rounded-pill "
          >
            SIGN UP
          </a>
        </div>
      </nav>

      {/* Konten 1 */}
      <div className="konten1">
        <div className="d-flex justify-content-center container">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="images/Homepage_sekolah.png "
              className="img-sekolah"
              alt="#"
            />
          </div>
          <div className="d-flex flex-column ">
            <div className="kata1">Selamat datang di </div>
            <div className="kata2">
              <b>Sistem Informasi Akademik dan Administrasi Pembayaran</b>
            </div>
            <div className="kata2"></div>
            <div className="kata3"> SMP N 01 Gunung Pati</div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#68bbe3"
          fillOpacity="1"
          d="M0,128L30,149.3C60,171,120,213,180,197.3C240,181,300,107,360,101.3C420,96,480,160,540,192C600,224,660,224,720,202.7C780,181,840,139,900,112C960,85,1020,75,1080,85.3C1140,96,1200,128,1260,138.7C1320,149,1380,139,1410,133.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      {/* Konten 2 */}
      <div className="konten2 ">
        <div className="Agenda justify-content-center mb-5 ">
          Sambutan Kepala Sekolah
        </div>
        <div className="d-flex justify-content-center container px-5">
          <div className="d-flex flex-column ">
            <div className="kata8 px-5 ">
              &emsp;&emsp;&emsp;&emsp;Kami ucapakan selamat datang di SIAAP SMP
              Negeri 01 Gunung Pati. Memasuki era revolusi industri 4.0,
              kehadiran sebuah sistem informasi bagi instansi pendidikan menjadi
              hal yang penting guna memenuhi kebutuhan informasi baik civitas
              akademika maupun masyarakat luas.
              <br />
              &emsp;&emsp;&emsp;&emsp;Wesbite ini menjadi gerbang digital utama
              bagi siswa, guru, kepala cabang. dan bagian administrasi sekolah
              dalam memanajemen data terkait urusan administrasi dan keuangan.
              Dalam pengembangannya, tentu saja website ini masih memiliki
              beberapa kekurangan. Oleh karena itu, kami akan terus
              mengembangkan website ini agar lebih interaktif dan memberikan
              manfaat yang lebih banyak bagicivitas akademika SMP Negeri 01
              Gunung Pati. <strong>Basir, S.Pd. M.Pd.</strong>
            </div>
          </div>

          <img
            src="/images/Homepage_kepsek.png "
            className="img-kepsek "
            width="450"
            alt="#"
          />
        </div>
      </div>

      {/* Berita */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#68bbe3"
          fillOpacity="1"
          d="M0,288L48,256C96,224,192,160,288,149.3C384,139,480,181,576,181.3C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="Berita">
        <div className="Agenda justify-content-center mb-4 ">Berita</div>
        <div className="d-flex justify-content-center container px-5">
          <div className="d-flex flex-column ">
            <div className="kata8-title px-5 mt-4">
              Pengiriman Berkas Registrasi Siswa Baru
            </div>
            <div className="kata8 px-5 mt-3 mb-5">
              &emsp;&emsp;&emsp;&emsp;Diberitahukan kepada peserta didik baru
              angkatan 2021, untuk memastikan pengiriman berkas registrasi, dan
              login ke portal SIIAP Siswa, bagi siswa yang belum memiliki akun
              karena terkendala dengan token harap menghubungi wali kelas
              masing- masing untuk mengkoordinasikan token untuk pembuatan akun
              SIAAP.
            </div>
          </div>
          <img
            src="/images/Homepage_Berita.png "
            className="gambar-berita "
            width="350"
            alt="#"
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#68bbe3"
          fillOpacity="1"
          d="M0,288L48,256C96,224,192,160,288,149.3C384,139,480,181,576,181.3C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Konten 4 Agenda */}
      <div className="mb-5">
        <div className="Agenda justify-content-center mb-3">
          Agenda Bulan Ini
        </div>
        <div className="d-flex justify-content-center container">
          <div className="row">
            <div className="col-sm-4">
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center ">
                  <div className="card text-center mb-3 mt-3 card-agenda">
                    <h3 className="card-header card-date py-4 ">08 </h3>
                    <h6 className="card-title card-info px-4 py-2">
                      Penyerahan Rapot Semester Gasal 2021/2022
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center ">
                  <div className="card text-center mb-3 mt-3 card-agenda">
                    <h3 className="card-header card-date py-4 ">13 </h3>
                    <h6 className="card-title card-info px-4 py-2">
                      Pembayaran Pendaftaran Murid Baru Tahun Ajar 2021/2022
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center ">
                  <div className="card text-center mb-3 mt-3 card-agenda">
                    <h3 className="card-header card-date py-4 ">20 </h3>
                    <h6 className="card-title card-info px-4 py-2">
                      Pendaftaran Ulang Murid Baru Tahun Ajar 2021/2022
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center container">
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center ">
                  <div className="card text-center mb-3 mt-3 card-agenda">
                    <h3 className="card-header card-date py-4 ">25 </h3>
                    <h6 className="card-title card-info px-4 py-2">
                      Sekolah Tatap Muka Perdana Tahun Ajar 2021/2022
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center ">
                  <div className="card text-center mb-3 mt-3 card-agenda">
                    <h3 className="card-header card-date py-4 ">30 </h3>
                    <h6 className="card-title card-info px-4 py-2">
                      Liburan Sekolah Tahun Ajar 2021/2022
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Index;
