import style from "../../styles/app/cardBlog.module.scss";
import { dataCardContentButton } from "./data/dataButtonInBlog";
import { dataCardBlog } from "./data/dataCard";
const CardBlog = () => {
  return (
    <div className={style.card}>
      <div className={style.container}>
        <button>{dataCardContentButton.children}</button>
        <h1>{dataCardBlog.title}</h1>
      </div>
    </div>
  );
};
export default CardBlog;
