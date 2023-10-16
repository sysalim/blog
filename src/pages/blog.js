import HeadComponents from "@/components/Head";
import { useRouter } from "next/router";

const blog = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponents title={router.pathname.replace("/","")} />
      <h1>ini blog</h1>
    </div>
  );
};
export default blog;
