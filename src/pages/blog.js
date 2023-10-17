import BlogPage from "@/components/Blog";
import HeadComponents from "@/components/Head";
import { useRouter } from "next/router";

const blog = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponents title={router.pathname.replace("/", "")} />
      <BlogPage />
    </div>
  );
};
export default blog;
