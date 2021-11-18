import { createSelector } from 'reselect';

const tableData = state => state.tableData.data;

export const selectTableData = createSelector(
    [tableData],
    data => data
)
