import styles from "./Checkbox.module.css";

const CheckBox = ({ select, setSelect }) => {
  return (
    <>
      <input
        className={styles.input}
        type="checkbox"
        checked={select}
        onChange={() => {
          setSelect();
        }}
      />
      <div className={styles.checkMark}></div>
    </>
  );
};

export default CheckBox;
