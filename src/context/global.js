const { createContext, useState } = require("react");

const globalData = {
  session: {
    username: "",
    login: "",
    token: "",
  },
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [global, setGlobal] = useState(globalData);

  const updateGlobal = (newGlobal) => {
    setGlobal(newGlobal);
  };

  return (
    <GlobalContext.Provider value={{ global, updateGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
