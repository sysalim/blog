import CardContent from "@/components/app/CardContent";
import ContainerFlex from "@/components/helper/ContainerFlex";
import { loading } from "@/data/dataHome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const search = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const pathImage = "http://localhost:300/image/";
  useEffect(() => {
    const getData = async () => {
      const { query } = router;
      const keyword = query.q;
      if (keyword) {
        const response = await fetch(
          "http://localhost:300/search?q=" + keyword
        );
        const responseData = await response.json();
        if (responseData && responseData.data) {
          setData(responseData.data);
          setLoad(false);
        }
      } else {
        router.back();
      }
    };
    getData();
  }, []);
  return (
    <div>
      <ContainerFlex>
        {load ? (
          <p>{loading.loadingText}</p>
        ) : (
          data.map((value, index) => (
            <CardContent
              id={value.id}
              key={index}
              heading={value.title}
              userImage={pathImage + value.image}
              pathImage={pathImage + value.image}
              userName={value.authorName}
              categori={value.categori.categori}
              dateTime={value.createdAt.slice(0, 10)}
            />
          ))
        )}
      </ContainerFlex>
    </div>
  );
};
export default search;
