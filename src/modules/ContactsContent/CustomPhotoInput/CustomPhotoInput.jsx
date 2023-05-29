import React from "react";
import { Field, ErrorMessage } from "formik";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";

import { beforeUpload, handleChange } from "./helper";

export const CustomPhotoInput = () => {
  return (
    <Field name="photo">
      {({ field, form }) => {
        const { value, name } = field;

        return (
          <div>
            <Upload
              name={name}
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action={null}
              beforeUpload={(file) => beforeUpload(file, form, name)}
              onChange={handleChange}
            >
              {value ? (
                <img
                  src={URL.createObjectURL(value)}
                  alt="avatar"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <div>
                  <PlusOutlined />
                </div>
              )}
            </Upload>
            <ErrorMessage name="photo" component="div" />
          </div>
        );
      }}
    </Field>
  );
};
