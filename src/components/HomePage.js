import ImageHome from "./Home/Image";
import { dataImage } from "./Home/data/Image";
import style from "../styles/Home.module.scss";
import { dataCardContent, dataContent } from "./Home/data/dataContent";
import ContainerFlex from "./helper/ContainerFlex";
import CardContent from "./app/CardContent";
import { useEffect, useState } from "react";
/**
 * 
 * @returns @components
 * @author sayyid salim <mohsalim951@gmail.com>
 */
const HomePage = () => {
  const [data, setdata] = useState([]);
  const [load, setLoading] = useState(true);
  useEffect(() => {
    const getData = () => {
      setdata(dataCardContent);
      setLoading(false);
    };
    getData();
  }, [data]);
  return (
    <section className={style.home}>
      <ImageHome
        className={style.imageCard}
        path={dataImage.path}
        altName={dataImage.alt}
      />
      <h1>{dataContent.title}</h1>
      <ContainerFlex className={style.container}>
        {load ? (
          <p>loading....</p>
        ) : (
          data.map((value, index) => (
            <CardContent
              className={style.cardContent}
              key={index}
              pathImage={value.image}
              categori={value.categori}
              heading={value.heading}
            />
          ))
        )}
      </ContainerFlex>
    </section>
  );
};
export default HomePage;
