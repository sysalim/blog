import HeadComponents from "@/components/Head";
import { useRouter } from "next/router";

const contact = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponents title={router.pathname.replace("/", "")} />
      <h1>ini kontack</h1>
    </div>
  );
};
export default contact;
