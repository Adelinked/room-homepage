import styles from "./ImageComp.module.css";
const ImageComp = ({ image }) => {

  return (
    <img
      id="image"
      className={styles.image}
      src={`./images/desktop-image-${image.imageTitle}.jpg`}
      alt={`${image.imageTitle} image`}
    />
  );
};

export default ImageComp;
