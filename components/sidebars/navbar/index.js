import classes from "./index.module.css";
import Logo from "./Logo";
import IconList from "./IconList";
import { Fragment } from "react";
import GlobalContext from "../../../store/globalProvider";
import { useContext } from "react";

const Navbar = (props) => {
  const {isNight} = useContext(GlobalContext);
  return (
    <Fragment>
      <nav
        className={classes.container}
        style={
          isNight ? { backgroundColor: "#424242", color: "#CACACB" } : null
        }
      >
        <Logo></Logo>
        <IconList></IconList>
      </nav>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navbar;
