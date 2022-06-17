import React from "react";

import styles from "./Header.module.scss";

const Header = ({ users }) => {
  const [open, setOpen] = React.useState(false);
  const [loginValidation, setLoginValidation] = React.useState(false);
  const [emailValidation, setEmailValidation] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");

  const findUser = users.find((obj) => {
    return obj.login === login;
  });

  const findEmail = users.find((obj) => {
    return obj.email === email;
  });

  const onChangeEmailValidation = () => {
    var req = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (req.test(email) === false) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const onClickSignIn = () => {
    if (findUser && findEmail) {
      setLoginValidation(false);
      localStorage.setItem("user", JSON.stringify(findEmail));
      setOpen(false);
    } else {
      setLoginValidation(true);
    }

    onChangeEmailValidation();
  };

  return (
    <div className={styles.root}>
      <button onClick={() => setOpen(true)}>Вход</button>

      {open && (
        <div className={styles.windowForm}>
          <div className={styles.form}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Введите email"
              type="text"
            />
            {loginValidation && <p>Неправильный логин или емейл</p>}
            {emailValidation && <p>Неправильный тип емейла</p>}
            <input
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              placeholder="Введите имя"
              type="text"
            />
            {loginValidation && <p>Неправильный логин или емейл</p>}
          </div>
          <div>
            <button onClick={onClickSignIn} className={styles.registrButton}>
              войти
            </button>
            <button
              onClick={(e) => setOpen(false)}
              className={styles.registrButton}
            >
              закрыть
            </button>
            <div className={styles.login}>
              <div>login: Tamerlan</div>
              <div>email: tamerlan.musaev@mail.ru</div>
            </div>
            <div className={styles.login}>
              <div>login: Tommy</div>
              <div>email: tommy.musaev@mail.ru</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
