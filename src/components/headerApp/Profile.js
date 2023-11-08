import Link from "next/link";
import style from "../../styles/header/profile.module.scss";
import { dataProfile } from "./data/profile";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/use-storage";
const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const storage = useLocalStorage();
  useEffect(() => {
    const item = storage.getItem("session");
    item.isLogin ? setIsLogin(true) : setIsLogin(false);
  });
  return (
    <>
      <ul className={style.profile}>
        <li className={style.dropdown}>
          <img src="card.png" alt="" />
          <ul className={style.list}>
            {dataProfile.map((value, index) => {
              return (
                <li key={index}>
                  <Link href={value.label}>{value.children}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </>
  );
};
export default Profile;
