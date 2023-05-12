// import { Dropdown, Menu, Button } from "antd";
// import { StyledEllipsisOutlined } from "./style";

// import { useState } from "react";

// export const DropDownMenu = ({ handleDelete, contact }) => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [dropdownMenu, setDropdownMenu] = useState(null);
//   const handleEllipsisClick = () => {
//     const menu = (
//       <Menu>
//         <Menu.Item>
//           <Button type="text" onClick={() => handleDelete(contact.id)}>
//             Delete
//           </Button>
//         </Menu.Item>
//         <Menu.Item>
//           <Button type="text">Edit</Button>
//         </Menu.Item>
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
//       <span>
//         <StyledEllipsisOutlined
//           onClick={(event) => handleEllipsisClick(event, contact)}
//         />
//       </span>
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
      <Dropdown menu={{ menu }}>
        <div>
          <button>add</button>
        </div>

        {/* <span>
          <StyledEllipsisOutlined />
        </span> */}
      </Dropdown>
    </div>
  );
};
