import style from "../styles/Form.module.scss";
import Button from "./app/Button";
import FormInput from "./app/formInput";
import Link from "next/link";
import { useState } from "react";
import { dataSendVerification } from "@/data/dataSendVerification";
import { useRouter } from "next/router";
const SendVerification = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (name && email) {
      try {
        const request = await fetch(
          "http://localhost:300/users/sendVerification",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const response = await request.json();
        request.ok ? router.push("/verify") : setError(response.errors);
      } catch (e) {
        setError(e);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className={style.form}>
      <h1>{dataSendVerification.title}</h1>
      <div className={style?.input}>
        {error && <p className={style.error}>{error}</p>}
        <form className={style.filter} onSubmit={handleSubmit.bind(this)}>
          <FormInput
            type={dataSendVerification?.nameType}
            name={dataSendVerification?.nameUser.toLowerCase()}
            placeholder={dataSendVerification?.nameUser}
            change={handleChange.bind(this)}
          />
          <FormInput
            type={dataSendVerification?.emailType}
            name={dataSendVerification?.emailName.toLowerCase()}
            placeholder={dataSendVerification?.emailName}
            change={handleChange.bind(this)}
          />
          <Button
            type={dataSendVerification?.button?.type}
            children={dataSendVerification?.button?.children}
          />
          <Link href={dataSendVerification?.verify?.label}>
            {dataSendVerification?.verify?.children}
          </Link>
        </form>
      </div>
    </div>
  );
};
export default SendVerification;
