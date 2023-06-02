import React from "react";
import { useField, ErrorMessage } from "formik";
import { beforeUpload, handleChange } from "./helper";
import {
  StyledUpload,
  StyledPlusOutlined,
  StyledUploadWrapper,
  StyledAvatar,
} from "./style";

export const CustomPhotoInput = ({ label, editMode, editContact }) => {
  const [field, , helpers] = useField("photo");
  const { value, name } = field;
  const isFileObject = value instanceof File || value instanceof Blob;

  let src = null;
  if (editMode) {
    src = editContact.photo;
  } else {
    src = isFileObject ? URL.createObjectURL(value) : null;
  }

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
        {src ? <StyledAvatar src={src} alt="avatar" /> : <StyledPlusOutlined />}
      </StyledUpload>
      <div>{label}</div>
      <ErrorMessage name="photo" component="div" />
    </StyledUploadWrapper>
  );
};
