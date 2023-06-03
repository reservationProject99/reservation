import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/UI/AddressForm';
import PaymentForm from '../components/UI/PaymentForm';
import Review from '../components/UI/Review';
import { indigo } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

const steps = ['Your Information', 'Payment details', 'Review your order'];

function getStepContent(step, handleNext) {
    switch (step) {
        case 0:
            return <AddressForm handleNext={handleNext} />;
        case 1:
            return <PaymentForm handleNext={handleNext} />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

const defaultTheme = createTheme();

export default function Checkout() {

    const navigate = useNavigate(); // useNavigate hook to get access to the navigate function
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleGoBackHome = () => {
        navigate("/"); // navigate to the home page
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center" color={indigo[900]}>
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
                                Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.
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
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
