import ImageHome from "./Home/Image";
import { dataImage } from "./Home/data/Image";
import style from "../styles/Home.module.scss";
import ContainerFlex from "./helper/ContainerFlex";
import CardContent from "./app/CardContent";
import { useEffect, useState } from "react";
import Button from "./app/Button";
import buttonClass from "../styles/app/Button.module.scss";
import { dataButtonInHome } from "./Home/data/dataButtonInHome";
import { loading } from "@/data/dataHome";
import { useRouter } from "next/router";
/**
 * @returns @components
 * @author sayyid salim <mohsalim951@gmail.com>
 */
const HomePage = () => {
  const [data, setData] = useState([]);
  const [load, setLoading] = useState(true);
  const pathImage = "http://localhost:300/image/";
  const router = useRouter();
  const push = () => {
    router.push("/blog");
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:300/blog/current");
        const responseData = await response.json();
        if (responseData && responseData.data) {
          setData(responseData.data);
          setLoading(false);
          console.log(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);
  return (
    <div className={style.home}>
      <ImageHome
        className={style.imageCard}
        path={dataImage.path}
        altName={dataImage.alt}
      />
      <h1>latest post</h1>
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
              dateTime={value.createdAt.slice(0, 10)}
            />
          ))
        )}
      </ContainerFlex>
      <Button
        children={dataButtonInHome.children}
        className={buttonClass.pageButton}
        click={push}
      />
    </div>
  );
};
export default HomePage;
