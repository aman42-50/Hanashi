import React, { useRef, useState, useEffect, useContext } from "react";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageUpload from "./ImageUpload";
import ImageListComp from "./ImageList";
import useAxios from "../utils/useAxios";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { RotatingLines } from "react-loader-spinner";

import AuthContext from "../context/authContext";

const CreatePost = ({ visible, onClose }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [contentValidator, setContentValidator] = useState(false);

  const { user } = useContext(AuthContext);

  const preview = useRef([]);

  let api = useAxios();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.post_content.value === "") {
      setIsLoading(true);
      await delay(1000);
      setContentValidator(true);
      setIsLoading(false);
      return null;
    }

    setIsLoading(true);

    await delay(1000);

    let formData = new FormData();
    formData.append("content", e.target.post_content.value);
    formData.append("author", user?.user_id);
    if (e.target.post_title.value !== "") {
      formData.append("title", e.target.post_title.value);
    }
    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        formData.append("uploaded_images", element);
      }
    }
    let response = await api.post(`/api/posts/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setIsLoading(false);
    preview.current = [];
    setFiles([]);
    setContentValidator(false);
    onClose();
  };

  const handleClick = (e) => {
    if (e.target.id === "close") {
      preview.current = [];
      setFiles([]);
      setContentValidator(false);
      onClose();
    }
  };

  const handleFile = (fileUploaded) => {
    setFiles(fileUploaded);
    const uploadedFiles = [...fileUploaded];
    const images = [];
    for (let index = 0; index < uploadedFiles.length; index++) {
      const file = uploadedFiles[index];
      const imageURL = URL.createObjectURL(file);
      images.push(imageURL);
    }
    preview.current = images;
  };

  const handleDeleteImage = () => {
    preview.current = [];
    setFiles([]);
  };

  if (!visible) return null;

  return (
    <div
      id="close"
      onClick={handleClick}
      className="ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center"
    >
      <div className="bg-white p-2 w-2/5 rounded-3xl">
        <div className="flex justify-end cursor-pointer">
          <CloseIcon
            onClick={() => {
              preview.current = [];
              setFiles([]);
              setContentValidator(false);
              onClose();
            }}
          />
        </div>
        <h5 className="p-2">Share Your Story!</h5>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={1}
            className="w-full my-2 py-2 px-2 border-1 rounded-xl outline-none"
            placeholder="Title... (optional)"
            name="post_title"
          />
          <textarea
            rows={6}
            className="w-full mt-2 px-2 border-0 outline-none"
            placeholder="What's On Your Mind?"
            name="post_content"
          />
          {contentValidator && (
            <div className="flex mb-2 text-red-700 text-xs">
              <ErrorOutlineOutlinedIcon />
              <p className="my-auto ml-1">Post content cannot be empty.</p>
            </div>
          )}
          {files.length > 0 ? (
            <div className="my-4 flex">
              <DeleteIcon
                className="my-auto ml-2 mr-4 hover:text-red-800"
                onClick={handleDeleteImage}
              />
              <ImageListComp itemData={preview.current} />
            </div>
          ) : (
            <></>
          )}
          <div className="flex">
            <div className="cursor-pointer ml-2 my-auto text-custom-color-lavender">
              <ImageUpload Btn={ImageOutlinedIcon} handleFile={handleFile} />
            </div>
            {isLoading ? (
              <div className="text-white ml-auto flex justify-end w-24 h-10 rounded-full bg-custom-color-lavender">
                <button disabled className="w-8 mx-auto">
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="3"
                    animationDuration="0.75"
                    width="30"
                    visible={true}
                    margin="auto"
                  />
                </button>
              </div>
            ) : (
              <div className="text-white ml-auto flex justify-end w-24 h-10 rounded-full bg-custom-color-lavender">
                <button className="w-full" type="submit">
                  Post
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
