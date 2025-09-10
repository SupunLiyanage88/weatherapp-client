import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/dashboard"); // redirect after login
    } catch (err: any) {
      setError(err.response?.data || "Login failed");
    }
  };

  const handleDemoLogin = () => {
    setEmail("careers@fidenz.com");
    setPassword("Pass#fidenz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6c5dd3] to-[#7c6ddc]">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 relative overflow-hidden">
        {/* Decorative elements */}

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
                ></path>
              </svg>
              <h1 className="text-3xl font-bold text-white">WeatherApp</h1>
            </div>
          </div>

          {error && (
            <div className="bg-red-400/20 text-red-100 px-4 py-3 rounded-lg mb-4 border border-red-300/30">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-purple-100">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 placeholder-purple-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-purple-100">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30 placeholder-purple-200"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#6c5dd3] font-semibold py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <button
              onClick={handleDemoLogin}
              className="w-full bg-yellow-400/90 text-[#6c5dd3] font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Use Demo Account
            </button>
          </div>

          <p className="text-center text-purple-100 mt-8 text-sm">
            Demo credentials will be auto-filled
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
