import { EditableCell } from "./components/data-table/EditableCell";

export const API_END_PONT =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/reciped9d7b8c.json";

export const TABLE_COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: (cell) => <img src={cell.value} alt={cell.value} width="80" height="80"/>
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Label",
    accessor: "label",
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: EditableCell
  },
  {
    Header: "Description",
    accessor: "description",
  },
];
