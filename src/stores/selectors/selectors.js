import { createSelector } from 'reselect';
import { CHART_TYPE } from '../../constants';

const chartData = state => state.chartData.data;

export const selectChartData = createSelector(
    [chartData],
    data => data
)

export const selectBarChartData = createSelector(
    [chartData],
    data => data?.filter(x=> x.type === CHART_TYPE.BAR)
)

export const selectPieChartData = createSelector(
    [chartData],
    data => data?.filter(x=> x.type === CHART_TYPE.PIE)
)

