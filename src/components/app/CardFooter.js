import style from "../../styles/app/cardFooter.module.scss";
import Button from "./Button";
import FooterInput from "./FooterInput";
const CardFooter = ({ title, desc, className }) => {
  return (
    <div className={`${style.cardFooter} ${className}`}>
      <h4>{title}</h4>
      <section>
        <h5>{desc}</h5>
        <FooterInput placeholder={"Your Email"} className={style.footerInput} />
        <Button className={style.button} type={"submit"} children={"Subscribe"} />
      </section>
    </div>
  );
};
export default CardFooter;
