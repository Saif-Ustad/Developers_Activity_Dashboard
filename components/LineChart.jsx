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
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,

  },
  {
    Date: '2024-05-13',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,

  },
  {
    Date: '2024-05-14',
    developer1_count: 0,
    developer2_count: 1,
    developer3_count: 2,
    developer4_count: 1,

  },
  {
    Date: '2024-05-15',
    developer1_count: 0,
    developer2_count: 1,
    developer3_count: 0,
    developer4_count: 0,
  },
  {
    Date: '2024-05-16',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,
  
  },
  {
    Date: '2024-05-17',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,

  },
  {
    Date: '2024-05-18',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,

  },
  {
    Date: '2024-05-19',
    developer1_count: 0,
    developer2_count: 0,
    developer3_count: 0,
    developer4_count: 0,
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
          bottom: 45,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        
        <Line type="monotone" dataKey="developer1_count" stroke="#82ca9d" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="developer2_count" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="developer3_count" stroke="#5BBB7B" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="developer4_count" stroke="#1e90ff" activeDot={{ r: 8 }}/>
      </LineChart>
    </ResponsiveContainer>
  );
}


export default LineGraph;