import { Card } from "../UI/Card";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import avatar7 from "../../assets/avatar7.png";
import HoverModal from "../UI/hoverModal";

interface TopSellingProps {
  title: string;
}

const TopSelling = ({ title }: TopSellingProps) => {
  const topData = [
    {
      name: "Fresh Lemon Fruits",
      icon: <img src={avatar4} alt="Fresh Lemon" />,
      sku: 41152845,
      qty: 203,
    },
    {
      name: "Barista Drink Latte Lit",
      icon: <img src={avatar5} alt="drink" />,
      sku: 41152845,
      qty: 203,
    },
    {
      name: "Essential Waitrose",
      icon: <img src={avatar6} alt="waitrose" />,
      sku: 916691,
      qty: 203,
    },
    {
      name: "Freshfarm Spaghetti",
      icon: <img src={avatar7} alt="spagetti" />,
      sku: 75452711,
      qty: 203,
    },
  ];
  return (
    <Card className="w-full max-w-md p-2 bg-white ">
      <div className=" mb-4">
        <HoverModal title={title} />
      </div>

      <table className="w-full mt-4 text-left text-gray-700">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="pb-2">Product</th>
            <th className="pb-2">SKU</th>
            <th className="pb-2">Qty</th>
          </tr>
        </thead>
        <tbody>
          {topData.map((data) => (
            <tr key={data.name} className="border-t border-gray-300 text-sm">
              <td className="py-2 flex items-center gap-2">
                {data.icon}
                {data.name}
              </td>
              <td className="py-2">{data.sku}</td>
              <td className="py-2">{data.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TopSelling;
