import { VscBellDot } from "react-icons/vsc";
import classes from "./Alert.module.css";
import Link from "next/link";

const Alert = () => {
  return (
    <div className={classes.container}>
      <Link href={"/"} passHref>
        <a style={{ width: "inherit", height: "inherit" }}>
          <VscBellDot className={classes.bellAlt}></VscBellDot>
        </a>
      </Link>
    </div>
  );
};

export default Alert;
