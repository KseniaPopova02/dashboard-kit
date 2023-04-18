import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// (?=.*\d)          should contain at least one digit
//   (?=.*[a-z])     should contain at least one lower case
//   (?=.*[A-Z])     should contain at least one upper case

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email")
    .required("Email is required"),
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3)
    .required("Name is required"),
  surname: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid surname")
    .min(3)
    .required("Surname is required"),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password should contains at least: one digit, one lower case, one upper case",
    })
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

export const initialValues = {
  email: "",
  name: "",
  surname: "",
  password: "",
  confirmPassword: "",
};
