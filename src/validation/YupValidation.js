import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
// At least 5 characters,
// must contain at least 1 uppercase letter,
// must contain at least 1 lowercase letter,
// and 1 number

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email_phone: yup
    .string()
    // .email("Please enter valid email")
    .required("Required"),
  dob: yup.string().required("Required"),
  password: yup
    .string()
    // .matches(passwordRules, { message: "please create a stronger password!" })
    .required("Required")
    .min(5, "Your password is too short."),
  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Password must match"),
  terms: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions"),
});
