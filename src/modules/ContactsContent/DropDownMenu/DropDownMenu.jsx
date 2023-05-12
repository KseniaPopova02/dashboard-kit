// import { Dropdown, Menu, Button } from "antd";
// import { StyledEllipsisOutlined } from "./style";

// import { useState } from "react";

// export const DropDownMenu = ({ handleDelete, contact }) => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [dropdownMenu, setDropdownMenu] = useState(null);
//   const handleEllipsisClick = () => {
//     const menu = (
//       <Menu>
//         <div>
//           <Menu.Item>
//             <Button type="text" onClick={() => handleDelete(contact.id)}>
//               Delete
//             </Button>
//           </Menu.Item>
//           <Menu.Item>
//             <Button type="text">Edit</Button>
//           </Menu.Item>
//         </div>
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
//       menu={dropdownMenu}
//       trigger={["click"]}
//       onBlur={handleBlur}
//     >
//       <StyledEllipsisOutlined
//         onClick={(event) => handleEllipsisClick(event, contact)}
//       />
//     </Dropdown>
//   );
// };

import { Dropdown, Menu, Button } from "antd";
import { StyledEllipsisOutlined } from "./style";

import { useState } from "react";

const menu = (
  <Menu>
    <Menu.Item key="edit">Edit</Menu.Item>
    <Menu.Item key="delete">Delete</Menu.Item>
  </Menu>
);

export const DropDownMenu = ({ handleDelete, contact }) => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <span>
          <StyledEllipsisOutlined />
        </span>
      </Dropdown>
    </div>
  );
};
