import { createContext, useState } from "react";
import { useSession, getSession } from "next-auth/client";

const GlobalContext = createContext();
export function GlobalContextProvider(props) {
  const [night, setNight] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  const websocketKey = "wss://ws.finnhub.io?token=c868vsaad3i9fvji44qg";

  function nightHandler() {
    setNight(!night);
  }

  const context = {
    isNight: night,
    changeNight: nightHandler,
    firstTime, 
    setFirstTime
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
