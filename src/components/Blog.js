import { useEffect, useState } from "react";
import { dataCardContent } from "./Home/data/dataContent";
import ContainerFlex from "./helper/ContainerFlex";
import CardContent from "./app/CardContent";
import style from "../styles/Blog.module.scss";
const BlogPage = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setData(dataCardContent);
    setLoad(false);
  }, [data]);
  return (
    <section>
      <ContainerFlex className={style.container}>
        {load ? (
          <p>loading...</p>
        ) : (
          data.map((value) => (
            <CardContent
              pathImage={value.image}
              heading={value.heading}
              categori={value.categori}
            />
          ))
        )}
      </ContainerFlex>
    </section>
  );
};
export default BlogPage;
