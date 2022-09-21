import Image from "next/image";
import styles from "./CmdComponent.module.css";
const CmdComponent = ({ handleClick }) => {
  return (
    <div className={styles.cmdComponentContainer}>
      <div
        onClick={handleClick}
        id="left"
        className={styles.leftCmd}
        tabIndex="0"
      >
        <Image
          src="/images/icon-angle-left.svg"
          height={24}
          width={14}
          alt="angle-left"
        />
      </div>
      <div
        onClick={handleClick}
        id="right"
        className={styles.rightCmd}
        tabIndex="0"
      >
        <Image
          src="/images/icon-angle-right.svg"
          height={24}
          width={14}
          alt="angle-right  "
        />
      </div>
    </div>
  );
};

export default CmdComponent;
