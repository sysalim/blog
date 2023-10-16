import style from "../styles/footer/Footer.module.scss";
import CardFooter from "./app/CardFooter";
import AboutFooter from "./footerApp/About";
import FooterLink from "./footerApp/FooterLink";
import Weekly from "./footerApp/Weekly";
import ContainerFlex from "./helper/ContainerFlex";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <ContainerFlex id={"footer_container"} className={style.container}>
        <AboutFooter className={style.about} />
        <FooterLink className={style.link} />
        <Weekly className={style.card} />
      </ContainerFlex>
    </footer>
  );
};
export default Footer;
