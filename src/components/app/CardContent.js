import style from "../../styles/app/cardContent.module.scss";
import Link from "next/link";
const CardContent = ({ pathImage, categori, heading }) => {
  return (
    <Link href={"/detailBlog/4"} className={style.link}>
      <div className={style.cardContent}>
        <img src={pathImage} alt="" />
        <p>{categori}</p>
        <h2>{heading}</h2>
      </div>
    </Link>
  );
};
export default CardContent;
