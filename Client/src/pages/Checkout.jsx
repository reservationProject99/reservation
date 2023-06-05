/* eslint-disable no-unused-vars */
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../components/UI/AddressForm";
import PaymentForm from "../components/UI/PaymentForm";
import Review from "../components/UI/Review";
import { indigo } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const steps = ["Your Information", "Payment details", "Review your order"];

const defaultTheme = createTheme();

export default function Checkout() {
  const [userData, setUserData] = useState();

  const fetchData = async () => {
    const token = localStorage.getItem("token") || "";

    try {
      const response = await axios.get(`http://localhost:5000/get_user`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = response.data[0];
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [date, setDate] = useState({
    startDate: "",
    finalDate: "",
  });

  const [cridetCard, setCridetCard] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [review, setReview] = useState({
    price: 0,
    startDate: date.startDate,
    endDate: date.endDate,
  });

  React.useEffect(() => {
    setReview({
      price: 0,
      startDate: date.startDate,
      finalDate: date.finalDate,
    });
  }, [date]);

  const navigate = useNavigate(); // useNavigate hook to get access to the navigate function
  const [activeStep, setActiveStep] = React.useState(0);

  const sendConfirmationEmail = () => {
    // Set up the email service parameters
    const serviceId = "service_kf36l0v";
    const templateId = "template_hsgme34";
    const userId = "YOUR_EMAIL_USER_ID";

    // Prepare the template parameters with the car type and price
    const templateParams = {
      carType: review.carType,
      price: review.price,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleNext = async () => {
    const id = sessionStorage.getItem("CarID");
    try {
      const updateCar = await axios.put(
        `http://localhost:5000/update_startEndDate/${id}`,
        {
          start_date: date.startDate,
          end_date: date.finalDate,
        }
      );
      console.log(updateCar);
    } catch (err) {
      console.log(err);
    }
    if (activeStep === steps.length - 1) {
      sendConfirmationEmail();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleGoBackHome = () => {
    navigate("/"); // navigate to the home page
  };

  function getStepContent(step, handleNext) {
    switch (step) {
      case 0:
        return <AddressForm handleNext={handleNext} setDate={setDate} />;
      case 1:
        return (
          <PaymentForm handleNext={handleNext} setCridetCard={setCridetCard} />
        );
      case 2:
        return <Review review={review} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handlePlaceOrder = async () => {
    const id = sessionStorage.getItem("CarID");
    try {
      const updateCar = await axios.put(
        `http://localhost:5000/update_caravailable/${id}`,
        {}
      );
      console.log(updateCar);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color={indigo[900]}
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </Typography>
              <Button
                variant="contained"
                onClick={handleGoBackHome} // call the handleGoBackHome function on button click
                sx={{ mt: 3, ml: 1 }}
              >
                Go Back Home
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, handleNext)}
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === 2 ? (
                  <Button
                    variant="contained"
                    onClick={
                      activeStep === steps.length - 1
                        ? handlePlaceOrder
                        : handleNext
                    }
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                ) : null}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
