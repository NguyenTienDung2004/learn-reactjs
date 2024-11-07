import React from "react";
import PropTypes from "prop-types";
import styles from "./albumList.module.scss";
import classNames from "classnames/bind";
import AlbumItem from "../AlbumItem";
AlbumList.propTypes = {
  albumList: PropTypes.array,
};

AlbumList.defaultProps = {
  albumList: [],
};

const cx = classNames.bind(styles);
function AlbumList({ albumList }) {
  return (
    <ul className={cx("album_list")}>
      {albumList.map((albumItem) => (
        <AlbumItem key={albumItem.id} albumItem={albumItem} />
      ))}
    </ul>
  );
}

export default AlbumList;
