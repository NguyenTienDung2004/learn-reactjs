import React from "react";
import PropTypes from "prop-types";
import styles from "./todoItem.module.scss";
import classNames from "classnames/bind";

TodoItem.propTypes = {
  taskItem: PropTypes.object.isRequired,
};

const cx = classNames.bind(styles);
function TodoItem({ taskItem }) {
  return (
    <>
      <div>{taskItem.title}</div>
    </>
  );
}

export default TodoItem;
