import React, { useState, useContext, useRef } from "react";
import { Avatar } from "@material-tailwind/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  FaRegHeart,
  FaRegComment,
  FaRegShareSquare,
  FaHeart,
} from "react-icons/fa";
import AuthContext from "../context/authContext";
import useAxios from "../utils/useAxios";
import ImageListComp from "./ImageList";

const Post = ({ post_data }) => {
  const { user } = useContext(AuthContext);

  let [like, setLike] = useState(() =>
    post_data ? post_data.likes.includes(user?.user_id) : false
  );

  const tempLikes = useRef(post_data?.likes);

  let api = useAxios();

  const full_name =
    post_data.author_first_name + " " + post_data.author_last_name;
  var date = new Date(`${post_data.date_posted} UTC`);
  date.toString();
  date = date + "";
  const arr = date.split(" ");

  const month = arr[1];
  const day = Number(arr[2]);
  const year = Number(arr[3]);

  let posted = `${month} ${day} ${year}`;

  let updateLikes = async () => {
    let formData = new FormData();

    for (let index = 0; index < tempLikes.current.length; index++) {
      const element = tempLikes.current[index];
      formData.append("likes", element);
    }
    let response = await api.patch(`/api/posts/${post_data?.id}/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  let handleClick = () => {
    if (like) {
      let arr = [];
      for (let i = 0; i < tempLikes.current.length; i++) {
        if (tempLikes.current[i] !== user?.user_id) {
          arr.push(tempLikes.current[i]);
        }
      }
      tempLikes.current = arr;
      setLike(false);
      updateLikes();
    } else {
      tempLikes.current = [...tempLikes.current, user?.user_id];
      setLike(true);
      updateLikes();
    }
  };
  let images = [];
  if (post_data?.images.length > 0) {
    for (let index = 0; index < post_data?.images.length; index++) {
      const element = post_data?.images[index];
      images.push(element.image);
    }
  }

  return (
    <div className="border-b p-2">
      <div className="flex">
        <div className="basis-11/12 flex">
          <img
            src={post_data?.author_profile_pic}
            alt="avatar"
            style={{ height: "50px", width: "50px" }}
            className="rounded-full"
          />
          <div className="my-auto mx-2 font-semibold">{full_name}</div>
          <div className="text-gray-500 my-auto text-sm font-semibold">
            @{post_data?.author_username} . {posted}
          </div>
        </div>
        <div>
          <MoreVertIcon className="ml-10" />
        </div>
      </div>
      <div className="px-4 py-2 ml-1">
        <h5>{post_data?.title}</h5>
        <p className="my-2">{post_data?.content}</p>
        <ImageListComp itemData={images} />
      </div>
      <div className="flex px-1 mt-3">
        {like ? (
          <FaHeart
            className="text-custom-color-lavender text-xl mx-3 cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <FaRegHeart
            className="text-xl mx-3 cursor-pointer"
            onClick={handleClick}
          />
        )}
        <FaRegComment className="text-xl mx-3" />
        <FaRegShareSquare className="text-xl mx-3" />
      </div>
      <small className="ml-3">{tempLikes.current.length} likes</small>
    </div>
  );
};

export default Post;
