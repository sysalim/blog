import style from "../styles/Form.module.scss";
import Button from "./app/Button";
import FormInput from "./app/formInput";
import Link from "next/link";
import { useState } from "react";
import { dataSendVerification } from "@/data/dataSendVerification";
import { dataVerify } from "@/data/dataVerify";
const Verify = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch("http://localhost:300/users/verifyCode", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await request.json();
      if (request.ok) {
        setSucces(response.message);
      } else {
        setSucces(response.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <div className={style.form}>
      <h1>{dataVerify.title}</h1>
      <div className={style?.input}>
        {error && <p className={style.error}>{error}</p>}
        {succes && <p className={style.succes}>{succes}</p>}
        <form className={style.filter} onSubmit={handleSubmit.bind(this)}>
          <FormInput
            type={dataVerify?.userType}
            name={dataVerify?.nameUser.toLowerCase()}
            placeholder={dataVerify?.nameUser}
            change={handleChange.bind(this)}
          />
          <FormInput
            type={dataVerify?.emailName.toLowerCase()}
            name={dataVerify?.emailName.toLowerCase()}
            placeholder={dataVerify?.emailName}
            change={handleChange.bind(this)}
          />
          <FormInput
            type={dataVerify?.passwordName.toLowerCase()}
            name={dataVerify?.passwordName.toLowerCase()}
            placeholder={dataVerify?.passwordName}
            change={handleChange.bind(this)}
          />
          <FormInput
            type={dataVerify?.code?.type}
            name={dataVerify?.code?.name.toLowerCase()}
            placeholder={dataVerify?.code?.name}
            change={handleChange.bind(this)}
          />
          <Button
            type={dataVerify?.button?.type}
            children={dataVerify?.button?.children}
          />
          <Link href={dataSendVerification?.verify?.label}>
            {dataSendVerification?.verify?.children}
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Verify;
