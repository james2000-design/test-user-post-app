import { Card } from "../UI/Card";
import HoverModal from "../UI/hoverModal";

interface ConversionRateCardProps {
  title: string;
}

const ConversionRateCard = ({ title }: ConversionRateCardProps) => {
  const conversionData = [
    {
      label: "Added to cart",
      sessions: 0,
      percentage: "0.00%",
    },
    {
      label: "Reached checkout",
      sessions: 0,
      percentage: "0.00%",
    },
    {
      label: "Sessions converted",
      sessions: 0,
      percentage: "0.00%",
    },
  ];

  return (
    <Card className="w-full max-w-md  py-1 bg-white mt-1">
      <div className="w-full ">
        <HoverModal title={title} />
        <div className=" text-left"> 0% -</div>
      </div>
      <table className="w-full">
        <tbody>
          {conversionData.map((item) => (
            <tr
              key={item.label}
              className="text-start p-4  border-b border-gray-300  "
            >
              <td className="py-2">
                <div className="text-sm text-gray-600 ">{item.label}</div>
                <div className="text-xs text-gray-500 border-b-gray-500">
                  {item.sessions} sessions
                </div>
              </td>
              <td className="text-right text-sm text-gray-800">
                {item.percentage}
              </td>
              <td className="text-center px-4">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ConversionRateCard;
