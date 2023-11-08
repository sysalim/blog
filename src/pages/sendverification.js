import HeadComponents from "@/components/Head";
import SendVerification from "@/components/SendVerication";
import { useRouter } from "next/router";

const sendVerification = () => {
  const router = useRouter();
  const title = router.pathname.replace("/", "");
  return (
    <>
      <HeadComponents title={title} />
      <SendVerification />
    </>
  );
};
export default sendVerification;
