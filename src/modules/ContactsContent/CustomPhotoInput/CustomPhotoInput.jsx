import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { beforeUpload, handleFileChange } from "./helpers";
import { CustomPhotoInputRep } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { setSrc } from "./redux";

export const CustomPhotoInput = ({
  label,
  editMode,
  editContact,
  ...props
}) => {
  const dispatch = useDispatch();
  const [field, , helpers] = useField(props);
  const { value, name } = field;
  const src = useSelector((state) => state.photoInputSrc);
  const isFileObject = value instanceof File || value instanceof Blob;

  useEffect(() => {
    if (editMode && editContact && editContact.photo) {
      dispatch(setSrc(editContact.photo));
    } else {
      dispatch(setSrc(isFileObject ? URL.createObjectURL(value) : null));
    }
  }, [dispatch, editMode, editContact, isFileObject, value]);

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
