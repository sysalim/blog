import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
const Editor = ({ change, placeholder, className }) => {
  const quillRef = useRef(null);
  return (
    <>
      <ReactQuill
        onChange={change}
        placeholder={placeholder}
        id="editor"
        className={className}
      />
    </>
  );
};
export default Editor;
