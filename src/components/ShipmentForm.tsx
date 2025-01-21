// src/components/ShipmentForm.tsx
import { useState } from "react";
import { toast } from "react-toastify";

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
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.postalCode || !form.country) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Here you would usually handle the form submission, e.g., sending data to a server
    toast.success("Shipping information successfully submitted!");
    setForm({ name: "", email: "", phone: "", address: "", city: "", postalCode: "", country: "", notes: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="example@example.com"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            placeholder="+1 123-456-7890"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Shipping Address */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium">Shipping Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            placeholder="123 Main St"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            placeholder="New York"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-gray-700 font-medium">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={form.postalCode}
            onChange={handleInputChange}
            placeholder="10001"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-gray-700 font-medium">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={handleInputChange}
            placeholder="USA"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Notes (Optional) */}
        <div>
          <label htmlFor="notes" className="block text-gray-700 font-medium">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleInputChange}
            placeholder="Any special instructions or requests?"
            className="mt-2 p-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-yellow-500 text-white py-3 px-6 rounded-md w-full text-lg font-semibold transition-all hover:bg-yellow-600"
          >
            Submit Shipping Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipmentForm;
