import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");

  React.useEffect(() => {
    if (step) {
      const stepIndex = parseInt(step, 10);
      if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < steps.length) {
        setActiveStep(stepIndex);
      }
    }
  }, [step]);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    updateURL(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    updateURL(prevStep);
  };

  const updateURL = (stepIndex) => {
    const newUrl = `${location.pathname}?step=${stepIndex}`;
    navigate(newUrl);
  };

  return (
    <div className="px-10 lg:px-20 pb-9">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
            <div className="mt-10">
              {activeStep === 1 && <DeliveryAddressForm />}
              {activeStep === 2 && <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
