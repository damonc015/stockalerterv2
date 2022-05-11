import { MdNightlight } from "react-icons/md";
import classes from "./Night.module.css";
import GlobalContext from "../../../store/globalProvider";
import { useContext } from "react";

const Night = () => {
  const globalCtx = useContext(GlobalContext);
  return (
    <div className={classes.nightContainer}>
      <MdNightlight className={classes.moon}></MdNightlight>
      <label className={classes.toggleContainer}>
        <input
          className={classes.toggle}
          type="checkbox"
          onClick={globalCtx.changeNight}
        />
        <span className={classes.toggleBackground}></span>
      </label>
    </div>
  );
};

export default Night;
