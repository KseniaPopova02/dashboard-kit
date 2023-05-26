import {
  StyledTable,
  StyledTableWrapper,
  StyledLastTdWrapper,
  StyledNameWrapper,
  StyledAvatar,
} from "./style";
import { DropDownMenu } from "../DropDownMenu";
import { UserOutlined } from "@ant-design/icons";

export const Table = ({ handleDelete, contacts }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (_, record) => (
        <StyledNameWrapper>
          {record.photo ? (
            <StyledAvatar src={record.photo} />
          ) : (
            <StyledAvatar icon={<UserOutlined />} />
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
          <DropDownMenu handleDelete={handleDelete} contactId={record.id} />
        </StyledLastTdWrapper>
      ),
    },
  ];
  return (
    <StyledTableWrapper>
      <StyledTable pagination={false} dataSource={contacts} columns={columns} />
    </StyledTableWrapper>
  );
};
