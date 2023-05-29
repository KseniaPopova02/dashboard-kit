// import React from "react";
// import { useField, useFormikContext } from "formik";

// export const CustomPhotoInput = ({ label, ...props }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field, meta, helpers] = useField(props.name);

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     setFieldValue(field.name, file);
//   };

//   return (
//     <div>
//       <div>{label}</div>
//       <input onChange={handleChange} {...field} {...props} />
//       {meta.touched && meta.error && <div>{meta.error}</div>}
//     </div>
//   );
// };

// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import { PlusOutlined } from "@ant-design/icons";
// import { Upload, message } from "antd";

// export const CustomPhotoInput = () => {
//   return (
//     <Field name="photo">
//       {({ field, form }) => (
//         <div>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(event) =>
//               form.setFieldValue(field.name, event.target.files[0])
//             }
//           />
//           <ErrorMessage name="photo" component="div" />
//         </div>
//       )}
//     </Field>
//   );
// };

import React from "react";
import { Field, ErrorMessage } from "formik";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";

export const CustomPhotoInput = () => {
  return (
    <Field name="photo">
      {({ field, form }) => (
        <div>
          <Upload
            name={field.name}
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={null}
            beforeUpload={(file) => {
              const isJpgOrPng =
                file.type === "image/jpeg" || file.type === "image/png";
              if (!isJpgOrPng) {
                message.error("You can only upload JPG/PNG file!");
              }
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                message.error("Image must be smaller than 2MB!");
              }
              if (isJpgOrPng && isLt2M) {
                form.setFieldValue(field.name, file);
              }
              return false;
            }}
            onChange={(info) => {
              if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
              }
            }}
          >
            {field.value ? (
              <img
                src={URL.createObjectURL(field.value)}
                alt="avatar"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}></div>
              </div>
            )}
          </Upload>
          <ErrorMessage name="photo" component="div" />
        </div>
      )}
    </Field>
  );
};

// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import { PlusOutlined } from "@ant-design/icons";
// import { Upload, message } from "antd";

// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must be smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

// export const CustomPhotoInput = () => {
//   const handleChange = (event, { setFieldValue }) => {
//     const file = event.currentTarget.files[0];
//     setFieldValue("photo", file);
//   };

//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <Field name="photo">
//       {({ field, form }) => (
//         <div>
//           <Upload
//             name="photo"
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}
//             beforeUpload={beforeUpload}
//             onChange={(event) => handleChange(event, form)}
//           >
//             {field.value ? (
//               <img
//                 src={URL.createObjectURL(field.value)}
//                 alt="avatar"
//                 style={{ width: "100%" }}
//               />
//             ) : (
//               uploadButton
//             )}
//           </Upload>
//           <ErrorMessage name="photo" component="div" />
//         </div>
//       )}
//     </Field>
//   );
// };

// import { Upload, message } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import { Field, ErrorMessage } from "formik";

// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must be smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

// export const CustomPhotoInput = () => {
//   const handleChange = (info, { setFieldValue }) => {
//     if (info.file.status === "uploading") {
//       // Обработка состояния загрузки
//     }
//     if (info.file.status === "done") {
//       // Обработка успешной загрузки
//       console.log(info.file.response); // Ответ от сервера (если есть)
//       setFieldValue("photo", info.file.originFileObj); // Обновление значения поля формы
//     }
//   };

//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <Field name="photo">
//       {({ field, form }) => (
//         <div>
//           <Upload
//             name="photo"
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}
//             beforeUpload={beforeUpload}
//             onChange={(info) => handleChange(info, form)}
//           >
//             {field.value ? (
//               <img
//                 src={URL.createObjectURL(field.value)}
//                 alt="avatar"
//                 style={{ width: "100%" }}
//               />
//             ) : (
//               uploadButton
//             )}
//           </Upload>
//           <ErrorMessage name="photo" component="div" />
//         </div>
//       )}
//     </Field>
//   );
// };

// import React, { useState } from "react";
// import { Field, ErrorMessage } from "formik";
// import { Upload, message } from "antd";
// import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

// const cloudinaryUploadPreset = "your_cloudinary_upload_preset"; // Замените на ваш upload_preset

// export const CustomPhotoInput = () => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");
//   const [file, setFile] = useState(null);

//   const handleChange = (info, field, form) => {
//     if (info.file.status === "uploading") {
//       setLoading(true);
//       return;
//     }
//     if (info.file.status === "done") {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImageUrl(event.target.result);
//         setFile(info.file);
//         form.setFieldValue(field.name, info.file);
//       };
//       reader.readAsDataURL(info.file.originFileObj);
//       setLoading(false);
//     }
//   };

//   const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgOrPng) {
//       message.error("You can only upload JPG/PNG file!");
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error("Image must be smaller than 2MB!");
//     }
//     return isJpgOrPng && isLt2M;
//   };

//   const handleUpload = ({ file }) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", cloudinaryUploadPreset);

//     return fetch(
//       "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => data.secure_url)
//       .catch((error) => {
//         console.error("Error uploading image to Cloudinary:", error);
//         message.error("Failed to upload image.");
//       });
//   };

//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <Field name="photo">
//       {({ field, form }) => (
//         <div>
//           <Upload
//             name={field.name}
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}
//             beforeUpload={beforeUpload}
//             customRequest={({ file }) => handleUpload({ file })}
//             onChange={(info) => handleChange(info, field, form)}
//           >
//             {imageUrl ? (
//               <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
//             ) : (
//               uploadButton
//             )}
//           </Upload>
//           <ErrorMessage name={field.name} component="div" />
//         </div>
//       )}
//     </Field>
//   );
// }
// import React from "react";
// import { useField } from "formik";

// export const CustomPhotoInput = ({ label, ...props }) => {
//   const [field, meta, helpers] = useField(props);

//   const handleChange = (event) => {
//     const file = event.target.files[0];
//     helpers.setValue(file);
//   };

//   return (
//     <div>
//       <div>{label}</div>
//       <input
//         {...field}
//         {...props}
//         type="file"
//         accept="image/*"
//         onChange={handleChange}
//       />
//       {meta.touched && meta.error && <div>{meta.error}</div>}
//     </div>
//   );
// };
