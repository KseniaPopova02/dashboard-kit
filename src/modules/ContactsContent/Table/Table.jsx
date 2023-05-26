import {
  StyledTable,
  StyledTableWrapper,
  StyledLastTdWrapper,
  StyledNameWrapper,
  StyledAvatar,
} from "./style";
import { DropDownMenu } from "../DropDownMenu";
import { UserOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

const CustomPagination = ({ pageSizeOptions, defaultPageSize, showTotal }) => {
  return (
    <div>
      <div>{pageSizeOptions}</div>
      <div>{defaultPageSize}</div>
      <div>{showTotal}</div>
    </div>
  );
};

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
      <StyledTable
        pagination={{
          pageSizeOptions: ["8", "16", "24", "32"],
          defaultPageSize: 8,
          showSizeChanger: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
          paginationComponent: CustomPagination,
        }}
        dataSource={contacts}
        columns={columns}
      />
    </StyledTableWrapper>
  );
};
