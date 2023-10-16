import style from "../../styles/app/Input.module.scss";
const Input = ({ placeholder, name, id }) => {
  return (
    <>
      <input
        type="search"
        className={style.myInput}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </>
  );
};

export default Input;
