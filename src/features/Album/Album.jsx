import React from "react";
import PropTypes from "prop-types";
import styles from "./album.module.scss";
import classNames from "classnames/bind";
import AlbumList from "./components/AlbumList";
Album.propTypes = {};

const cx = classNames.bind(styles);
function Album() {
  const albumList = [
    {
      id: 1,
      title: "Vững tinh thần, vượt qua covid",
      thumbNailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/f/2/00f236e9081798d9144f7237e615e29b.jpg",
    },
    {
      id: 2,
      title: "C-Pop thư giãn",
      thumbNailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/d/6/2/8d626208fbd4b243f0f972dd16388aaa.jpg",
    },
    {
      id: 3,
      title: "Nhạc trẻ gây nghiện",
      thumbNailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/2/2/d/422d60b5c05ca63a21c344397a5d136f.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default Album;
