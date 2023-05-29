import { Upload } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

export const StyledUpload = styled(Upload)`
  .ant-upload {
    background-color: rgba(159, 162, 180, 0.5) !important;
    border-radius: 50% !important;
    width: 60px !important;
    height: 60px !important;
    overflow: hidden !important;
    border: none !important;
  }

  &&&.ant-upload-wrapper.ant-upload-picture-card-wrapper {
    width: 60px;
  }
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  color: #fff;
  font-size: 25px;
`;

export const StyledUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
`;
