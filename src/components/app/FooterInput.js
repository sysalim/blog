import style from "../../styles/app/Input.module.scss"
const FooterInput = ({ name, placeholder ,className}) => {
  return (
    <input
      type="email"
      name={name}
      placeholder={placeholder}
      className={`${style.footerInput} ${className}`}
    />
  );
};
export default FooterInput;
