import React from "react";
import { useField, ErrorMessage } from "formik";

import { message } from "antd";
import {
  StyledUpload,
  StyledPlusOutlined,
  StyledUploadWrapper,
  StyledAvatar,
} from "./style";

export const CustomPhotoInput = ({ label }) => {
  const [field, , helpers] = useField("photo");
  const { value, name } = field;

  const isFileObject = value instanceof File || value instanceof Blob;

  const beforeUpload = (file) => {
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

  const handleChange = (info) => {
    const {
      file: { status, name },
    } = info;

    if (status === "done") {
      message.success(`${name} file uploaded successfully`);
    } else if (status === "error") {
      message.error(`${name} file upload failed.`);
    }
  };

  return (
    <StyledUploadWrapper>
      <StyledUpload
        name={name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={null}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {isFileObject ? (
          <StyledAvatar
            src={URL.createObjectURL(value)}
            alt="avatar"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <StyledPlusOutlined />
        )}
      </StyledUpload>
      <div>{label}</div>
      <ErrorMessage name="photo" component="div" />
    </StyledUploadWrapper>
  );
};
