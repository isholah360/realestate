import "./find.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homes } from "./findata";

function Find() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 5000,
    button: false,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="find-home">
        <div className="find-home-title">
          <p className="find-title"> Find Your Perfect Home</p>
          <p>The perfect place to find your dream home</p>
        </div>
        <div className="actual-width">
          <Slider {...settings}>
            {homes.map((home) => (
              <div className="home-imgs" key={home.id}>
                <div className="main-img-bg">
                  <div className="the-home-img">
                    <img className="find-img" src={home.def} alt="" />
                  </div>
                  <div className="all-symb-content">
                    <div className="Apartment-type">{home.tit}</div>
                    <div className="all-symbols">
                      <div className="symbol-value">
                        <img className="main-bed" src={home.bed} alt="" />
                        <div className="val">{home.val}</div>
                      </div>
                      <div className="symbol-value">
                        <img className="main-bed" src={home.shawa} alt="" />
                        <div className="val">{home.shawn}</div>
                      </div>
                      <div className="symbol-value">
                        <img className="main-bed" src={home.car} alt="" />
                        <div className="val">{home.carn}</div>
                      </div>
                      <div className="symbol-value">
                        <img className="main-bed" src={home.sq} alt="" />
                        <div className="val">{home.size}</div>
                      </div>
                    </div>
                    <div className="apartment-typ">{home.typ}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Find;
