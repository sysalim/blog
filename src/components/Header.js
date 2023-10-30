import { useEffect, useState } from "react";
import style from "../styles/header/Header.module.scss";
import Logo from "./headerApp/Logo";
import Navigate from "./headerApp/Navigate";
import Search from "./headerApp/Search";
import { useRouter } from "next/router";
import Profile from "./headerApp/Profile";
/**
 *
 * @returns {component}
 * @author sayyid salim <mohsalim951@gmail.com>
 */
const Header = () => {
  const router = useRouter();
  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    // untuk menhiden header
    const route = router.route.includes("detailblog");
    if (route) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [router]);
  return (
    <header
      className={`${style.header} ${fixed ? style.fixed : ""} ${
        hidden ? style.hidden : ""
      }`}>
      <div className={style.container}>
        <Logo className={style.logo} />
        <Navigate className={style.navbar} />
        <Search className={style.search} />
        <Profile />
      </div>
    </header>
  );
};
export default Header;
