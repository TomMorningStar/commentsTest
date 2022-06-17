import React from "react";

import Form from "./components/form";
import Section from "./components/section";

import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./redux/slices/comments.Slice";
import Header from "./components/header/Header";

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.comments.items);
  const users = useSelector((state) => state.users.users);

  const user = JSON.parse(localStorage.getItem("user"));

  const [value, setValue] = React.useState("");

  const addComment = () => {
    if (value) {
      dispatch(
        setItems({
          text: value,
          login: user.login,
          email: user.email,
          avatar: user.avatar,
          lolka: "asdasdasd",
        })
      );
    }
    setValue("");
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="app">
      <Header users={users} />
      <Section items={items} />
      <Form
        onChangeInput={onChangeInput}
        addComment={addComment}
        setValue={setValue}
        value={value}
      />
    </div>
  );
};

export default App;
