import { useState } from "react";
import { Card } from "./Card";
import { FileText } from "lucide-react";

interface HoverModalProps {
  title: string;
}

const HoverModal = ({ title }: HoverModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Card className=" relative !p-0 !m-0">
      <button
        className="w-full "
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="flex justify-between items-center mb-1">
          <div className="text-sm cursor-pointer border-b border-gray-300 border-dashed ">
            {title}
          </div>
          <FileText className="w-5 h-5 " />
        </div>
        {isVisible && (
          <div className="absolute left-0 top-0  w-[90%] h-auto bg-[white] py-2 shadow-xl border-2 rounded-md border-gray-100 z-10">
            <p className="text-sm text-gray-500 pb-2 text-left px-2">{title}</p>
            <p>The percentage of customers who make repeat purchase</p>
            <button className="mt-4 w-full py-1 text-sm   border-t border-gray-300">
              <span className=" text-sm border-gray-300 border-b border-dashed  text-gray-500 cursor-pointer">
                View Report
              </span>
            </button>
          </div>
        )}
      </button>
    </Card>
  );
};

export default HoverModal;
