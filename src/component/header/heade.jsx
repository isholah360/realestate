import "./header.css";

import { Link, NavLink } from "react-router-dom";

function Header() {
  const mydte = new Date().toUTCString().slice(0, 16);
  return (
    <div>
      <div className="time-date">
        <div className="thedate">{mydte}</div>
        <div className="login-re">
          <ul>
            <Link to="/about">
              <li className="listchange">About</li>
            </Link>
            <Link to="/career">
              <li className="listchange">Career</li>
            </Link>
            <Link to="/career">
              <li className="listchange">Career</li>
            </Link>

           

            <li style={{listStyle:"none"}}>
              <div className="header-soc">
                <div className="media-log">
                  <Link to="https://facebook.com">
                    <img src="assets/fb.png" alt="" />
                  </Link>
                </div>
                <div className="media-log">
                  <Link to="https://x.com">
                    <img src="assets/twi.png" alt="" />
                  </Link>
                </div>
                <div className="media-log">
                  <Link to="https://youtube.com">
                    <img src="assets/u.png" alt="" />
                  </Link>
                </div>
                <div className="media-log">
                  <NavLink to="https://instagram.com">
                    <img src="assets/ins.png" alt="" />
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
