export const pagination = {
  pageSizeOptions: ["8", "16", "24", "32"],
  defaultPageSize: 8,
  showSizeChanger: true,
  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
  locale: { items_per_page: "rows per page" },
};
