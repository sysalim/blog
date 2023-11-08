const { default: FormInput } = require("./app/formInput");
import DataPosting from "@/data/dataPosting";
import style from "../styles/singlepost.module.scss";
import Editor from "./Editor";
import { useEffect, useState } from "react";
import FileInput from "./app/FileInput";
import Button from "./app/Button";
import OptionInput from "./app/OptionInput";
import useLocalStorage from "@/hooks/use-storage";
const SinglePost = () => {
  const storage = useLocalStorage();
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const handleChangeEditor = (value) => {
    setData({ ...data, content: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const item = storage.getItem("session");
    if (item) {
      const parseItem = JSON.parse(item);
      const { name } = parseItem;
      name === "" ? "" : setData({ ...data, username: name });
    }
    if (Object.keys(data).length > 0 && Object.entries(data).length > 0) {
      const parseItem = JSON.parse(item);
      const { token } = parseItem;
      const formData = new FormData();
      formData.append("title", data?.title);
      formData.append("content", data?.content);
      formData.append("categori", data?.categori);
      formData.append("username", data?.username);
      formData.append("file", file);
      try {
        const request = await fetch("http://localhost:300/blog/create", {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        const response = await request.json();
        request.ok ? setMessage(response.message) : setMessage(response.errors);
      } catch (e) {
        console.log(`gagal mengirim blog ${e}`);
      }
    } else {
      setMessage("mohon isi data anda");
    }
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className={style.singlepost}>
        <h1>{DataPosting.title}</h1>
        <div className={style.config}>
          {message && <p className={style.message}>{message}</p>}
          <FormInput
            name={DataPosting.titleName.toLowerCase()}
            placeholder={DataPosting.titleName}
            change={handleChange}
          />
          <FileInput name={"file"} change={handleFileChange} />
          <OptionInput
            options={DataPosting.select}
            className={style.option}
            name={"categori"}
            change={handleChange}
          />
          <Editor change={handleChangeEditor} />
          <Button
            type={DataPosting.button.type}
            children={DataPosting.button.label}
            className={style.submit}
          />
        </div>
      </div>
    </form>
  );
};

export default SinglePost;
