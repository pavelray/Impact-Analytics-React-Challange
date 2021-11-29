/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHART_TYPE } from '../../constants';
import { fetchDataStart } from '../../stores/actions/actions';
import { selectBarChartData, selectPieChartData } from '../../stores/selectors/selectors';
import { BarChartComponent } from './BarChart.component';
import { PieChartComponent } from './PieChart.component';

import './chartWrapper.css'

 

export const ChartWrapper = () => {

    const dispatch = useDispatch();
    const [chartType, setChartType] = useState(CHART_TYPE.BAR);

    useEffect(() => {
        dispatch(fetchDataStart());
    },[]);

    const barChartData = useSelector(selectBarChartData);
    const pieChartData = useSelector(selectPieChartData);

    const handleOnchange = (event) => {
        const {value} = event.target;
        setChartType(value);
    }

    return(
        <div className="chart-wrapper">
            <h1>Dashboard</h1>
            <label>Select Chart Type </label>
            <select onChange={handleOnchange}>
                <option value={CHART_TYPE.BAR}>{CHART_TYPE.BAR.toLocaleUpperCase()}</option>
                <option value={CHART_TYPE.PIE}>{CHART_TYPE.PIE.toLocaleUpperCase()}</option>
            </select>

            {chartType ===CHART_TYPE.BAR ? <BarChartComponent data={barChartData} /> : <div><PieChartComponent data={pieChartData} /></div>}
        </div>
    )
}