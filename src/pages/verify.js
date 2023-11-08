import HeadComponents from "@/components/Head";
import Verify from "@/components/Verify";
import { useRouter } from "next/router";
const verify = () => {
  const router = useRouter();
  const title = router.pathname.replace("/", "");
  return (
    <>
      <HeadComponents title={title} />
      <Verify />
    </>
  );
};
export default verify;
