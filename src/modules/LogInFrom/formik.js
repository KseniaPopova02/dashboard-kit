import * as Yup from "yup";
import { useFormik } from "formik";

export const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  onSubmit: (values) => {
    console.log("submit", values);
  },
  validationSchema: Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
});
