import React from "react";
import Comment from "./Comment";

import styles from "./Section.module.scss";

const Section = ({ items, user }) => {
  return (
    <section>
      <ol className={styles.rounded}>
        {items?.map((obj, i) => {
          return (
            <Comment key={`${i}${obj.text}`} user={user} obj={obj} i={i} />
          );
        })}
      </ol>
    </section>
  );
};

export default Section;
