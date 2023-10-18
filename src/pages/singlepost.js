const { useState } = require("react");

const singlePost = () => {
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    fetch("http://localhost:3000/api/post", {
      method: "POST",
      body: data,
    });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">kirim</button>
    </form>
  );
};

export default singlePost;
