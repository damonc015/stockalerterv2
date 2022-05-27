import { createContext, useState, useRef } from "react";

const SearchContext = createContext();
export function SearchContextProvider(props) {
  const [stocklist, setStocklist] = useState([]);
  const [selectedStockHome, setSelectedStockHome] = useState("");
  const [selectedStockNews, setSelectedStockNews] = useState("");

  const context = {
    allStocks: stocklist,
    setAllStocks: setStocklist,
    stockHome: selectedStockHome,
    setStockHome: setSelectedStockHome,
    stockNews: selectedStockNews,
    setStockNews: setSelectedStockNews,
  };

  return (
    <SearchContext.Provider value={context}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
