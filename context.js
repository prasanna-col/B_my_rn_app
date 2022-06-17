import { createContext } from "react";

const AppContext = createContext({}); // for use  the provider data 

const AppContextProvider = AppContext.Provider; // this is for provider the data

export { AppContext, AppContextProvider };
