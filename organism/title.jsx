import React from "react";
import Image from "next/image";

const Title = (props) => {
  const { title } = props;
  return (
    <div>
      {/* judul */}
      <div className="dashboard">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light py-4" s>
            <div className="navbar-brand-1" href="# ">
              <h4 className="judul1">Selamat Datang di Portal {title} SIAAP</h4>
            </div>
          </nav>
        </div>
      </div>
      {/* end judul */}
    </div>
  );
};

export default Title;
