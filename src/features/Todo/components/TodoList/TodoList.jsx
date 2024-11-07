import React from "react";
import PropTypes from "prop-types";
import styles from "./todoList.module.scss";
import classNames from "classnames/bind";
import TodoItem from "../TodoItem";
TodoList.propTypes = {
  listTask: PropTypes.array,
};

TodoList.defaultProps = {
  listTask: [],
};

const cx = classNames.bind(styles);
function TodoList({ listTask }) {
  return (
    <>
      {listTask.map((taskItem) => (
        <TodoItem key={taskItem.id} taskItem={taskItem} />
      ))}
    </>
  );
}

export default TodoList;
