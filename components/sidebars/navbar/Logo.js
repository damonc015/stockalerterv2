import classes from "./Logo.module.css";
import Link from "next/link";
import Alert from "./Alert";

const logo = () => {
  return (
    <div className={classes.container}>
          <h1>Stock Alerter</h1>
          <Alert/>
    </div>
  );
};

export default logo;
