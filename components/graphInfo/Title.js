import React, { useContext } from "react";
import { BsCalendar } from "react-icons/bs";
import GlobalContext from "../../store/globalProvider";
import SearchContext from "../../store/searchProvider";
import WatchContext from "../../store/watchlistProvider";
import classes from "./Title.module.css";

const Title = () => {
  const { isNight } = useContext(GlobalContext);
  const { stockHome } = useContext(SearchContext);
  const { date, setDateRange } = useContext(WatchContext);

  function changeDate(x) {
    setDateRange(x);
  }

  if (!stockHome) {
    return (
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <h2></h2>
        </div>
        <div className={classes.date}>
          <BsCalendar className={classes.calendar}></BsCalendar>
          <form>
            <select
              value={date}
              onChange={(event) => changeDate(event.target.value)}
              style={isNight ? { color: "white" } : { color: "black" }}
            >
              <option value="year">1Y</option>
              <option value="2year">2Y</option>
              <option value="3year">3Y</option>
              <option value="4year">4Y</option>
              <option value="5year">5Y</option>
            </select>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.titleContainer}>
      <div className={classes.title}>
        <h2>{stockHome.name}</h2>
      </div>
      <div className={classes.date}>
        <BsCalendar className={classes.calendar}></BsCalendar>
        <form>
          <select
            value={date}
            onChange={(event) => changeDate(event.target.value)}
            style={isNight ? { color: "white" } : { color: "black" }}
          >
              <option value="year">1Y</option>
              <option value="2year">2Y</option>
              <option value="3year">3Y</option>
              <option value="4year">4Y</option>
              <option value="5year">5Y</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Title;
