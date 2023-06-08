import { message } from "antd";

export const checkFileType = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    return false;
  }
  return true;
};

export const checkFileSize = (file) => {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
    return false;
  }
  return true;
};

export const beforeUpload = (helpers) => (file) => {
  if (!checkFileType(file) || !checkFileSize(file)) {
    return false;
  }
  helpers.setValue(file);
  return false;
};

export const handleFileChange = (setSrc) => (info) => {
  const { file } = info;
  if (file && checkFileType(file) && checkFileSize(file)) {
    setSrc(URL.createObjectURL(file));
  }
};
