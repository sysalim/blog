const Button = ({ type, children, className ,click}) => {
  return (
    <>
      <button className={className} type={type} onClick={click}>
        {children}
      </button>
    </>
  );
};
export default Button;
