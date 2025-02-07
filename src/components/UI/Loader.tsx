import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    setIsSlidingUp(false);

    const timer = setTimeout(() => {
      setIsSlidingUp(true);
      setTimeout(() => setIsVisible(false), 500);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);
  if (!isVisible) return null;
  return (
    <div
      className={`fixed inset-0 bg-white w-full z-50 flex items-center justify-center transition-transform duration-500 ${
        isSlidingUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative border border-transparent rounded-md">
        <span className="absolute top-1/2 left-1/2 w-[45px] h-[45px] mt-[-10px] ml-[-23px] rounded-full border border-[#959595] border-t-white animate-spin"></span>
      </div>
    </div>
  );
};

export default Loader;
