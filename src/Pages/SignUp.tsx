import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../Features/auth/authSlice"; // Ensure you have a signup action
import { AppDispatch, RootState } from "../redux/store";

interface User {
  id?: number;
  name?: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
  website?: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    dispatch(signup(formData));
    navigate("/dashboard");
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex items-center justify-center ">
      <div className="p-6 rounded-2xl shadow-lg w-full max-w-md bg-white border-2 border-gray-200">
        {error && (
          <div className="mb-4 p-2 text-red-600 bg-red-100 rounded-lg text-sm">
            {error}
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Sign Up</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            ✖
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-left text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="mt-1 block w-full px-4 py-2 bg-[#F9F9FA] border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="mt-1 block w-full px-4 bg-[#F9F9FA] py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="mt-1 block w-full px-4 py-2 bg-[#F9F9FA] border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-left text-gray-700 flex justify-between"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 bg-[#F9F9FA] py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-left text-gray-700 flex justify-between"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 block w-full bg-[#F9F9FA] px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                aria-label="Toggle Confirm Password Visibility"
              >
                {confirmPasswordVisible ? "👁" : "👁‍🗨"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#9A1725] text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            className="text-[#9A1725] font-semibold hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>

        <p className=" font-light text-[14px] mt-2 ">
          Please visit{" "}
          <span className="underline cursor-pointer">
            Afrikobo Privacy Statement
          </span>{" "}
          to learn more about personaldata processing at Afrikobo. The Afrikobo{" "}
          <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
          <span className="underline cursor-pointer"> Terms of Service</span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
