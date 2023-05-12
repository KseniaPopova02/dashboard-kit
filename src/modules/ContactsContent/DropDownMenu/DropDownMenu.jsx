import { Dropdown, Menu, Button } from "antd";
import { StyledEllipsisOutlined } from "./style";
import { useState } from "react";

export const DropDownMenu = ({ contact }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(null);

  const handleEllipsisClick = (event) => {
    event.preventDefault();
    const menu = (
      <Menu>
        <Menu.Item>
          <Button type="text" onClick={() => handleEdit(contact)}>
            Edite
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="text" onClick={() => handleDelete(contact.id)}>
            Delete
          </Button>
        </Menu.Item>
      </Menu>
    );
    setDropdownMenu(menu);
    setDropdownVisible(true);
  };

  const handleBlur = () => {
    setDropdownVisible(false);
    setDropdownMenu(null);
  };

  return (
    <Dropdown
      visible={dropdownVisible}
      onVisibleChange={setDropdownVisible}
      overlay={dropdownMenu}
      trigger={["click"]}
      onBlur={handleBlur}
    >
      <StyledEllipsisOutlined
        onClick={(event) => handleEllipsisClick(event, contact)}
      />
    </Dropdown>
  );
};
