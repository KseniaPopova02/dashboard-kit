import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email")
    .required("Email is required"),
});
