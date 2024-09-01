import { useEffect, useState } from "react";
import { homes } from "../find/findata";
import "./list.css";
import Slider from "react-slick";
import "./list-slick.css";
import "./list-slick-theme.css";
import { RiArrowDropRightLine,RiArrowDropLeftLine } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#e7e2dd",
        fontSize: "2rem",
        color: "gray",
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center"
      }}
      onClick={onClick}
    >
      {" "}
      <RiArrowDropRightLine />{" "}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#e7e2dd",
        fontSize: "2rem",
        color: "gray",
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center"
      }}
      onClick={onClick}
    >
      <RiArrowDropLeftLine />{" "}
    </div>
  );
}

function List() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // const [datas, setDatas] = useState([]);
  // const [propertyPurpose, setPropertyPurpose] = useState("for-sale");
  // const [page, setPage] = useState(1);

  // const handlePos = () => {
  //   setPage(page + 1);
  //   console.log(page);
  //   if (page >= 5) {
  //     setPage(1);
  //   }
  // };
  // const handleMin = () => {
  //   setPage(page - 1);
  //   console.log(page);
  //   if (page <= 1) {
  //     setPage(5);
  //   }
  // };

  // const handleSelectChange = (event) => {
  //   setPropertyPurpose(event.target.value);
  // };
  // const url =
  //   `https://bayut-com1.p.rapidapi.com/properties/list?name=Abu%20Dhabi&purpose=for-sale&hitsPerPage=2&page=${page}&sort=city-level-score`;
  // const urls =
  //   `https://bayut-com1.p.rapidapi.com/properties/list?name=Abu%20Dhabi&purpose=for-rent&hitsPerPage=2&page=${page}&sort=city-level-score`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "4bf0cf63bdmsh7e7fd737959584ap1553f5jsn1871a778f29d",
  //     "X-RapidAPI-Host": "bayut-com1.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {

  //   if (page >= 5){
  //     setPage(1)
  //   }
  //   if (page <= 1){
  //     setPage(5)
  //   }

  //   if (propertyPurpose == "for-rent") {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.json();
  //         setDatas(result.hits);
  //         console.log(result.hits);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     return () => fetchData();
  //   } else {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(urls, options);
  //         const result = await response.json();
  //         setDatas(result.hits);
  //         console.log(result.hits);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     return () => fetchData();
  //   }
  // }, [propertyPurpose]);

  // const [sublist, setSublist] = useState(2)

  // const left = ()=>{
  //    setSublist( sublist == 0 ? classic.lets.team.length -1 : sublist - 1)
  // }

  // const right = ()=>{
  //   setSublist( sublist == classic.lets.team.length -1 ? 0 : sublist + 1)
  // }
  // const teamLengths = classic.map(itemize => itemize.team.length);

  // console.log(teamLengths)
  return (
    <div>
      <div className="list-container">
        <div className="discover-property">
          <div className="find-home-title">
            <p className="find-title"> Discover Our Best Deals</p>
            <div className="subtitle-options">
              <p>
                Dive into our top deals for an unforgettable shopping
                experience!
              </p>
              <select
                id="propertyPurpose"
                name="propertyPurpose"
                // value={propertyPurpose}
                // onChange={handleSelectChange}
              >
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
              </select>
            </div>
          </div>
        </div>

        <div className="proper-list">
          {homes.map((list) => (
            <div key={list.id} className="list-property">
              <Slider {...settings}>
                {list.imgs.map((data) => (
                  <div key={data.id} className="slid-img">
                    <img src={data} alt="" />
                  </div>
                ))}
              </Slider>
              <div className="all-symb-content">
                <div className="Apartment-type">{list.tit}</div>
                <div className="all-symbols">
                  <div className="symbol-value">
                    <img className="main-bed" src={list.bed} alt="" />
                    <div className="val">{list.val}</div>
                  </div>
                  <div className="symbol-value">
                    <img className="main-bed" src={list.shawa} alt="" />
                    <div className="val">{list.shawn}</div>
                  </div>
                  <div className="symbol-value">
                    <img className="main-bed" src={list.car} alt="" />
                    <div className="val">{list.carn}</div>
                  </div>
                  <div className="symbol-value">
                    <img className="main-bed" src={list.sq} alt="" />
                    <div className="val">{list.size}</div>
                  </div>
                </div>
                <div className="apartment-typ">{list.typ}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
