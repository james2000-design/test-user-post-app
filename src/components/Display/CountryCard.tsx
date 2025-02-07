import { Card } from "../UI/Card";
import flags from "../../assets/flags1.png";
import flag2 from "../../assets/flag2.png";
import flag3 from "../../assets/flags3.png";
import flag4 from "../../assets/flags4.png";
import HoverModal from "../UI/hoverModal";

interface CountryDataProps {
  title: string;
}
export const TrafficCard = ({ title }: CountryDataProps) => {
  const socialData = [
    {
      name: "Search engine",
      Unique: 35,
      sessions: 5,
    },
    {
      name: "Social media",
      Unique: 12,
      sessions: 8,
    },
    {
      name: "Direct",
      Unique: 56,
      sessions: 2,
    },
    {
      name: "Referrals",
      Unique: 56,
      sessions: 2,
    },
  ];
  return (
    <Card className="w-full max-w-md p-4 bg-white mt-1 ">
      <div className="">
        <HoverModal title={title} />
        <div className=" text-left">17 -</div>
      </div>
      {/*  */}
      <table className="w-full mt-4 text-left text-gray-700">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2 ">Source</th>
            <th className="pb-2">Unique Visitors</th>
            <th className="pb-2">Sessions</th>
          </tr>
        </thead>
        <tbody>
          {socialData.map((data) => (
            <tr key={data.name} className="border-t border-gray-300 text-sm">
              <td className="py-2">{data.name}</td>
              <td className="py-2">{data.Unique}</td>
              <td className="py-2 ">{data.sessions.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export const CountryCard = ({ title }: CountryDataProps) => {
  const socialData2 = [
    {
      name: "Australia",
      icon: <img src={flags} alt="Facebook" />,
      Unique: 35,
      sessions: 5,
    },
    {
      name: "Nigeria",
      icon: <img src={flag2} alt="instagram" />,
      Unique: 12,
      sessions: 8,
      revenue: 22035,
    },
    {
      name: "Canada",
      icon: <img src={flag3} alt="twitter" />,
      Unique: 56,
      sessions: 2,
      revenue: 22035,
    },
    {
      name: "USA",
      icon: <img src={flag4} alt="google" />,
      Unique: 56,
      sessions: 2,
      revenue: 22035,
    },
  ];
  return (
    <Card className="w-full max-w-md p-4 bg-white mt-1">
      <div className="">
        <HoverModal title={title} />
        <div className=" font-medium text-left">17 -</div>
      </div>
      {/*  */}
      <table className="w-full mt-4 text-left text-gray-700">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2 ">Country</th>
            <th className="pb-2">Unique Visitors</th>
            <th className="pb-2">Sessions</th>
          </tr>
        </thead>
        <tbody>
          {socialData2.map((data) => (
            <tr key={data.name} className="border-t border-gray-300 text-sm">
              <td className="py-2 flex items-center gap-2">
                {data.icon}
                {data.name}
              </td>
              <td className="py-2">{data.Unique}</td>
              <td className="py-2 font-medium">₦{data.sessions.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
