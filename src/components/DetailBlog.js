import { useEffect, useRef, useState } from "react";
import style from "../styles/DeatilBlog.module.scss";
import HeaderDetailBlog from "./detailBlog/HeaderDetailBlog";
import { useRouter } from "next/router";
import { loading } from "@/data/dataHome";
const DetailBlog = () => {
  const router = useRouter();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const pathImage = "http://localhost:300/image/";
  const { id } = router.query;
  useEffect(() => {
    const getData = async () => {
      if (id) {
        const response = await fetch(
          "http://localhost:300/blog/current/id/" + id
        );
        const responseData = await response.json();
        if (response.ok && responseData.data) {
          setData(responseData.data);
          setLoad(false);
          console.log(responseData.data);
        }
      }
    };
    getData();
    console.log(data);
  }, [id]);
  return (
    <div className={style.blog_detail}>
      {load ? (
        <p>{loading.loadingText}</p>
      ) : (
        <>
          <HeaderDetailBlog
            categori={data.categori.categori}
            heading={data.title}
            imageUser={pathImage + data.image}
            userName={"sayyid salim"}
            dateTime={"20 agustus 2020"}
            imageContent={pathImage + data.image}
          />
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </>
      )}
    </div>
  );
};
export default DetailBlog;
