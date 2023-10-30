import { useEffect, useState } from "react";
import style from "../styles/DeatilBlog.module.scss";
import HeaderDetailBlog from "./detailBlog/HeaderDetailBlog";
import { dataDetailBlog } from "@/data/dataBlog";
import { useRouter } from "next/router";
import { loading } from "@/data/dataHome";
const DetailBlog = () => {
  const router = useRouter();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      const foundData = dataDetailBlog.find((item) => item.id === parseInt(id));
      setData(foundData);
      setLoad(false);
    }
    console.log(data);
  }, [id]);
  return (
    <div className={style.blog_detail}>
      {load ? (
        <p>{loading.loadingText}</p>
      ) : (
        <>
          <HeaderDetailBlog
            categori={data.categori}
            heading={data.title}
            imageUser={"Union.png"}
            userName={"sayyid salim"}
            dateTime={"20 agustus 2020"}
            imageContent={data.image}
          />
          <div className={style.content}>{data.content}</div>
        </>
      )}
    </div>
  );
};
export default DetailBlog;
