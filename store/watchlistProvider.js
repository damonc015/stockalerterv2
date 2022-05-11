import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const WatchContext = createContext();
export function WatchContextProvider(props) {
  const [watch, setWatch] = useState([
    { name: "dog", symbol: "DOG", price: 2, id: uuidv4() },
    { name: "cat", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "cab", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "bird", symbol: "BIRD", price: 2, id: uuidv4() },
    { name: "dog", symbol: "DOG", price: 2, id: uuidv4() },
    { name: "cat", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "cab", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "bird", symbol: "BIRD", price: 2, id: uuidv4() },
    { name: "dog", symbol: "DOG", price: 2, id: uuidv4() },
    { name: "cat", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "cab", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "bird", symbol: "BIRD", price: 2, id: uuidv4() },
    { name: "dog", symbol: "DOG", price: 2, id: uuidv4() },
    { name: "cat", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "cab", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "bird", symbol: "BIRD", price: 2, id: uuidv4() },
    { name: "dog", symbol: "DOG", price: 2, id: uuidv4() },
    { name: "cat", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "cab", symbol: "CAT", price: 2, id: uuidv4() },
    { name: "bird", symbol: "BIRD", price: 2, id: uuidv4() },
  ]);
  const [date, setDate] = useState("3month");
  const [searchWatch, setSearchWatch] = useState("");
  const [filteredSearchWatch, setFilteredSearchWatch] = useState([]);
  const [sortWatch, setSortWatch] = useState("recent");

  // Date Range for Api
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
    if (date === "month") {
      if (todayMonth - 1 <= 0) {
        lastYearMonths = todayMonth - 1 + 12;
        lastYear = todayYear - 1;
      } else {
        lastYearMonths = todayMonth - 1;
        lastYear = todayYear;
      }
    }
    if (date === "3month") {
      if (todayMonth - 3 <= 0) {
        lastYearMonths = todayMonth - 3 + 12;
        lastYear = todayYear - 1;
      } else {
        lastYearMonths = todayMonth - 3;
        lastYear = todayYear;
      }
    }
    if (date === "6month") {
      if (todayMonth - 6 <= 0) {
        lastYearMonths = todayMonth - 6 + 12;
        lastYear = todayYear - 1;
      } else {
        lastYearMonths = todayMonth - 6;
        lastYear = todayYear;
      }
    }
    if (date === "year") {
      lastYearMonths = todayMonth;
      lastYear = todayYear - 1;
    }
    return `from=${lastYear}-${lastYearMonths}-${todayDay}&to=${todayYear}-${todayMonth}-${todayDay}`;
  };

  const context = {
    watchlist: watch,
    setWatchlist: setWatch,
    date: date,
    setDateRange: setDate,
    getDate: findDateRange,
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
