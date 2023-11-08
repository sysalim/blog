import style from "../../styles/app/inputLogin.module.scss";
const FormInput = ({ name, change, type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={change}
        placeholder={placeholder}
        className={style.input}
      />
    </>
  );
};

export default FormInput;
