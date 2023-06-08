import { StyledTable, StyledTableWrapper } from "./style";
import { pagination } from "./pagination";
import { tableColumns } from "./columns";

export const Table = ({ handleDelete, handleEdit, contacts }) => {
  const columns = tableColumns(handleDelete, handleEdit);

  return (
    <StyledTableWrapper>
      <StyledTable
        pagination={pagination}
        dataSource={contacts}
        columns={columns}
      />
    </StyledTableWrapper>
  );
};
