import style from "../../styles/app/cardContent.module.scss";
import Link from "next/link";
const CardContent = ({
  pathImage,
  categori,
  heading,
  userImage,
  userName,
  dateTime,
  id,
}) => {
  return (
    <Link href={`/detailblog/${id}`} className={style.link}>
      <div className={style.cardContent}>
        <img src={pathImage} alt="image content" />
        <p>{categori}</p>
        <h2>{heading}</h2>
        <span>
          <img src={userImage} alt="" />
          <p>{userName}</p>
          <time dateTime={dateTime}>{dateTime}</time>
        </span>
      </div>
    </Link>
  );
};
export default CardContent;
