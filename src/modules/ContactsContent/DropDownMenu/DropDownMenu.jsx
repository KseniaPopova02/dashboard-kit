import { Dropdown, Space } from "antd";
import { StyledEllipsisOutlined } from "./style";

export const DropDownMenu = ({ handleDelete, contactId }) => {
  const items = [
    {
      key: "1",
      label: <div onClick={() => handleDelete(contactId)}>delete</div>,
    },
    {
      key: "2",
      label: <div>edit</div>,
    },
  ];
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <StyledEllipsisOutlined />
        </Dropdown>
      </Space>
    </Space>
  );
};
