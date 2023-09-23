import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import ProfileContext from "../context/ProfileContext";

const Widgets = () => {
  let { profile } = useContext(ProfileContext);
  const baseURL = "http://127.0.0.1:8000";
  let navigate = useNavigate();
  return (
    <div className="h-full w-3/12 fixed -z-0">
      <MDBContainer className="mx-auto mt-2">
        <MDBCard style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-2">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <MDBCardImage
                  style={{ borderRadius: "10px" }}
                  className="my-auto w-32"
                  src={baseURL + profile?.profile_pic}
                  alt="Generic placeholder image"
                  fluid
                />
              </div>
              <div className=" ms-3">
                <MDBCardTitle>
                  {profile?.first_name + " " + profile?.last_name}
                </MDBCardTitle>

                <div
                  className="d-flex justify-content-start rounded-3 py-1 px-2 mb-2"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div>
                    <p className="small text-muted mb-1">Posts</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Likes</p>
                    <p className="mb-0">209</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    navigate("profile");
                  }}
                  className="cursor-pointer pt-1 text-center rounded-full text-white bg-custom-color-lavender text-sm p-1"
                >
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

export default Widgets;
