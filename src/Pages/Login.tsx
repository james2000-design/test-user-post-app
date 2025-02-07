import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Features/auth/authSlice";
import { RootState, AppDispatch } from "../redux/store";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const storedUsers = JSON.parse(localStorage.getItem("users") ?? "[]");

    const foundUser = storedUsers.find(
      (user: { email: string; password: string }) =>
        user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      dispatch(login(foundUser));
    } else {
      setError("No user found. Please sign up first.");
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex items-center justify-center ">
      <div className=" relative p-6 rounded-2xl shadow-lg w-full max-w-md bg-white border-2 border-gray-200">
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-2 text-[#9A1725] bg-red-100 rounded-lg text-sm">
            {error}
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Sign into your account
          </h2>
          <button
            className="text-white hover:text-gray-700 focus:outline-none absolute top-2 right-3 rounded-full bg-black w-6 h-6"
            aria-label="Close"
          >
            ✖
          </button>
        </div>
        <div className="flex items-center justify-center w-full my-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium">Or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 bg-[#F9F9FA] border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 flex justify-between"
            >
              Password{}
              <button
                type="button"
                className="text-[#9A1725] text-sm hover:underline cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 bg-[#F9F9FA] border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                onClick={() => setPasswordVisible(!passwordVisible)}
                aria-label="Toggle Password Visibility"
              >
                {passwordVisible ? "👁" : "👁‍🗨"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#9A1725] text-white py-2 rounded-lg hover:bg-[#9A1725] transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-[#9A1725] font-semibold hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
