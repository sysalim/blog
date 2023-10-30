import style from "../../styles/app/Input.module.scss";
const Input = ({ placeholder, name, id, change, keyup }) => {
  return (
    <>
      <input
        type="search"
        className={style.myInput}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={change}
        onKeyUp={keyup}
      />
    </>
  );
};

export default Input;
