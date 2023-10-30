import { useRouter } from "next/router";
import style from "../styles/footer/Footer.module.scss";
import AboutFooter from "./footerApp/About";
import FooterLink from "./footerApp/FooterLink";
import Weekly from "./footerApp/Weekly";
import ContainerFlex from "./helper/ContainerFlex";
import { useEffect, useState } from "react";
/**
 *
 * @returns {component}
 * @author sayyid salim <mohsalim951@gmail.com>
 */
const Footer = () => {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const route = router.route.includes("detailblog");
    if (route) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [router]);
  return (
    <footer className={`${style.footer} ${hidden ? style.hidden : ""}`}>
      <ContainerFlex id={"footer_container"} className={style.container}>
        <AboutFooter className={style.about} />
        <FooterLink className={style.link} />
        <Weekly className={style.card} />
      </ContainerFlex>
    </footer>
  );
};
export default Footer;
