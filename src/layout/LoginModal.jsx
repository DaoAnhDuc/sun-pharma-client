import { useState } from "react";
import { toast } from "react-toastify";
import { SERVER } from "../util";

export default function LoginModal({ isOpen, onClose, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  if (!isOpen) return null;

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await SERVER.API?.post("/api/login", { username, password });
      if (res.status === 200) {
        toast.success(res.data.message);
        setIsLogin(true);
        onClose();
      }
    } catch (error) {
      toast.error(error.message);
      setIsLogin(false);
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-xl p-6 relative">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--primary-color)]">Đăng nhập</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tài khoản</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md transition cursor-pointer" onClick={onLogin}>
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
