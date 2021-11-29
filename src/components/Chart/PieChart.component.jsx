import React, { useEffect, useState } from 'react';
import ramdomColor from 'randomcolor';
import { PieChart, Pie } from 'recharts';

export const PieChartComponent = ({data}) => {
    const [chartData, setChartData] = useState();

    const formatData = (data) => {
        const chartData = data?.map((x,index) => {
            return x.elements.map(el =>  ({
                value: el,
                name: index+1
            })
        )})

        return chartData;
    }

    useEffect(() => {
        const chartData = formatData(data);
        setChartData(chartData);
    },[data])

    return(
        <div>
            {
                chartData && chartData.map((data, index) => (
                    <>
                    <h3>Pie Chart {index+1}</h3>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            data={data}
                            fill={ramdomColor()}
                            label
                        />
                    </PieChart>
                    </>
                ))
            }
        </div>
    )
}