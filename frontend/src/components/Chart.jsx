import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", students: 1200, staffs: 150, management: 30 },
  { month: "Feb", students: 1180, staffs: 160, management: 28 },
  { month: "Mar", students: 1250, staffs: 155, management: 32 },
  { month: "Apr", students: 1220, staffs: 170, management: 31 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Students */}
        <Area
  type="monotone"
  dataKey="students"
  stackId="1"
  stroke="#4f46e5"
  fill="#c7d2fe"
/>

<Area
  type="monotone"
  dataKey="staffs"
  stackId="1"
  stroke="#16a34a"
  fill="#bbf7d0"
/>

<Area
  type="monotone"
  dataKey="management"
  stackId="1"
  stroke="#dc2626"
  fill="#fecaca"
/>
      </AreaChart>
    </ResponsiveContainer>
  );
}
