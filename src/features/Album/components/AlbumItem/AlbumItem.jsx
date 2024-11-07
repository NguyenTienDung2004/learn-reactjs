import React from "react";
import PropTypes from "prop-types";
import styles from "./albumItem.module.scss";
import classNames from "classnames/bind";

AlbumItem.propTypes = {
  albumItem: PropTypes.object,
};

AlbumItem.defaultProps = {
  albumItem: {},
};

const cx = classNames.bind(styles);
function AlbumItem({ albumItem }) {
  return (
    <li className={cx("album")}>
      <img src={albumItem.thumbNailUrl} className={cx("album_thumbnail")} />
      <h3 className={cx("album_title")}>{albumItem.title}</h3>
    </li>
  );
}

export default AlbumItem;
