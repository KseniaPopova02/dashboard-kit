// import { Dropdown, Menu, Button } from "antd";
// import { StyledEllipsisOutlined } from "./style";
// import { useState } from "react";

// export const DropDownMenu = ({ handleDelete, contact }) => {
//   const menuItems = [
//     {
//       key: "delete",
//       label: (
//         <Button type="text" onClick={() => handleDelete(contact.id)}>
//           Delete
//         </Button>
//       ),
//     },
//     {
//       key: "edit",
//       label: <Button type="text">Edit</Button>,
//     },
//   ];
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [dropdownMenu, setDropdownMenu] = useState(null);
//   const handleEllipsisClick = () => {
//     const menu = (
//       <Menu>
//         {menuItems.map((item) => (
//           <Menu.Item key={item.key} {...item.label.props}>
//             {item.label}
//           </Menu.Item>
//         ))}
//       </Menu>
//     );
//     setDropdownMenu(menu);
//     setDropdownVisible(true);
//   };
//   const handleBlur = () => {
//     setDropdownVisible(false);
//     setDropdownMenu(null);
//   };
//   return (
//     <Dropdown
//       open={dropdownVisible}
//       onOpenChange={setDropdownVisible}
//       menu={{
//         dropdownMenu,
//       }}
//       placement="bottomLeft"
//       arrow
//       trigger={["click"]}
//       onBlur={handleBlur}
//     >
//       <StyledEllipsisOutlined
//         onClick={(event) => handleEllipsisClick(event, contact)}
//       />
//     </Dropdown>
//   );
// };
import { Dropdown, Space } from "antd";
import { StyledEllipsisOutlined } from "./style";

export const DropDownMenu = ({ handleDelete, contact }) => {
  const items = [
    {
      key: "1",
      label: <div onClick={() => handleDelete(contact.id)}>delete</div>,
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
