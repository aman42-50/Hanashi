import React from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

const FullScreenImageView = ({
  source,
  toggleShow,
  showModal,
  setShowModal,
}) => {
  return (
    <MDBModal show={showModal} setShow={setShowModal}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <img src={source} alt="post_image" style={{ objectFit: "contain" }} />
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );

  // return (
  //   <div
  //     onClick={onClose}
  //     className="ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] fixed inset-0 z-50 bg-black"
  //   >
  //     <p>Whatever</p>
  //   </div>
  // );
};

export default FullScreenImageView;
