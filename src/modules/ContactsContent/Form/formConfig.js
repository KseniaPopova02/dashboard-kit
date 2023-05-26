import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  photo: Yup.mixed(),
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .min(3)
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid Last name")
    .min(3)
    .required("Last name is required"),
  email: Yup.string()
    .email("Please input a valid email")
    .required("Email is required"),
  address: Yup.string(),
});

export const initialValues = {
  photo: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
};
