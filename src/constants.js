import L from "leaflet";

export const API_END_PONT = "https://randomuser.me/api/";

export const TABLE_COLUMNS = [
  {
    Header: "User Info",
    columns: [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Cordinates",
        accessor: "coordinates",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "DOB",
        accessor: "dob",
      },
      {
        Header: "Registered Date",
        accessor: "registered",
      },
      {
        Header: "Phone No",
        accessor: "phone",
      },
      {
        Header: "Cell No",
        accessor: "cell",
      },
      {
        Header: "Nationality",
        accessor: "nat",
      },
    ],
  },
  {
    Header: "Picture",
    columns: [
      {
        Header: "Large Image",
        accessor: "image.large",
        Cell: (cell) => <img src={cell.value} alt={cell.value} width="80" height="80"/>
      },
      {
        Header: "Medium Image",
        accessor: "image.medium",
        Cell: (cell) => <img src={cell.value} alt={cell.value} width="80" height="80"/>
      },
      {
        Header: "Thumbnail Image",
        accessor: "image.thumbnail",
        Cell: (cell) => <img src={cell.value} alt={cell.value} width="80" height="80"/>
      },
    ]
  }
];

export const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});
