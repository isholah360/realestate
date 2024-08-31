import './brand.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Brand() {
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 4000,
        button:false,
        autoplaySpeed: 4000,
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
            }
          },
          {
            breakpoint:  1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='main-brand'>
      <div className="brands">
           <div className="flex-brand">
                <Slider {...settings}>
                <div className='the-brand'>
                    <img src="asset/brand02.png" alt="" />
                </div>
                <div>
                     <img src="asset/brand05.png" alt="" />
                </div>
                <div>
                    <img src="asset/brand6.png" alt="" />
                </div>
                <div>
                     <img src="asset/van.png" alt="" />
                </div>
                <div>
                     <img src="asset/vogue.png" alt="" />
                </div>
                <div>
                    <img src="asset/elle.png" alt="" />
                </div>
                <div>
                     <img src="asset/mar.png" alt="" />
                </div>
                <div>
                    <img src="asset/baz.png" alt="" />
                </div>
                </Slider>
           </div>
      </div>
    </div>
  )
}

export default Brand
