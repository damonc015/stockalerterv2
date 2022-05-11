import React from "react";
import classes from "./Icon.module.css";
import { useContext } from "react";
import GlobalContext from "../../../store/globalProvider";

const Icon = (props) => {
  const { symbol, name } = props;
  const { isNight } = useContext(GlobalContext);
  return (
    <div
      className={classes.container}
      style={isNight ? {color: "#CACACB" } : null}
    >
      <span className={classes.icon}>{symbol}</span>
      <span className={classes.word}>{name}</span>
    </div>
  );
};

export default Icon;
