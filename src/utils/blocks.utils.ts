import { isString } from "formik";
import type { StepItem } from "./content.utils";

export const extractStepProperties = (step: StepItem) => {
  const stepText = isString(step) ? step : step.text;
  const stepCode = typeof step === "object" && step.code ? step.code : undefined;
  
  const codeText = stepCode
    ? typeof stepCode === "string"
      ? stepCode
      : stepCode.text
    : undefined;

  const showArrow = stepCode && typeof stepCode === "object"
    ? stepCode.showArrow !== undefined
      ? stepCode.showArrow
      : true
    : true;

  const separateLines = stepCode && typeof stepCode === "object"
    ? stepCode.separateLines || false
    : false;

  return {
    stepText,
    codeText,
    showArrow,
    separateLines,
  };
};