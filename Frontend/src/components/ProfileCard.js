import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const ProfileCard = () => {
  return (
    <div className="vh-100">
      <MDBContainer className="ml-1 w-3/12 mt-5">
        <MDBCard className="" style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-2">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <MDBCardImage
                  style={{ borderRadius: "10px" }}
                  className="mt-2 w-24"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  fluid
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <MDBCardTitle>Danny McLoan</MDBCardTitle>

                <div
                  className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div>
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
                <div className="pt-1 text-center rounded-full text-white bg-custom-color-lavender text-sm p-1">
                  View Profile
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default ProfileCard;
