// import { message } from "antd";

// export const beforeUpload = (file, form, fieldName) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must be smaller than 2MB!");
//   }
//   if (isJpgOrPng && isLt2M) {
//     form.setFieldValue(fieldName, file);
//     console.log("uploaded!");
//   }
//   return false;
// };

// export const handleChange = (info) => {
//   const {
//     file: { status, name },
//   } = info;

//   if (status === "done") {
//     message.success(`${name} file uploaded successfully`);
//   } else if (status === "error") {
//     message.error(`${name} file upload failed.`);
//   }
// };
import { message } from "antd";

export const beforeUpload = (helpers) => (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
    return false;
  }
  helpers.setValue(file);
  console.log("uploaded!");
  return false;
};

export const handleChange = (info) => {
  const {
    file: { status, name },
  } = info;

  if (status === "done") {
    message.success(`${name} file uploaded successfully`);
  } else if (status === "error") {
    message.error(`${name} file upload failed.`);
  }
};
