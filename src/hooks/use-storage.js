const useLocalStorage = () => {
  const setItem = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return error;
    }
  };

  const getItem = (key) => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return item;
    }
  };

  const removeItem = (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      return error;
    }
  };
  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
