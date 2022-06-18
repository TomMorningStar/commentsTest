import React from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../../redux/slices/comments.Slice";

import styles from "./Section.module.scss";
const Comment = ({ obj, i, user }) => {
  const dispatch = useDispatch();

  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [timeInfo, setTimeInfo] = React.useState("sec");

  const [ratingCounter, setRatinCounter] = React.useState(0);
  const [openComment, setOpenComment] = React.useState(true);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);
    }, 1000);

    const minuteTimer = window.setInterval(() => {
      setMinutes((prevTime) => prevTime + 1);
      setTimeInfo("minutes");
    }, 60000);

    setTimeout(() => {
      window.clearInterval(timer);
    }, 61000);

    const hourTimer = window.setInterval(() => {
      window.clearInterval(minuteTimer);
      setHour((prevTime) => prevTime + 1);
      setTimeInfo("hours");
    }, 360000);

    return () => {
      window.clearInterval(timer, minuteTimer, hourTimer);
    };
  }, []);

  const arr = () => {
    if (seconds >= 60) {
      return minutes;
    }
    if (minutes >= 60) {
      return hour;
    }

    return seconds;
  };

  const onClickHide = () => {
    setRatinCounter((prev) => prev - 1);
  };

  const onClickOpenComment = () => {
    setOpenComment(false);
  };

  if (ratingCounter === -10) {
    return (
      <>
        {openComment ? (
          <li className={styles.closedComment} onClick={onClickOpenComment}>
            Открыть Комментарий
          </li>
        ) : (
          <li key={`${i}${obj.text}`}>
            <div className={styles.userName}>
              <div>authorName: {obj.login}</div>
              <div>
                {timeInfo} ago:
                {arr()}
              </div>
              <div className={styles.ratingContainer}>
                <div>
                  <button
                    disabled={ratingCounter === 10}
                    onClick={() => setRatinCounter((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <div>{ratingCounter}</div>
                <div>
                  <button
                    disabled={ratingCounter === -10}
                    onClick={onClickHide}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            <img width={20} src={obj.avatar} alt="Аватар" />
            {obj.text}
            {user.email === obj.email && (
              <button onClick={() => dispatch(removeComment(obj.time))}>
                <img
                  className={styles.clearIcon}
                  src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_clear_48px-256.png"
                  alt=""
                />
              </button>
            )}
          </li>
        )}
      </>
    );
  }

  return (
    <li key={`${i}${obj.text}`}>
      <div className={styles.userName}>
        <div>authorName: {obj.login}</div>
        <div>
          {timeInfo} ago:
          {arr()}
        </div>
        <div className={styles.ratingContainer}>
          <div>
            <button
              disabled={ratingCounter === 10}
              onClick={() => setRatinCounter((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div>{ratingCounter}</div>
          <div>
            <button disabled={ratingCounter === -10} onClick={onClickHide}>
              -
            </button>
          </div>
        </div>
      </div>

      <img width={20} src={obj.avatar} alt="Аватар" />
      {obj.text}
      {user.email === obj.email && (
        <button onClick={() => dispatch(removeComment(obj.time))}>
          <img
            className={styles.clearIcon}
            src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_clear_48px-256.png"
            alt=""
          />
        </button>
      )}
    </li>
  );
};

export default Comment;
