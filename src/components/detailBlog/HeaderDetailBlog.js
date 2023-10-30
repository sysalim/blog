import style from "../../styles/app/headerDetailBlog.module.scss";
const HeaderDetailBlog = ({
  categori,
  heading,
  imageUser,
  userName,
  dateTime,
  imageContent,
}) => {
  return (
    <div className={style.header}>
      <button>{categori}</button>
      <h1>{heading}</h1>
      <span>
        <img src={__dirname + imageUser} alt="gambar user" />
        <p>{userName}</p>
        <time dateTime={dateTime}>{dateTime}</time>
      </span>
      <img src={__dirname + imageContent} alt="gambar content" />
    </div>
  );
};
export default HeaderDetailBlog;
