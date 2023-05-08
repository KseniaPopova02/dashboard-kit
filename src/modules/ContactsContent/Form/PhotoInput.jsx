import { useState } from "react";
import { useField } from "formik";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { CustomInput } from "../../../components";

export const PhotoInput = ({ defaultImage, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      setImageUrl(info.file.response.url);
      helpers.setValue(info.file.originFileObj);
    }
    if (info.file.status === "error") {
      setLoading(false);
      message.error("Upload failed");
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <CustomInput label="Photo">
      <Upload
        name="photo"
        listType="picture-card"
        className="photo-uploader"
        showUploadList={false}
        action="/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
          </div>
        )}
      </Upload>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </CustomInput>
  );
};
