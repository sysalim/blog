import HeadComponents from "@/components/Head";
import Login from "@/components/Login";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const title = router.pathname.replace("/", "");
  return (
    <>
      <HeadComponents title={title} />
      <Login />
    </>
  );
};
export default login;
