import React, { useEffect, useState } from "react";
import { useField, ErrorMessage } from "formik";
import { beforeUpload } from "./helpers";
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
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (editMode && editContact && editContact.photo) {
      setSrc(editContact.photo);
    } else {
      setSrc(isFileObject ? URL.createObjectURL(value) : null);
    }
  }, [editMode, editContact, isFileObject, value]);

  const onChange = (info) => {
    const { file } = info;
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJpgOrPng || !isLt2M) {
      return;
    } else {
      setSrc(URL.createObjectURL(file));
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
        beforeUpload={beforeUpload(helpers, setSrc)}
        onChange={onChange}
      >
        {src ? <StyledAvatar src={src} alt="avatar" /> : <StyledPlusOutlined />}
      </StyledUpload>
      <div>{label}</div>
      <ErrorMessage name="photo" component="div" />
    </StyledUploadWrapper>
  );
};
