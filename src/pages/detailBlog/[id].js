import DetailBlog from "@/components/DetailBlog";
import HeadComponents from "@/components/Head";
import { useRouter } from "next/router";

const detailBlog = () => {
  const router = useRouter();
  return (
    <section>
      <HeadComponents
        title={router.pathname.replace("/", "").replace("/[id]", "")}
      />
      <DetailBlog />
    </section>
  );
};
export default detailBlog;
