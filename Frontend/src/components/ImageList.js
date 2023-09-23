import React, { useRef, useState } from "react";
import FullScreenImageView from "./FullScreenImageView";

const ImageListComp = ({ itemData }) => {
  const [showModal, setShowModal] = useState(false);
  const source = useRef(null);
  const toggleShow = (data) => {
    source.current = data;
    setShowModal(!showModal);
  };

  let x = itemData.length;
  if (x === 0) {
    return null;
  }

  if (x === 1) {
    return (
      <div className="w-4/5">
        <FullScreenImageView
          source={source.current}
          toggleShow={toggleShow}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <img
          className="rounded-md"
          onClick={() => toggleShow(itemData[0])}
          src={itemData[0]}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>
    );
  } else if (x === 2) {
    return (
      <div className="flex w-4/5 rounded-full">
        <FullScreenImageView
          source={source.current}
          toggleShow={toggleShow}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <img
          onClick={() => toggleShow(itemData[0])}
          className="m-1 rounded-l-md"
          src={itemData[0]}
          style={{
            width: "50%",
            height: "400px",
            objectFit: "cover",
          }}
        />
        <img
          onClick={() => toggleShow(itemData[1])}
          className="m-1 rounded-r-md"
          src={itemData[1]}
          style={{
            width: "50%",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>
    );
  } else if (x === 3) {
    return (
      <div className="flex w-4/5 rounded-full">
        <FullScreenImageView
          source={source.current}
          toggleShow={toggleShow}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <img
          onClick={() => toggleShow(itemData[0])}
          className="m-1 rounded-l-md"
          src={itemData[0]}
          style={{
            width: "50%",
            height: "400px",
            objectFit: "cover",
          }}
        />
        <div className="flex-col">
          <img
            onClick={() => toggleShow(itemData[1])}
            className="m-1 rounded-tr-md"
            src={itemData[1]}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <img
            onClick={() => toggleShow(itemData[2])}
            className="m-1 rounded-br-md"
            src={itemData[2]}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-4/5 rounded-full">
        <FullScreenImageView
          source={source.current}
          toggleShow={toggleShow}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className="flex-col mx-1">
          <img
            onClick={() => toggleShow(itemData[0])}
            className="m-1 rounded-tl-md"
            src={itemData[0]}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <img
            onClick={() => toggleShow(itemData[1])}
            className="m-1 rounded-bl-md"
            src={itemData[1]}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex-col">
          <img
            onClick={() => toggleShow(itemData[2])}
            className="m-1 rounded-tr-md"
            src={itemData[2]}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <img
            onClick={() => toggleShow(itemData[3])}
            className="m-1 rounded-br-md"
            src={itemData[3]}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    );
  }
};

export default ImageListComp;
