import './team.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Member from './member';

function Team() {
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
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='team-complete'>

        <div className="find-home-title">
                <p className='find-title'>  Meet Our Team</p>
                <p>we are made up of professional who will do everything to give you the best</p>
        </div>
       
      <div className="our-team">
           <div className="">
                <Slider {...settings}>
                <div >
                  <Member meName="Jerry Edward" rank="Sales Manager" myImg="asset/aut.jpg"/>  
                </div>
                <div>
                <Member meName="Virginia Holland" rank="Real Estate Agent" myImg="asset/t1.jpg"/>    
                </div>
                <div>
                <Member meName="Catherine Cole" rank="Real Estate Agent" myImg="asset/t2.jpg"/>   
                </div>
                <div>
                <Member meName="James Smith" rank="Marketing Strategist" myImg="asset/t8.jpeg"/>    
                </div>
                <div>
                <Member meName="Martin Moore" rank="Real Estate Agent" myImg="asset/auth.jpg"/>  
                </div>
                <div>
                <Member meName="Douglas West" rank="Real Estate Agent" myImg="asset/aut.jpg"/>   
                </div>
                <div>
                <Member meName="Morrison Scoth" rank="Real Estate Agent" myImg="asset/t6.jpeg"/>    
                </div>
                <div>
                <Member meName="James Smith" rank="Real Estate Agent" myImg="asset/t5.jpg"/>  
                </div>
                </Slider>
           </div>
          
      </div>
      
    </div>
  )
}

export default Team


