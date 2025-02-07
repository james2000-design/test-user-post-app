import { Card } from "../UI/Card";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import HoverModal from "../UI/hoverModal";

interface CustomerDataProps {
  title: string;
}
export const CustomerCard = ({ title }: CustomerDataProps) => {
  const Customerdata = [
    {
      name: "Veras Panna",
      icon: <img src={avatar} alt="profile" />,
      cltv: 202,
      revenue: 22035,
    },
    {
      name: "Miksa Fruzsina",
      icon: <img src={avatar2} alt="profile" />,
      cltv: 202,
      revenue: 22035,
    },
    {
      name: "Takacs Bianka",
      icon: <img src={avatar3} alt="profile" />,
      cltv: 202,
      revenue: 22035,
    },
  ];
  return (
    <Card className="w-full max-w-md p-4 bg-white mt-1">
      <div className="w-full m-0 p-0">
        <HoverModal title={title} />{" "}
        <div className=" text-start"> ₦22,035.00-</div>
      </div>

      <table className="w-full mt-4 text-left text-gray-700">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2 ">Customer</th>
            <th className="pb-2">CLTV</th>
            <th className="pb-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {Customerdata.map((data) => (
            <tr key={data.name} className="border-t border-gray-300 text-sm">
              <td className="py-2 flex items-center gap-2 ">
                <div className=""> {data.icon}</div>
                <div>
                  {data.name}
                  <span className="text-gray-400 text-[12px] flex flex-col">
                    {data.cltv} Purchases
                  </span>
                </div>
              </td>
              <td className="py-2">{data.cltv}</td>
              <td className="py-2 font-medium">₦{data?.revenue?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
