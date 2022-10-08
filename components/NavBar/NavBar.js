import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import throttle from "lodash.throttle";

const Logo = ({ logoText }) => {
  return (
    <div className={styles.logoContainer} id="logo">
      {logoText}
    </div>
  );
};

const NavBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    //setWindowWidth(window?.innerWidth);
    adjustDisplay();
  }, [show]);

  const adjustDisplay = () => {
    if (window?.innerWidth > 768) {
      setShow(false);
      document.getElementById("links").style.left = "0px";
      document.getElementById("links").style.top = "-3vh";
      document.getElementById("logo").style.top = "-3vh";
    } else {
      document.getElementById("links").style.left = "-180px";
      if (show) {
        document.getElementById("links").style.top = "-3vh";
        document.getElementById("logo").style.top = "-30vh";
      } else {
        document.getElementById("links").style.top = "-30vh";
        document.getElementById("logo").style.top = "-3vh";
      }
    }
  }
  const handleResize = () => {
    adjustDisplay();
  };

  const throttleResizeHandler = useMemo(() => throttle(handleResize, 300));

  useEffect(() => {
    window.addEventListener("resize", throttleResizeHandler);
    return function cleanup() {
      throttleResizeHandler?.cancel();
      window.removeEventListener("resize", throttleResizeHandler);
    };
  });
  const openVertNav = () => {
    setShow((show) => !show);
    adjustDisplay();

  };
  return (
    <nav>
      <div className={`${styles.navbar} ${show ? styles.navBarWhiteBg : undefined}`} id="navbar">
        <span className={styles.openNav} onClick={openVertNav}>
          {show ? <FaTimes className={styles.closeNavIcon} /> : <FaBars />}
        </span>
        <Logo logoText="room" show={show} />

        <div className={styles.linksDiv} id="links">
          <Link href="#">
            <a title="Home">home</a>
          </Link>
          <Link href="#">
            <a title="Shop">shop</a>
          </Link>
          <Link href="#">
            <a title="About">about</a>
          </Link>
          <Link href="#">
            <a title="Contact">contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
