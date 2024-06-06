"use client"

import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'PR Open',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'PR Merged',
    uv: 3000,
    amt: 2210,
  },
  {
    name: 'Commits',
    uv: 2000,
    amt: 2290,
  },
  {
    name: 'PR Reviewed',
    uv: 2780,
    amt: 2000,
  },
  {
    name: 'PR Comments',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Incident Alerts',
    uv: 2390,
    amt: 2500,
  },
  {
    name: 'Incident Resolved',
    uv: 3490,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 45,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
     
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}