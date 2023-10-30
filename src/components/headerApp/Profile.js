import Link from "next/link";
import style from "../../styles/header/profile.module.scss";
import { dataProfile } from "./data/profile";
const Profile = () => {
  return (
    <>
      <ul className={style.profile}>
        <li className={style.dropdown}>
          <img src="card.png" alt="" />
          <ul className={style.list}>
            {dataProfile.map((value) => (
              <li>
                <Link href={value.label}>{value.children}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};
export default Profile;
