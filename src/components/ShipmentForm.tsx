"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ShipmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    notes: "",
    paymentMethod: "Cash on Delivery",
  });
  const [orderId, setOrderId] = useState<string | null>(null);
  const router = useRouter(); // useRouter hook for navigation

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.postalCode || !form.country) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const newOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    toast.success("Order placed successfully!");

    // Clear the cart if using local storage
    localStorage.removeItem("cart");

    // Redirect to the 'Thank You' page
    router.push("/thankyou"); // Ensure the correct path is used
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Billing & Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-700 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700 font-medium">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-gray-700 font-medium">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700 font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
            required
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-gray-700 font-medium">Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border rounded-lg"
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Bank Deposit">Bank Deposit</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-yellow-500 text-white py-3 px-6 rounded-md w-full text-lg font-semibold"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipmentForm;
