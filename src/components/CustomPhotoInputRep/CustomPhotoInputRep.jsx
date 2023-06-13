import {
  StyledUpload,
  StyledPlusOutlined,
  StyledUploadWrapper,
  StyledAvatar,
} from "./style";
import { ErrorMessage } from "formik";

export const CustomPhotoInputRep = ({
  name,
  label,
  src,
  beforeUpload,
  onChange,
}) => (
  <StyledUploadWrapper>
    <StyledUpload
      name={name}
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action={null}
      beforeUpload={beforeUpload}
      onChange={onChange}
    >
      {src ? <StyledAvatar src={src} alt="avatar" /> : <StyledPlusOutlined />}
    </StyledUpload>
    <div>{label}</div>
    <ErrorMessage name="photo" component="div" />
  </StyledUploadWrapper>
);
