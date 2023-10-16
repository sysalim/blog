const Button = ({ type, children, className }) => {
  return (
    <>
      <button className={className} type={type}>
        {children}
      </button>
    </>
  );
};
export default Button;
