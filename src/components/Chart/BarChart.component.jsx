import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import ramdomColor from 'randomcolor';

export const BarChartComponent = ({data}) => {
    const [chartData, setChartData] = useState();

    const formatData = (data) => {
        const chartData = data?.map((x,index) => {
            const tempChart = x.elements.map(el =>  ({
                value: el,
                name: el
            }))
            return tempChart;
        });
        return chartData;
    }

    useEffect(() => {
        const chartData = formatData(data);
        setChartData(chartData);
    },[data])

  return (
    <div>
      {chartData &&  chartData.map((data,index)=>(
          <>
          <h3>Chart {index+1}</h3>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={ramdomColor()} />
          </BarChart>
          </>
        )
      )}
    </div>
  );
};
