import "./head.css";
import withCursor from "../HOCs/withCursor";
import { Data } from "./headData";
import { useState, useRef, useEffect } from "react";

function Head(props) {
  const blk = useRef(null);
  const refc = useRef(null);

  // block.current.style.display='none'

  const [init, setInit] = useState(0);
  const [but, setBut] = useState(0);
  // const [colur, setColur] = useState(1);

  const next = () => {
    setInit(init === Data.length - 1 ? 0 : init + 1);
  };
  const prev = () => {
    setInit(init === 0 ? Data.length - 1 : init - 1);
  };

  useEffect(() => {
    if (init === 5) {
      setBut(but);
    } else {
      blk.current.style.display = "none";
    }
  }, [init]);

  const { onCursor } = props.context;
  return (
    <div>
      <div className="head">
        <div className="outer-park">
          {Data.map((ins) => (
            <div className="buffer" key={ins.id}>
              <div className="heading" key={ins.id}>
                <div className={ins.id == init ? "theimg" : "theimage"}>
                  <img className="home-img" src={ins.image} alt="" />
                  <div className="mobile-main">
                    <img className="home-img mobile" alt="" />
                  </div>
                  <div className="cover">
                    <div className="types">
                      <div className="land-room">{ins.room}</div>
                      <div className="head-content">{ins.content}</div>
                      <div className="details-content"> {ins.detail}</div>
                    </div>

                    <div className="name">{ins.name}</div>
                    <div className="esatte-name">{ins.real}</div>
                    <div className="social">
                      <img className="socials" src={ins.fb} alt="" />
                      <img className="socials" src={ins.tw} alt="" />
                      <img className="socials" src={ins.lnk} alt="" />
                      <img className="socials" src={ins.inst} alt="" />
                      <img className="socials" src={ins.yt} alt="" />
                    </div>
                    <div
                      className={but === init ? "" : "sel-buy-button"}
                      ref={blk}
                    >
                      <div className="two-sel-buy">
                        <span
                          className="button-span"
                          onMouseEnter={() => onCursor("pointer")}
                          onMouseLeave={onCursor}
                        >
                          {ins.buy}
                        </span>
                        <span
                          className="button-span"
                          onMouseEnter={() => onCursor("pointer")}
                          onMouseLeave={onCursor}
                        >
                          {ins.sale}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="nex-prev">
          <div className="ctr-button">
            <span className="lefty" onClick={next}>
              &#x22D6;
            </span>

            <span className="righty" onClick={prev}>
              &#x22D7;
            </span>
          </div>
        </div>
        <div className="the-numbers">
          {Data.map((ins, index) => (
            <div className="number" key={index}>
              <div
                className={index === init ? "ids ids-active" : "ids"}
                ref={refc}
              >
                {index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withCursor(Head);
