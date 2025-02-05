import React from "react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  vCart?: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message,
  vCart,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition-all duration-300"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <div className="flex items-center bg-gradient-to-r from-green-400 to-blue-950 text-white p-4 rounded-md mb-6">
          <svg
            className="w-8 h-8 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-xl font-bold">{message}</span>
        </div>

        <div className="flex justify-end gap-6">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-200"
            aria-label="Close"
          >
            Close
          </button>
          {vCart && (
            <button
              onClick={() => router.push("/cart")}
              className="bg-blue-950 text-white py-3 px-8 rounded-full hover:bg-blue-800 transition duration-200"
              aria-label="View Cart"
            >
              View Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
