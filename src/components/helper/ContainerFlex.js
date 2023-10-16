import style from "../../styles/helper/ContainerFlex.module.scss";
const ContainerFlex = ({ children, id,className }) => {
  return (
    <div id={id} className={`${style.container} ${className}`}>
      {children}
    </div>
  );
};
export default ContainerFlex;
