import { createContext, useState } from "react";

const GlobalContext = createContext();
export function GlobalContextProvider(props) {
  const [night, setNight] = useState(false);
  const [alert, setAlert] = useState(true);

  const apiKeyFinnhubOne = "4c403e64075f1d5283c4aaef93a6fab6";
  const apiKeyFinnhubTwo = "0aba0cc10f259f7f99c4762c7b5aa6ae";
  const newsApiKey = "YXZ3J3Px3aMVE1bSLY9LUOatT6I9arcoxTfQg7wl";
  const websocketKey = "wss://ws.finnhub.io?token=c868vsaad3i9fvji44qg";

  function nightHandler() {
    setNight(!night);
  }

  const context = {
    isNight: night,
    changeNight: nightHandler,
    alert,
    setAlert
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
