import { useContext } from "react";
import classes from "./Step.module.css";
import Image from "next/image";
import GlobalContext from "../../store/globalProvider";

const Step = (props) => {
  const { title, src, desc } = props;
  const { isNight } = useContext(GlobalContext);
  return (
    <div
      className={classes.stepContainer}
      style={isNight ? { borderBottom: "1px solid white" } : null}
    >
      <h2 className={classes.stepTitle}>{title}</h2>
      <div className={classes.imageContainer}>
        <Image src={src} objectFit="contain" layout="fill" />
      </div>
      <p className={classes.stepDescription}>{desc}</p>
    </div>
  );
};

export default Step;
