import { Search, ChevronDown, ArrowDownUp } from "lucide-react";
import SocialCard, { SocialCards } from "../components/Display/SocialCard";
import { CountryCard, TrafficCard } from "../components/Display/CountryCard";
import SalesCard, { ReturnCard } from "../components/Display/SalesCard";
import { CustomerCard } from "../components/Display/CustomerCard";
import TopSelling from "../components/Display/TopSelling";
import ConversionRateCard from "../components/Display/RateCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchPosts } from "../Features/posts/postSlice";

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, status } = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);
  const displayedPosts = posts.slice(0, 15);
  return (
    <div className="min-h-screen w-full ">
      <div className="w-full py-1 space-y-4">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 transform -translate-y-1/2 text-gray-400 w-4 h-4 " />
              <input
                type="text"
                placeholder="Search reports"
                className="w-full pl-10 pr-4 py-2 border bg-[#F9F9FA] border-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button className="ml-2 px-4 py-2 bg-white border-white rounded-md hover:bg-gray-50 inline-flex items-center text-sm">
              <ArrowDownUp className="w-4 h-4" />
              Sort
            </button>
            <button className="ml-2 px-4 py-2 bg-white border-white rounded-md hover:bg-gray-50 inline-flex items-center text-sm">
              Category
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {displayedPosts.length} results
          </div>
        </div>
      </div>
      <div className="  w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {posts.slice(0, 5).map((post) => (
          <SalesCard key={post.id} title={post.title} />
        ))}
        {posts.slice(5, 7).map((post) => (
          <SocialCard key={post.id} title={post.title} />
        ))}
        <SalesCard title={posts[7]?.title || "Sales Overview"} />
        <TopSelling title={posts[8]?.title || "Top Selling"} />
        <CustomerCard title={posts[9]?.title || "Customer Insights"} />
        <ReturnCard title={posts[10]?.title || "Returns"} />
        <ConversionRateCard title={posts[11]?.title || "Conversion Rate"} />
        <CountryCard title={posts[12]?.title || "Country Performance"} />
        <SocialCards title={posts[13]?.title || "Social Media Insights"} />
        <TrafficCard title={posts[14]?.title || "Traffic Overview"} />
      </div>
    </div>
  );
}
