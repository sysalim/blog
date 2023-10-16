import HeadComponents from "@/components/Head";
import { useRouter } from "next/router";

const detailBlog = () => {
  const router = useRouter();
  return (
    <section>
      <HeadComponents
        title={router.pathname.replace("/", "").replace("/[id]", "")}
      />
      <h1>ini detail blog</h1>
    </section>
  );
};
export default detailBlog;
