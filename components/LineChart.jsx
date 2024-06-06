"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PR_Open_Data = [
  {
    Date: '2024-05-06',
    developer1_count: 0,
    developer2_count: 1,
    developer3_count: 0,
    developer4_count: 1,
  
  },
  {
    Date: '2024-05-07',
    developer1_count: 1,
    developer2_count: 1,
    developer3_count: 0,
    developer4_count: 0,
  
  },
  {
    Date: '2024-05-08',
    developer1_count: 0,
    developer2_count: 3,
    developer3_count: 0,
    developer4_count: 0,
   
  },
  {
    Date: '2024-05-09',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 1,
    developer4_count: 0,
  
  },
  {
    Date: '2024-05-10',
    developer1_count: 0,
    developer2_count: 2,
    developer3_count: 0,
    developer4_count: 0,

  },
  {
    Date: '2024-05-11',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,
 
  },
  {
    Date: '2024-05-12',
    developer1_count: 3490,
    developer2_count: 4300,
    developer3_count: 2000,
    developer4_count: 3400,

  },
  {
    Date: '2024-05-13',
    developer1_count: 4000,
    developer2_count: 2400,
    developer3_count: 4900,
    developer4_count: 2800,

  },
  {
    Date: '2024-05-14',
    developer1_count: 3000,
    developer2_count: 1398,
    developer3_count: 4600,
    developer4_count: 2600,

  },
  {
    Date: '2024-05-15',
    developer1_count: 2000,
    developer2_count: 9800,
    developer3_count: 4000,
    developer4_count: 2400,
  },
  {
    Date: '2024-05-16',
    developer1_count: 2780,
    developer2_count: 3908,
    developer3_count: 4500,
    developer4_count: 2300,
  
  },
  {
    Date: '2024-05-17',
    developer1_count: 1890,
    developer2_count: 4800,
    developer3_count: 4000,
    developer4_count: 2100,

  },
  {
    Date: '2024-05-18',
    developer1_count: 2390,
    developer2_count: 3800,
    developer3_count: 1900,
    developer4_count: 2200,

  },
  {
    Date: '2024-05-19',
    developer1_count: 3490,
    developer2_count: 4300,
    developer3_count: 3100,
    developer4_count: 3400,
  },
];

const LineGraph = ({data}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={PR_Open_Data}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Line type="monotone" dataKey="developer1_count" stroke="#82ca9d" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="developer2_count" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="developer3_count" stroke="#5BBB7B" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="developer4_count" stroke="#1e90ff" activeDot={{ r: 8 }}/>
      </LineChart>
    </ResponsiveContainer>
  );
}


export default LineGraph;