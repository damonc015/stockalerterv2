import { createContext, useState, useRef } from "react";

const SearchContext = createContext();
export function SearchContextProvider(props) {
  const [stocklist, setStocklist] = useState("");
  const [selectedStockHome, setSelectedStockHome] = useState("");
  const [selectedStockNews, setSelectedStockNews] = useState("");
  const topPage = useRef(null);
  const scrollTop = () =>
    topPage.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const context = {
    allStocks: stocklist,
    setAllStocks: setStocklist,
    stockHome: selectedStockHome,
    setStockHome: setSelectedStockHome,
    stockNews: selectedStockNews,
    setStockNews: setSelectedStockNews,
    topPageRef: topPage,
    scrollTop: scrollTop,
  };

  return (
    <SearchContext.Provider value={context}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
