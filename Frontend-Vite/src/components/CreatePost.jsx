import React, { useContext, useRef, useState } from 'react'

import ImageIcon from '@mui/icons-material/Image';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import AuthContext from '../context/AuthContext';
import useAxios from '../hooks/useAxios'

const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const [showCounter, setShowCounter] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState("")

  const preview = useRef([])

  const roseImage = new URL('../assets/rose.jpg', import.meta.url).href

  const { user } = useContext(AuthContext)

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  let api = useAxios();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const hiddenFileInput = React.useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    handleFile(fileUploaded);
  };

  let renderCounter = () => {
    if (showCounter) {
      if (content.length == 0 || content.length > 1000) {
        return <p className='text-xs text-red-500 text-right'>{content.length}/1000</p>
      }else{
        return <p className='text-xs text-green-500 text-right'>{content.length}/1000</p>
      }
    }else{
      return null
    }
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("smth")

    if (e.target.post_content.value.length === 0 || e.target.post_content.value.length > 1000) {
      setIsLoading(true);
      await delay(1000);
      setIsLoading(false);
      setOpen(true);
      return null;
    }

    setIsLoading(true);

    await delay(1000);

    let formData = new FormData();
    formData.append("content", e.target.post_content.value);
    formData.append("author", user?.user_id);
    if (files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        formData.append("uploaded_images", element);
      }
    }
    let response = await api.post(`/api/posts/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setContent("")
    setIsLoading(false);
    preview.current = [];
    setFiles([]);
  }

  return (
    <div className='w-full h-36 bg-color-container rounded-xl'>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Post content cannot be empty.
        </Alert>
      </Snackbar>
        <div className='p-4 flex gap-3'>
            <img
                src={roseImage}
                className='object-cover h-12 w-12 rounded-full'
            />
            <div className='w-full flex-col'>
              <form onSubmit={handleSubmit}>
                  <textarea
                      rows={2}
                      className="focus:placeholder:invisible placeholder:text-gray-400 w-full p-2 border-0 rounded-xl outline-none bg-color-secondary"
                      placeholder="What's On Your Mind?"
                      name="post_content"
                      value={content}
                      onFocus={() => {
                        setShowCounter(true);
                      }}
                      onBlur={() => {
                        setShowCounter(false);
                      }}
                      onChange={(e) => {
                        setContent(e.target.value)
                      }}
                  />
                  <div className='flex w-full justify-between'>
                    <div className='flex w-full justify-start gap-4 mt-2'>
                        <div onClick={handleClick} className='text-gray-200 rounded-full border-gray-200 border-[1px] flex gap-2 px-4 py-1 cursor-pointer'>
                          <ImageIcon />
                          <p>Photo</p>
                        </div>
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <div className='text-color-container rounded-full bg-gray-200 px-4 py-1'>
                          { isLoading ? 
                            <button disabled className="w-full" type="submit">
                              <CircularProgress size={20} color='secondary' />
                            </button>
                            :<button className="w-full" type="submit">
                              Post
                            </button>
                          }
                        </div>
                    </div>
                    {renderCounter()}
                  </div>
                  
              </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
