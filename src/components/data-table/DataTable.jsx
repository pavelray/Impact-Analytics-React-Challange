/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TABLE_COLUMNS } from "../../constants";
import { fetchDataStart, resetData, updateTableData, saveTableData } from "../../stores/actions/dataTable.actions";
import { selectTableData } from "../../stores/selectors/dataTable.selectors";
import { Table } from "./ReactTableWrapper";

export const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectTableData);
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const [skipPageReset, setSkipPageReset] = useState(false);

  useEffect(() => {
    dispatch(fetchDataStart());
  }, []);

  useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    const updatedData = data.map((row, index) => {
      if (index === rowIndex) {
        return {
          ...data[rowIndex],
          [columnId]: value,
        };
      }
      return row;
    });
    dispatch(updateTableData(updatedData));
  };

  const resetTableData = () => {
    dispatch(resetData());
  }

  const saveData = () => {
    dispatch(saveTableData(data));
  }

  return (
    <div>
      <button onClick={resetTableData}> Reset Data </button>
      <button onClick={saveData}> Save Data </button>
      {data && <Table columns={columns} data={data} updateMyData={updateMyData}
        skipPageReset={skipPageReset} />}
    </div>
  );
};
