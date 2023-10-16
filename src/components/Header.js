import { useEffect, useState } from "react";
import style from "../styles/header/Header.module.scss";
import Logo from "./headerApp/Logo";
import Navigate from "./headerApp/Navigate";
import Search from "./headerApp/Search";
const Header = () => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
  }, []);
  return (
    <header className={`${style.header} ${fixed ? style.fixed : ""}`}>
      <div className={style.container}>
        <Logo className={style.logo} />
        <Navigate className={style.navbar} />
        <Search className={style.search} />
      </div>
    </header>
  );
};
export default Header;
