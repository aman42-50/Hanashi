import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import AuthContext from "../context/authContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <MDBContainer
      fluid
      className="authpage"
      style={{ backgroundColor: "white" }}
    >
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">hanashi</span>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
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
            <form onSubmit={loginUser}>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                id="formControlLg"
                size="lg"
                name="username"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
              />

              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                size="lg"
                style={{ backgroundColor: "#709085" }}
              >
                Login
              </MDBBtn>
            </form>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a class="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?{" "}
              <a href="/register" class="link-info">
                Register here
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

export default LoginPage;
