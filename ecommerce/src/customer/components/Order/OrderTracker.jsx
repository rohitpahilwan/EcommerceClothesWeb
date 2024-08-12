import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Placed",
  "ORder Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel />
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
