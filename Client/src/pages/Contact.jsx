/* eslint-disable no-unused-vars */
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Your Name" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Email" type="email" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea w-100"
//                   ></textarea>
//                 </FormGroup>

//                 <button className=" contact__btn" type="submit">
//                   Send Message
//                 </button>
//               </Form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   123 New Zarqa, Zarqa, Jordan
//                 </p>
//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+962-78-2111991</p>
//                 </div>

//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">
//                     Quick Ride@gmail.com
//                   </p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className=" d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i className={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import emailjs from "emailjs-com";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.linkedin.com/in/fahmialdairi99/",
    icon: "ri-linkedin-line",
  },
  {
    url: "https://github.com/reservationProject99/reservation.git",
    icon: "ri-github-line",
  },
];

const Contact = () => {
  const form = useRef(null);
  const [message, setMessage] = useState({
    msg: "",
    theme: "",
  });

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_kf36l0v",
        "template_hsgme34",
        event.target, // Pass the HTML form element
        "gYrOQgVA7PuiLFEAU"
      )
      .then(
        (result) => {
          setMessage({
            msg: "Your message has been sent successfully, our team will contact you as soon as possible.",
            theme: "success",
          });
        },
        (error) => {
          setMessage({
            msg: "Something went wrong, please try again later!",
            theme: "danger",
          });
          console.log("massage error: " + error);
        }
      );
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container className="w-75 d-flex justify-content-center custom-color shadow">
          <Row className="w-75">
            <Col lg="15" md="15">
              <h6 className="fw-bold mb-4  d-flex  justify-content-center fs-3 custom-colors mt-4">
                Get In Touch
              </h6>

              <Form onSubmit={sendEmail} ref={form}>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" name="from_name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="email_" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea w-100"
                    name="message"
                  ></textarea>
                </FormGroup>

                <div className=" d-flex align-items-center justify-content-center gap-4 mt-3 flex-column mt-3">
                  <button className=" contact__btn" type="submit">
                    Send Message
                  </button>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    {socialLinks.map((item, index) => (
                      <Link
                        to={item.url}
                        key={index}
                        className="social__link-icon"
                        style={{
                          borderRadius: "30%",
                          backgroundColor: "transparent",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#DAF5FF";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#0C134";
                        }}
                      >
                        <i className={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </Form>
              <p className={`font-bold mt-3 text-center text-${message.theme}`}>
                {message.msg}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
