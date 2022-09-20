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
  }, [show]);

  const handleResize = () => {
    if (window?.innerWidth > 768) {
      setShow(false);
      document.getElementById("links").style.left = "0px";
      document.getElementById("links").style.top = "0px";
      document.getElementById("logo").style.top = "0px";
    } else {
      document.getElementById("links").style.left = "-180px";
      if (show) {
        document.getElementById("links").style.top = "0px";
        document.getElementById("logo").style.top = "-12vh";
      } else {
        document.getElementById("links").style.top = "-12vh";
        document.getElementById("logo").style.top = "0vh";
      }
    }
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
    document.getElementById("links").style.left = "-180px";
    if (show) {
      document.getElementById("links").style.top = "-12vh";
      document.getElementById("logo").style.top = "0";
    } else {
      document.getElementById("links").style.top = "0";
      document.getElementById("logo").style.top = "-12vh";
    }

    setShow((show) => !show);
  };
  return (
    <nav>
      <div className={styles.navbar} id="navbar">
        <span className={styles.openNav} onClick={openVertNav}>
          {show ? <FaTimes /> : <FaBars />}
        </span>
        <Logo logoText="room" show={show} />
        <p>{show}</p>
        <div className={styles.linksDiv} id="links">
          <Link href="#">
            <a title="Careers">home</a>
          </Link>
          <Link href="#">
            <a title="Events">shop</a>
          </Link>
          <Link href="#">
            <a title="Products">about</a>
          </Link>
          <Link href="#">
            <a title="Support">contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
