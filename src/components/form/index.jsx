import React from "react";

import styles from "./Form.module.scss";

const Form = ({ value, onChangeInput, addComment }) => {
  return (
    <div className={styles.form}>
      <input
        placeholder="Введите комментарий"
        onChange={onChangeInput}
        value={value}
        type="text"
      />
      <button onClick={addComment}>добавить</button>
    </div>
  );
};

export default Form;
