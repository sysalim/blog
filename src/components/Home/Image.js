const ImageHome = ({ path, altName, className }) => {
  return (
    <>
      <img className={className} src={path} alt={altName} />
    </>
  );
};
export default ImageHome;
