import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../UI/Card";
import HoverModal from "../UI/hoverModal";

interface SalesCardProps {
  title: string;
}
const SalesCard = ({ title }: SalesCardProps) => {
  const data = [
    { time: "12:00 AM", value: 0 },
    { time: "5:00 AM", value: 0 },
    { time: "10:00 AM", value: 0 },
    { time: "3:00 PM", value: 0 },
    { time: "8:00 PM", value: 0 },
  ];
  return (
    <Card className="w-full max-w-md p-4 bg-white mt-1">
      <div className="text-sm text-gray-500 mb-1">
        <HoverModal title={title} />
        <div className="text-start">₦0.00 -</div>
      </div>

      <div className="  h-32 mt-4 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, bottom: 5, left: -30 }}>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
              ticks={[0, 5, 10]}
            />
            <ReferenceLine y={10} />
            <ReferenceLine y={5} />
            <ReferenceLine y={0} stroke="#AE4551" strokeDasharray="10" />
            <Line
              type="linear"
              dataKey="value"
              stroke="#AE4551"
              strokeWidth={1.5}
              dot={false}
              data={[
                { time: "12:00 AM", value: 0 },
                { time: "5:00 AM", value: 0 },
              ]}
              className="pl-4"
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#AE4551"
              strokeWidth={1.5}
              strokeDasharray="5 5"
              dot={false}
              data={[
                { time: "5:00 AM", value: 0 },
                { time: "8:00 PM", value: 0 },
              ]}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-end gap-8 mt-2 mr-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-px border-1 bg-[#AE4551] "></div>
          <span>Aug 19, 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-px border-t border-1 border-[#AE4551] border-dashed"></div>
          <span>Aug 18, 2024</span>
        </div>
      </div>
    </Card>
  );
};

export default SalesCard;

export const ReturnCard = ({ title }: SalesCardProps) => {
  const data = [
    { time: "12:00 AM", value: 0 },
    { time: "5:00 AM", value: 0 },
    { time: "10:00 AM", value: 0 },
    { time: "3:00 PM", value: 0 },
    { time: "8:00 PM", value: 0 },
  ];
  return (
    <Card className="w-full max-w-md px-4  bg-white mt-1">
      <div className="text-sm text-gray-500 ">
        <HoverModal title={title} />
        <div className="text-start">₦0.00 -</div>
      </div>
      <div className="  h-32 mt-4 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, bottom: 5, left: -30 }}>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
              ticks={[0, 5, 10]}
            />
            <ReferenceLine y={10} />
            <ReferenceLine y={5} />
            <ReferenceLine y={0} stroke="#FBBF24" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-end gap-8 mt-2 mr-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-px bg-green-600 border-1"></div>
          <span>Aug 19, 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-px border-t border-1 border-[#FBBF24] border-dashed"></div>
          <span>Aug 18, 2024</span>
        </div>
      </div>
    </Card>
  );
};
