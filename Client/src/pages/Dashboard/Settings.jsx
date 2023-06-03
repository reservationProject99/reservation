import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBProgress,
  MDBBtn,
  MDBProgressBar,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
const Settings = () => {
  return (
    <>
      <section style={{ backgroundColor: "#0b0c28" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4" style={{backgroundColor:"#181b3a",color:'white'}}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="avatar"
                    className="rounded"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="mb-1 mt-4">Full Stack Developer</p>
                  <p className="mb-4">Bay Area, San Francisco, CA</p>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0" >
                  <MDBListGroup flush className="rounded-3" >
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"#181b3a",color:'white'}}>
                      <MDBCardText>
                        <i className="ri-github-fill"> Github</i>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"#181b3a",color:'white'}}>
                      <MDBCardText>
                        <i className="ri-facebook-fill">Facebook</i>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3"style={{backgroundColor:"#181b3a",color:'white'}}>
                      <MDBCardText>
                        <i className="ri-instagram-fill">Instagram</i>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3"style={{backgroundColor:"#181b3a",color:'white'}}>
                      <MDBCardText>
                        <i className="ri-linkedin-fill">Linkedin</i>
                      </MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4"style={{backgroundColor:"#181b3a",color:'white'}}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="6">
                      <MDBCardText className="text-base">
                        Johnatan Smith
                      </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="3">
                    <button className="btn rounded-lg px-4 py-2 btn-outline-success">
                     <i className="ri-edit-line"></i>
                   </button>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="6">
                      <MDBCardText className="text-base">
                        example@example.com
                      </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="3">
                    <button className="btn rounded-lg px-4 py-2 btn-outline-success">
                     <i className="ri-edit-line"></i>
                   </button>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="6">
                      <MDBCardText className="text-base">
                        (097) 234-5678
                      </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="3">
                    <button className="btn rounded-lg px-4 py-2 btn-outline-success">
                     <i className="ri-edit-line"></i>
                   </button>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="6">
                      <MDBCardText className="text-base">
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="3">
                    <button className="btn rounded-lg px-4 py-2 btn-outline-success">
                     <i className="ri-edit-line"></i>
                   </button>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="12" >
                  <MDBCard className="mb-4 mb-md-0"style={{backgroundColor:"#181b3a",color:'white'}}>
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-success font-italic me-1">
                          Experience
                        </span>
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Settings;