import useLocalStorage from "@/hooks/use-storage";
import { useRouter } from "next/router";
import { useEffect } from "react";
const lugout = () => {
  const storage = useLocalStorage();
  const router = useRouter();
  useEffect(() => {
    const item = storage.getItem("session");
    if (!item.login) {
      router.push("/login");
    }
    const session = {
      username: "",
      login: false,
      token: "",
    };
    item ? storage.setItem("session", JSON.stringify(session)) : "";
    router.push("/login");
  });
  return null;
};

export default lugout;
