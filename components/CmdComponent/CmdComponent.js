import Image from "next/image";
import styles from "./CmdComponent.module.css";
const CmdComponent = ({ handleClick }) => {
  return (
    <div className={styles.cmdComponentContainer}>
      <div onClick={handleClick} id="left" className={styles.leftCmd}>
        <Image src="/images/icon-angle-left.svg" height={24} width={14} />
      </div>
      <div onClick={handleClick} id="right" className={styles.rightCmd}>
        <Image src="/images/icon-angle-right.svg" height={24} width={14} />
      </div>
    </div>
  );
};

export default CmdComponent;
