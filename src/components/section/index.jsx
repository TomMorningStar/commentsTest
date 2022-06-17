import React from "react";

import styles from "./Section.module.scss";

const Section = ({ items }) => {
  return (
    <section>
      <ol className={styles.rounded}>
        {items.map((obj, i) => {
          return (
            <li key={i}>
              <div className={styles.userName}>
                <div>authorName: {obj.login}</div>
                <div>data</div>
              </div>
              <img width={20} src={obj.avatar} alt="Аватар" />
              {obj.text}
              <button>
                <img
                  className={styles.clearIcon}
                  src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_clear_48px-256.png"
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Section;
