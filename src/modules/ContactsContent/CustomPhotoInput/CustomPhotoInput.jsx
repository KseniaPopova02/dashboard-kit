import React from "react";
import { Field, ErrorMessage } from "formik";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";

import { beforeUpload, handleChange } from "./helper"; // Импортируйте функции из внешнего модуля

export const CustomPhotoInput = () => {
  return (
    <Field name="photo">
      {({ field, form }) => {
        const { value, name } = field; // Деструктурируйте field

        const isFileObject = value instanceof File || value instanceof Blob; // Проверка, является ли value файловым объектом

        return (
          <div>
            <Upload
              name={name}
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action={null}
              beforeUpload={(file) => beforeUpload(file, form, name)} // Используйте вынесенную функцию beforeUpload
              onChange={handleChange} // Используйте вынесенную функцию handleChange
            >
              {isFileObject ? (
                <img
                  src={URL.createObjectURL(value)}
                  alt="avatar"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
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
