import { VscBell, VscBellDot } from "react-icons/vsc";
import { useContext } from "react";
import GlobalContext from "../../../store/globalProvider";
import classes from "./Alert.module.css";

const Alert = () => {
  const { alert } = useContext(GlobalContext);
  return (
    <div className={classes.container}>
      {alert ? (
        <VscBellDot className={classes.bellAlt}></VscBellDot>
      ) : (
        <VscBell className={classes.bell}></VscBell>
      )}
    </div>
  );
};

export default Alert;
