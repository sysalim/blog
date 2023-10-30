import { useEffect, useState } from "react";
import ContainerFlex from "./helper/ContainerFlex";
import CardContent from "./app/CardContent";
import style from "../styles/Blog.module.scss";
import Button from "./app/Button";
import buttonClass from "../styles/app/Button.module.scss";
import { dataButtonInBlog } from "./blog/data/dataButtonInBlog";
import { loading } from "@/data/dataHome";
import CardBlog from "./blog/cardBlog";
import { dataGlobalBlog } from "./blog/data/dataGlobal";
const BlogPage = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const pathImage = "http://localhost:300/image/";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:300/blog/current");
        const responseData = await response.json();
        if (responseData && responseData.data) {
          setData(responseData.data);
          setLoad(false);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);
  return (
    <section className={style.blog}>
      <h1>{dataGlobalBlog.title}</h1>
      <CardBlog />
      <ContainerFlex className={style.container}>
        {load ? (
          <p>{loading.loadingText}</p>
        ) : (
          data.map((value, index) => (
            <CardContent
              id={value.id}
              key={index}
              pathImage={pathImage + value.image}
              heading={value.title}
              categori={value.categori.categori}
              userName={value.authorName}
              dateTime={value.createdAt.slice(0,10)}
            />
          ))
        )}
      </ContainerFlex>
      <Button
        children={dataButtonInBlog.children}
        className={buttonClass.pageButton}
      />
    </section>
  );
};
export default BlogPage;
