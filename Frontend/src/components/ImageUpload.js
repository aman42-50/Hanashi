import React, { useRef } from "react";

const ImageUpload = ({ handleFile, Btn }) => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    handleFile(fileUploaded);
  };
  return (
    <>
      <Btn onClick={handleClick}>Upload a file</Btn>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        multiple
      />
    </>
  );
};

export default ImageUpload;
