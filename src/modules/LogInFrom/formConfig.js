import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// (?=.*\d)          should contain at least one digit
//   (?=.*[a-z])     should contain at least one lower case
//   (?=.*[A-Z])     should contain at least one upper case

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password should contains at least: one digit, one lower case, one upper case",
    })
    .required("Password is required"),
});

export const initialValues = {
  email: "",
  password: "",
};
