import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    // Simulate API request
    setMessage("A password reset link has been sent to your email");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-2xl">
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your email to receive a reset link.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
              Send Reset Link
            </button>
          </form>
          {message && <p className="text-center text-sm mt-4 text-gray-700">{message}</p>}
        </div>
      </div>
    </div>
  );
}
