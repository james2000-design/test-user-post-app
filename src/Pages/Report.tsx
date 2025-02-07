import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPosts, fetchUsers } from "../Features/posts/postSlice";
import { Search, ArrowDownUp, ChevronDown } from "lucide-react";

const PostTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, status, users, error } = useSelector(
    (state: RootState) => state.posts
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getUserById = (userId: number) => {
    return users.find((user) => user.id === userId)?.name ?? "Unknown User";
  };

  const handleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = [...filteredPosts];
  sortedPosts.sort((a, b) => {
    const compare = a.title.localeCompare(b.title);
    return sortDirection === "asc" ? compare : -compare;
  });

  return (
    <div className="bg-[#FFFFFF] border-gray-200 pt-2 rounded-lg">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between px-2 py-1">
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 transform -translate-y-1/2 text-gray-400 w-4 h-4 " />
            <input
              type="text"
              placeholder="Search reports"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border bg-[#F9F9FA] border-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button
            onClick={handleSort}
            className="ml-2 px-4 py-2 bg-gray-50 border-white rounded-md hover:bg-gray-50 inline-flex items-center text-sm"
          >
            <ArrowDownUp className="w-4 h-4" />
            Sort
          </button>
          <button className="ml-2 px-4 py-2 bg-gray-50 border-white shadow-2xl rounded-md hover:bg-gray-50 inline-flex items-center text-sm">
            Category
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-500">
          {sortedPosts.length} results
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Last Viewed</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" && (
            <tr>
              <td colSpan={3} className="p-4 text-center">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={3} className="p-4 text-center text-red-500">
                {error}
              </td>
            </tr>
          )}
          {!error &&
            status !== "loading" &&
            sortedPosts.map(
              (post: { id: number; title: string; userId: number }) => (
                <tr
                  key={post.id}
                  className="border-t text-center sm:text-start border-gray-300 text-sm"
                >
                  <td className="border-t border-gray-300 text-sm p-2">
                    {post.title}
                  </td>
                  <td className=" text-sm p-2 flex  ">
                    <span className="bg-gray-200 px-2 py-1 text-center rounded">
                      {getUserById(post.userId)}
                    </span>
                  </td>
                  <td className="border-t border-gray-300 text-sm p-2"></td>
                  <td className="border-t border-gray-300 text-sm p-2"></td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
