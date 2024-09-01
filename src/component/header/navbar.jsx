import { useEffect, useState } from "react";
import gsap from "gsap";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      gsap.to(".nvbr ul", {
        duration: 0.5,
        height: 0,
        opacity: 0,
        alignItems: "flex-start",
        display: "none",
      });
      // gsap.set('.nvbr ul', { duration: 0.5, height: 0, opacity: 1,  });
    } else {
      gsap.set(".nvbr ul", {
        display: "flex",
        opacity: 0,
        width: "40%",
        height: "55vh",
      });
      gsap.to(".nvbr ul", { duration: 0.5, height: "55vh", opacity: 1 });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        // Reset styles for desktop view
        gsap.set(".nvbr ul", {
          display: "flex",
          opacity: 1,
          height: "auto",
          marginRight: "-8rem",
        });
      } else if (window.innerWidth <= 769) {
        // Reset styles for desktop view
        gsap.set(".nvbr ul", {
          display: "none",
          opacity: 0,
          height: "auto",
          marginRight: "0rem",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="nvbr">
        <div className="logo">HOMERS</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li className="">About</li>
          </Link>
          <Link to="/register">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/career">
            <li className="mobile-show">Career</li>
          </Link>
          {/* <div className="mobile-show  mobile-logins">
            {userInfo ? (
              <li>Logout</li>
            ) : (
              <Link to="/login">
                <li>Login</li>
              </Link>
            )}
            {userInfo ? (
              ""
            ) : (
              <Link to="/register">
                <li style={{ marginLeft: "1.5rem" }}>Register</li>
              </Link>
            )}
          </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
