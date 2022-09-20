import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import CmdComponent from "../components/CmdComponent";
import ImageComp from "../components/ImageComp/ImageComp";
import NavBar from "../components/NavBar";
import Arrow from "../components/Arrow";

let content = [
  {
    title: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
    imageTitle: "hero-1",
  },
  {
    title: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
    imageTitle: "hero-2",
  },

  {
    title: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
    imageTitle: "hero-3",
  },
];

export default function Home() {
  const [contentIndex, setContentIndex] = useState(0);
  const handleClick = (e) => {
    const clicked = e.target.id;
    const contentLen = content.length - 1;
    setContentIndex((contentIndex) =>
      clicked === "right"
        ? contentIndex === contentLen
          ? 0
          : contentIndex + 1
        : contentIndex === 0
        ? contentLen
        : contentIndex - 1
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Room homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />{" "}
      </Head>

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerImageContainer}>
            <ImageComp image={content[contentIndex]} />
            <NavBar />
            <CmdComponent handleClick={handleClick} />
          </div>
          <div className={styles.headerTextContainer}>
            <div>
              <h1 className={styles.headerTitle}>
                {" "}
                {content[contentIndex].title}
              </h1>
              <p className={styles.headerText}> {content[contentIndex].text}</p>
              <a
                className={styles.headerShopNowLinkContainer}
                href="#"
                title="shop now"
              >
                <p className={styles.headerShopNowLink}>SHOP NOW </p>

                <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.aboutDarkImageContainer}></div>

          <div className={styles.aboutTextContainer}>
            <h3 className={styles.aboutTitle}>ABOUT OUR FURNITURE</h3>{" "}
            <p className={styles.headerText}>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className={styles.aboutLightImageContainer}></div>
        </section>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://adelinked.netlify.app" rel="noreferrer">
          Adelinked
        </a>
        .
      </div>
    </div>
  );
}
