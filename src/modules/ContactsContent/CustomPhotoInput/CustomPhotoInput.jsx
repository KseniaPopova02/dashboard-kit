import React from "react";
import { useField, ErrorMessage } from "formik";
import { beforeUpload, handleChange } from "./helper";
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

  return (
    <StyledUploadWrapper>
      <StyledUpload
        name={name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={null}
        beforeUpload={beforeUpload(helpers)}
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
