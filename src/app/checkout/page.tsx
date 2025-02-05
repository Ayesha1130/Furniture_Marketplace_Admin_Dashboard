"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ICart {
  name: string;
  image: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function CheckoutForm() {
  const [cartItem, setCartItem] = useState<ICart[]>([]);
  const [shipCost, setShipCost] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    postalCode: "",
    locality: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    setCartItem(cart);

    const ShipmentData = localStorage.getItem("ShipmentData");
    const shipData = ShipmentData ? JSON.parse(ShipmentData) : [];
    const shipCost = shipData?.shipment_cost?.amount
      ? shipData.shipment_cost.amount.toFixed(2)
      : 0; // default to 0 if not available
    setShipCost(Number(shipCost)); // ensure it's a number
  }, []);

  const totalAmount =
    cartItem.reduce(
      (acc: number, item: ICart) => acc + item.price * item.quantity,
      0
    ) + shipCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      validateForm(updatedData); // Validate the form when any field changes
      return updatedData;
    });
  };

  const validateForm = (data: typeof formData) => {
    // Validate form fields (check if necessary fields are filled)
    const isValid =
      data.firstName.trim() &&
      data.lastName.trim() &&
      data.addressLine1.trim() &&
      data.postalCode.trim() &&
      data.locality.trim();
  
  };

  async function handleCheckout(products: ICart[]) {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }), // Make sure product is an array
      });

      const data = await response.json();

      console.log("Stripe session data:", data);

      if (data.url) {
        // Redirect the user to the Stripe checkout session
        window.location.href = data.url;
      } else {
        console.error("No URL returned from Stripe session:", data);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-medium">
                How would you like to get your order?
              </h2>
              <p className="text-sm text-gray-500">
                Customs regulation for Pakistan require a copy of the
                recipient&apos;s KYC. The address on the KYC needs to match the
                shipping address.
              </p>
              <Button
                variant="outline"
                className="w-full justify-start gap-4 rounded-xl border-2 py-6"
              >
                <div className="h-6 w-6 rounded-full border-2" />
                Deliver It
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium">
                Enter your name and address:
              </h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    name="firstName"
                    className="rounded-md py-6"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    name="lastName"
                    className="rounded-md py-6"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    name="addressLine1"
                    className="rounded-md py-6"
                    placeholder="Address Line 1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    We do not ship to P.O. boxes
                  </p>
                </div>
                <div className="grid gap-2">
                  <Input
                    name="postalCode"
                    className="rounded-md py-6"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    name="locality"
                    className="rounded-md py-6"
                    placeholder="Locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="rounded-md py-6">
                      <SelectValue placeholder="Pakistan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="islamabad">Islamabad</SelectItem>
                      <SelectItem value="lahore">Lahore</SelectItem>
                      <SelectItem value="karachi">Karachi</SelectItem>
                      <SelectItem value="quetta">Quetta</SelectItem>
                      <SelectItem value="peshawar">Peshawar</SelectItem>
                      <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    className="rounded-md py-6"
                    placeholder="India"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-gray-500">
                  I have read and consent to eShopWorld processing my
                  information in accordance with the Privacy Statement and
                  Cookie Policy. eShopWorld is a trusted furniture partner.
                </Label>
              </div>
              <Button
                className="w-full rounded-full py-6 bg-blue-950"
                
              >
                Continue
              </Button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <Card className="h-fit p-6">
            <h2 className="text-xl font-medium">Order Summary</h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹ {totalAmount - shipCost}</span>{" "}
                {/* Subtotal without shipping */}
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery/Shipping</span>
                <span>{shipCost ? "$ " + shipCost : "Free"}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {totalAmount}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  (The total reflects the price of your order, including all
                  duties and taxes)
                </p>
              </div>

              <div className="space-y-4 pt-6">
                {cartItem.map((item: ICart, index: number) => {
                  return (
                    <div className="flex gap-4 relative" key={index}>
                      <Image
                        src={item.image || item.imageUrl}
                        alt="image"
                        width={80}
                        height={80}
                      />
                      <div className="w-full space-y-1">
                        <p className="text-sm">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty {item.quantity}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹ {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <Button
                  className="w-full rounded-full py-6 bg-blue-950"
                  onClick={() => handleCheckout(cartItem)}
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
