import { FileText } from "lucide-react";
import { Card } from "../UI/Card";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import instagram from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

interface SocialDataProps {
  title: string;
}
const SocialCard = ({ title }: SocialDataProps) => {
  const socialData = [
    {
      name: "Facebook",
      icon: <img src={facebook} alt="Facebook" />,
      impressions: 35,
      clicks: 5,
      revenue: 22035,
    },
    {
      name: "Instagram",
      icon: <img src={instagram} alt="instagram" />,
      impressions: 12,
      clicks: 8,
      revenue: 22035,
    },
    {
      name: "Twitter",
      icon: <img src={twitter} alt="twitter" />,
      impressions: 56,
      clicks: 2,
      revenue: 22035,
    },
    {
      name: "Google",
      icon: <img src={google} alt="google" />,
      impressions: 56,
      clicks: 2,
      revenue: 22035,
    },
  ];
  return (
    <Card className="w-full max-w-md p-4 bg-white mt-1">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-gray-500 mb-1  border-b border-gray-300 border-dashed">
            {title}
          </div>
          <div className=" text-start"> ₦22,035.00-</div>
        </div>
        <FileText className="w-5 h-5 mr-2" />
      </div>
      <table className="w-full mt-4 text-left text-gray-700">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2">Source</th>
            <th className="pb-2">Impressions</th>
            <th className="pb-2">Clicks</th>
            <th className="pb-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {socialData.map((source) => (
            <tr key={source.name} className="border-t border-gray-300 text-sm">
              <td className="py-2 flex items-center gap-2">
                {source.icon}
                {source.name}
              </td>
              <td className="py-2">{source.impressions}</td>
              <td className="py-2">{source.clicks}</td>
              <td className="py-2 font-medium">₦{source.revenue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default SocialCard;

export const SocialCards = ({ title }: SocialDataProps) => {
  const socialData2 = [
    {
      name: "Facebook",
      icon: <img src={facebook} alt="Facebook" />,
      Unique: 35,
      sessions: 5,
    },
    {
      name: "Instagram",
      icon: <img src={instagram} alt="instagram" />,
      Unique: 12,
      sessions: 8,
      revenue: 22035,
    },
    {
      name: "Twitter",
      icon: <img src={twitter} alt="twitter" />,
      Unique: 56,
      sessions: 2,
      revenue: 22035,
    },
    {
      name: "Google",
      icon: <img src={google} alt="google" />,
      Unique: 56,
      sessions: 2,
      revenue: 22035,
    },
  ];

  return (
    <Card className="w-full max-w-md p-4 bg-white mt-1">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-gray-500 mb-1 border-b border-gray-300 border-dashed">
            {title}
          </div>
          <div className=" text-start"> 17 -</div>
        </div>
        <FileText className="w-5 h-5 mr-2" />
      </div>
      <table className="w-full mt-4 text-left text-gray-700">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2">Source</th>
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
