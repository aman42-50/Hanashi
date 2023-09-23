import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);
  return (
    <MDBContainer
      fluid
      className="authpage"
      style={{ backgroundColor: "white" }}
    >
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-4">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">hanashi</span>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-2 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Sign Up
            </h3>

            <MDBRow
              className="text-center mb-3"
              style={{ marginLeft: "130px", marginRight: "20px" }}
            >
              <MDBCol>
                <MDBBtn floating color="secondary">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn floating color="secondary">
                  <MDBIcon fab icon="google" />
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn floating color="secondary">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn floating color="secondary">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <div
              className="divider d-flex align-items-center my-4"
              style={{ paddingLeft: "100px" }}
            >
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <form onSubmit={registerUser}>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    name="first_name"
                    wrapperClass="mb-4 mx-5 w-100"
                    label="First Name"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    name="last_name"
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Last Name"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                name="username"
                size="lg"
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg"
                name="email"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                name="password"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Confirm Password"
                name="confirm_password"
                type="password"
                size="lg"
              />

              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                type="submit"
                size="lg"
                style={{ backgroundColor: "#709085" }}
              >
                Sign Up
              </MDBBtn>
            </form>
            <p className="ms-5">
              Already have an account?{" "}
              <a href="/login" class="link-info">
                Sign in here
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src={require("../authimage.jpg")}
            alt="Auth"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterPage;
