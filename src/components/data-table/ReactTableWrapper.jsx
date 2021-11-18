import React from "react";
import { useTable, useSortBy, useGroupBy, useExpanded } from "react-table";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const Table = ({ columns, data, skipPageReset, updateMyData }) => {

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, autoResetPage: !skipPageReset, updateMyData }, useGroupBy, useSortBy, useExpanded);

  const renderTableHeader = (column) => {
    const sortCondition =
      column.id === "name" || column.id === "price"
        ? { ...column.getHeaderProps(column.getSortByToggleProps()) }
        : { ...column.getHeaderProps() };

    return (
      <TableCell {...sortCondition}>
        {column.canGroupBy && column.id === "category" ? (
          // If the column can be grouped, let's add a toggle
          <span {...column.getGroupByToggleProps()}>
            {column.isGrouped ? "🛑 " : "👊 "}
          </span>
        ) : null}
        {column.id === "name" || column.id === "price" ? (
          <u>{column.render("Header")}</u>
        ) : (
          column.render("Header")
        )}

        <span>
          {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
        </span>
      </TableCell>
    );
  };

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return renderTableHeader(column);
            })}
            ;
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.isGrouped ? (
                      // If it's a grouped cell, add an expander and row count
                      <>
                        <span {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? "👇" : "👉"}
                        </span>{" "}
                        {cell.render("Cell")} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      // If the cell is aggregated, use the Aggregated
                      // renderer for cell
                      cell.render("Aggregated")
                    ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                      // Otherwise, just render the regular cell
                      cell.render("Cell")
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};
