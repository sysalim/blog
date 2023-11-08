import styles from "../../styles/FileInput.module.scss";

export default function FileInput({ change, name }) {
  return (
    <>
      <label htmlFor="file-upload" className={styles.customFileInput}>
        Pilih File
      </label>
      <input
        name={name}
        id="file-upload"
        type="file"
        style={{ display: "none" }}
        onChange={change}
      />
    </>
  );
}
