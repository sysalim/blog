import { dataLogin } from "@/data/dataLogin";
import style from "../styles/Form.module.scss";
import Button from "./app/Button";
import FormInput from "./app/formInput";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/use-storage";
const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const storage = useLocalStorage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch("http://localhost:300/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await request.json();
      const session = {
        name: formData.username,
        login: true,
        token: response.token,
      };
      request.ok
        ? storage.setItem("session", JSON.stringify(session))
        : setError(response.errors);
        router.push("/singlepost")
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const item = storage.getItem("session");
    if (item) {
      const parseItem = JSON.parse(item);
      if (parseItem.login) {
        router.push("/singlepost");
      }
    }
  }, []);
  return (
    <div className={style.form}>
      <h1>{dataLogin.title}</h1>
      <div className={style?.input}>
        {error && <p className={style.error}>{error}</p>}
        <form className={style.filter} onSubmit={handleSubmit.bind(this)}>
          <FormInput
            type={dataLogin?.typeUser}
            name={dataLogin?.nameUser.toLowerCase()}
            placeholder={dataLogin?.nameUser}
            change={handleChange.bind(this)}
          />
          <FormInput
            type={dataLogin?.typePassword}
            name={dataLogin?.typePassword}
            placeholder={dataLogin.namePassword}
            change={handleChange.bind(this)}
          />
          <Button
            type={dataLogin?.button?.type}
            children={dataLogin?.button?.children}
          />
          <Link href={dataLogin?.registrasi?.label}>
            {dataLogin?.registrasi?.children}
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
