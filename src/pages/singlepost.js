import HeadComponents from "@/components/Head";
import SinglePost from "@/components/SinglePost";
import useLocalStorage from "@/hooks/use-storage";
import { useRouter } from "next/router";
const { useEffect } = require("react");
const singlePost = () => {
  const storage = useLocalStorage();
  const router = useRouter();
  const title = router.pathname.replace("/", "");
  useEffect(() => {
    const item = storage.getItem("session");
    if (item) {
      const parseItem = JSON.parse(item);
      parseItem.login ? "" : router.push("/login");
    }
  }, []);
  return (
    <>
      <HeadComponents title={title} />
      <SinglePost />
    </>
  );
};

export default singlePost;
