/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUserDataStart } from "../../stores/actions/actions";
import {
  selectUserCordinates,
  selectUserData,
  selectUserName,
} from "../../stores/selectors/user.selectors";
import "leaflet/dist/leaflet.css";
import { icon, TABLE_COLUMNS } from "../../constants";
import { formatResponceToTableData } from "../../utils";
const TableLazy = React.lazy(() => import('./UserTable'));

export const UserMap = () => {
    
    const columns = useMemo(() => TABLE_COLUMNS, []);
    const dispatch = useDispatch();
    const [userTableData, setUserTableData] = useState();

    useEffect(() => {
        dispatch(fetchUserDataStart());
    }, []);

  const position = useSelector(selectUserCordinates);
  const userName = useSelector(selectUserName);
  const positionArr = [position?.latitude, position?.longitude];
  const tableData = useSelector(selectUserData);

  const showUserDetails = () => {
    const formattedData = formatResponceToTableData(tableData);
    setUserTableData(formattedData);
  };

  return (
    <div>
      {position && (
        <MapContainer
          center={positionArr}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionArr} icon={icon} 
            eventHandlers={{
                click: () => {
                    showUserDetails();
                },
            }}>
            <Popup>{userName}</Popup>
            <Tooltip>Click to see user details</Tooltip>
          </Marker>
        </MapContainer>
      )}
      {
        userTableData && <Suspense fallback={<div>Loading Table Data...</div>}>
        <div style={{width: '780px'}}>

            <TableLazy columns={columns}
            data={userTableData} />
          </div>
        </Suspense>
      }
      
    </div>
  );
};

export default UserMap;
