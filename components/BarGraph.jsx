"use client"

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// const data = [
//   {
//     name: 'PR Open',
//     uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: 'PR Merged',
//     uv: 3000,
//     amt: 2210,
//   },
//   {
//     name: 'Commits',
//     uv: 2000,
//     amt: 2290,
//   },
//   {
//     name: 'PR Reviewed',
//     uv: 2780,
//     amt: 2000,
//   },
//   {
//     name: 'PR Comments',
//     uv: 1890,
//     amt: 2181,
//   },
//   {
//     name: 'Incident Alerts',
//     uv: 2390,
//     amt: 2500,
//   },
//   {
//     name: 'Incident Resolved',
//     uv: 3490,
//     amt: 2100,
//   },
// ];



const BarGraph = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data.chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 45,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />

        {/* <Bar dataKey="value" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="purple" />} /> */}


        <Bar dataKey="count" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="purple" />}>
          {data.chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fillColor} />
          ))}
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;
