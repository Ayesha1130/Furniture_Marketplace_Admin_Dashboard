import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center font-serif">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Shop Address</h2>
        <p className="text-gray-600 mb-4 ">1234 Comforty Lane, Suite 101, Avion City, CC 56789</p>

        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-blue-600 mr-2" />
          <p className="text-gray-600">+1 (234) 567-890</p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Follow Us</h2>
        <div className="flex space-x-4 mb-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:text-blue-800"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:text-pink-700"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl hover:text-green-700"
          >
            <FaWhatsapp />
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Location</h2>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-600" />
          <Link
            href="https://www.google.com/maps?q=Chair+City,+CC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Google Maps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
