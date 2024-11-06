import React from "react";
import PropTypes from "prop-types";
import styles from "./todo.module.scss";
import classNames from "classnames/bind";
import TodoList from "./components/TodoList";
Todo.propTypes = {};

const cx = classNames.bind(styles);
function Todo(props) {
  const listTask = [
    {
      id: 1,
      title: "eat",
    },
    {
      id: 2,
      title: "sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];
  return (
    <>
      <TodoList listTask = {listTask}/>
    </>
  );
}

export default Todo;
