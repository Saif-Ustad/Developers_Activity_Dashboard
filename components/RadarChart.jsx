"use client"
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     subject: 'PR Open',
//     A: 12,
//     B: 11,
//     fullMark: 15,
//   },
//   {
//     subject: 'PR Merged',
//     A: 9,
//     B: 1,
//     fullMark: 10,
//   },
//   {
//     subject: 'Commits',
//     A: 8,
//     B: 13,
//     fullMark: 15,
//   },
//   {
//     subject: 'PR Reviewed',
//     A: 9,
//     B: 10,
//     fullMark: 10,
//   },
//   {
//     subject: 'PR Comments',
//     A: 8,
//     B: 9,
//     fullMark: 60,
//   },
//   {
//     subject: 'Incident Alerts',
//     A: 6,
//     B: 8,
//     fullMark: 20,
//   },
//   {
//     subject: 'Incident Resolved',
//     A: 32,
//     B: 25,
//     fullMark: 40,
//   },
// ];

const RadarGraph = ({ data }) => {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.CombineData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="label" />
        <PolarRadiusAxis angle={30} />
        <Radar name={`${data.developer}'s activity`} dataKey="developer_count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Total Activity" dataKey="total_count" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarGraph;