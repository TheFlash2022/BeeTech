import React from "react";

const HomePage = () => {
  return (
    <div className="homePage bg-zinc-300 py-6 px-6">

      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.vov.vn/sites/default/files/styles/large/public/2024-02/vu%20tru.jpg" className="" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images2.thanhnien.vn/528068263637045248/2023/12/26/hinh-1-17035594683252023043418.png" className="" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://e.khoahoc.tv/photos/image/2015/12/09/vu-tru-1.jpg" className="" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  );
};

export default HomePage;
