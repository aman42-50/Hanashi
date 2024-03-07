import React, { useContext, useRef, useState } from 'react'

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  FaRegHeart,
  FaRegComment,
  FaRegShareSquare,
  FaHeart,
} from "react-icons/fa";

import AuthContext from '../context/AuthContext';
import useAxios from '../hooks/useAxios';

const Post = (post_data) => {

  const {user} = useContext(AuthContext)

  let data = post_data?.post_data

  let [like, setLike] = useState(() =>
    data ? data.likes.includes(user?.user_id) : false
  );

  const likes_count = useRef(data.likes.length)

  let api = useAxios()

  let updateLikes = async (request_data) => {

    let response = await api.patch(`/api/posts/${data?.id}/`, request_data)
    .then((response) => {
      // Success
    })
    .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
  }

  let handleClick = () => {
    let formData = new FormData();

    if (like) {
      formData.append("disliked", user?.user_id)
      likes_count.current = likes_count.current - 1
    }else{
      formData.append("liked", user?.user_id)
      likes_count.current = likes_count.current + 1
    }

    updateLikes(formData)

    setLike(!like)
  }

  const full_name =
    data.author_first_name + " " + data.author_last_name;
  var date = new Date(`${data.date_posted} UTC`);
  date.toString();
  date = date + "";
  const arr = date.split(" ");

  const month = arr[1];
  const day = Number(arr[2]);
  const year = Number(arr[3]);

  let posted = `${month} ${day} ${year}`;

  let image = null
  if (data.images.length > 0) {
    image = data.images[0].image
  }

  return (
    <div className='w-full rounded-xl bg-color-container mt-4 p-4'>
      <div className="flex">
        <div className="basis-11/12 flex">
          <img
            src={data?.author_profile_pic}
            alt="avatar"
            style={{ height: "50px", width: "50px" }}
            className="rounded-full object-cover"
          />
          <div className="my-auto mx-2 font-semibold">{full_name}</div>
          <div className="text-gray-500 my-auto text-sm font-semibold">
            @{data?.author_username} . {posted}
          </div>
        </div>
        <div>
          <MoreVertIcon className="ml-10" />
        </div>
      </div>
      <div className='ml-4 p-4'>
        <p className='tracking-wide text-base/7'>
          {data.content}
        </p>
        { image ? (
          <img
            className="rounded-md mt-8"
            src={image}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />
        ) : null
        }
      </div>
      <div className='mt-4 flex ml-3'>
        <small>{likes_count.current}</small>
        {like ? (
          <FaHeart
            className="text-color-lavender ml-2 text-xl mr-3 cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <FaRegHeart
            className="text-xl ml-2 mr-3 cursor-pointer"
            onClick={handleClick}
          />
        )}
        <FaRegComment className="text-xl mx-3" />
        <FaRegShareSquare className="text-xl mx-3" />
          
      </div>
    </div>
  )
}

export default Post
