import { createContext, useState } from "react";
import cloneDeep from "lodash/cloneDeep";

const WatchContext = createContext();
export function WatchContextProvider(props) {
  const [watch, setWatch] = useState([]);
  const [date, setDate] = useState("2year");
  const [searchWatch, setSearchWatch] = useState("");
  const [filteredSearchWatch, setFilteredSearchWatch] = useState([]);
  const [graphInfo, setGraphInfo] = useState("");
  const [graphData, setGraphData] = useState("");
  const [sortWatch, setSortWatch] = useState("recent");
  const [notif, setNotif] = useState([]);
  const [allAlerts, setAllAlerts] = useState([]);

  const findDateRange = () => {
    const todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    let todayMonth = todayDate.getMonth() + 1;
    if (todayMonth < 10) {
      todayMonth = `0${todayMonth}`;
    }
    let todayDay = todayDate.getDate();
    if (todayDay < 10) {
      todayDay = `0${todayDay}`;
    }
    let lastYearMonths;
    let lastYear;

    if (date === "year") {
      lastYearMonths = todayMonth;
      lastYear = todayYear - 1;
    }
    if (date === "2year") {
      lastYearMonths = todayMonth;
      lastYear = todayYear - 2;
    }
    if (date === "3year") {
      lastYearMonths = todayMonth;
      lastYear = todayYear - 3;
    }
    if (date === "4year") {
      lastYearMonths = todayMonth;
      lastYear = todayYear - 4;
    }
    if (date === "5year") {
      lastYearMonths = todayMonth;
      lastYear = todayYear - 5;
    }

    return `${lastYear}-${lastYearMonths}-${todayDay}`;
  };

  const sliceDate = (arr) => {
    let copyArr = cloneDeep(arr);
    if (date === "year") {
      return copyArr.slice(0, 52);
    }
    if (date === "2year") {
      return copyArr.slice(0, 104);
    }
    if (date === "3year") {
      return copyArr.slice(0, 156);
    }
    if (date === "4year") {
      return copyArr.slice(0, 208);
    }
    if (date === "5year") {
      return copyArr.slice(0, 260);
    }
  };

  const context = {
    watchlist: watch,
    setWatchlist: setWatch,
    allAlerts,
    setAllAlerts,
    notif,
    setNotif,
    graphInfo,
    setGraphInfo,
    graphData,
    setGraphData,
    date: date,
    setDateRange: setDate,
    getDate: findDateRange,
    sliceDate,
    searchWatch,
    setSearchWatch,
    filteredSearchWatch,
    setFilteredSearchWatch,
    sortWatch: sortWatch,
    setSortWatch: setSortWatch,
  };

  return (
    <WatchContext.Provider value={context}>
      {props.children}
    </WatchContext.Provider>
  );
}

export default WatchContext;
