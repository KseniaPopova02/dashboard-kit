import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { beforeUpload, handleFileChange } from "./helpers";
import { CustomPhotoInputRep } from "../../../components";

export const CustomPhotoInput = ({
  label,
  editMode,
  editContact,
  ...props
}) => {
  const [field, , helpers] = useField(props);
  const { value, name } = field;
  const [src, setSrc] = useState(null);
  const isFileObject = value instanceof File || value instanceof Blob;

  useEffect(() => {
    if (editMode && editContact && editContact.photo) {
      setSrc(editContact.photo);
    } else {
      setSrc(isFileObject ? URL.createObjectURL(value) : null);
    }
  }, [editMode, editContact, isFileObject, value]);

  return (
    <CustomPhotoInputRep
      name={name}
      label={label}
      src={src}
      beforeUpload={(file) => beforeUpload(file)}
      onChange={handleFileChange(setSrc, helpers)}
    />
  );
};
