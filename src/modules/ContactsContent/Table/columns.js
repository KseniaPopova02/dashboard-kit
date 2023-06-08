import {
  StyledLastTdWrapper,
  StyledNameWrapper,
  StyledAvatar,
  StyledUserAvatar,
} from "./style";
import { ReactComponent as Avatar } from "../../../assets/svg/avatar.svg";
import { DropDownMenu } from "../DropDownMenu";

export const tableColumns = (handleDelete, handleEdit) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",

    render: (_, record) => (
      <StyledNameWrapper>
        {record.photo ? (
          <StyledUserAvatar src={record.photo} />
        ) : (
          <StyledAvatar>
            <Avatar />
          </StyledAvatar>
        )}
        {record.firstName} {record.lastName}
      </StyledNameWrapper>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Created at",
    dataIndex: "date",
    key: "date",

    render: (_, record) => (
      <StyledLastTdWrapper>
        <span>{record.date}</span>
        <DropDownMenu
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          contactId={record.id}
        />
      </StyledLastTdWrapper>
    ),
  },
];
