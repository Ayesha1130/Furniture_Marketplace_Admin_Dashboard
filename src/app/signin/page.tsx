"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@example.com"; // Fetch from env
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "adminpassword"; // Fetch from env

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when starting the request

    // Check if the entered credentials match the admin email and password
    if (username === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setLoading(false); // Set loading to false when done
      router.push("/admin"); // Redirect to admin dashboard
    } else {
      setLoading(false); // Set loading to false when done
      setError("Invalid credentials"); // Show error message if invalid credentials
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-teal-500">
      <Card className="w-full max-w-md shadow-xl border-0 rounded-lg bg-white p-8">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-center text-gray-800">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 rounded-lg py-3 px-4 text-lg"
              />
            </div>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 rounded-lg py-3 px-4 text-lg"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 py-3 px-4 rounded-lg transition-all"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
