"use client";

import { useRouter } from "next/navigation";

const PurchaseModal = ({ isModal, lastName, firstName, onClose }) => {
  const router = useRouter();

  if (!isModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="
        relative box bg-white text-gray-900 rounded-2xl shadow-xl
        w-full max-w-sm md:max-w-md lg:max-w-lg
        p-6 md:p-8 
        flex flex-col justify-center items-center animate-fadeIn
      ">
        <p className="text-xl md:text-2xl font-semibold text-center">
          🎉 Congratulations!
        </p>

        <p className="text-lg md:text-xl mt-2 text-center">
          {firstName} {lastName}
        </p>

        <p className="text-gray-600 text-sm md:text-base mt-3 text-center px-2">
          Your purchase was successful 💳  
        </p>

        <button
          onClick={onClose}
          className="
            mt-6 w-full md:w-auto 
            bg-green-600 hover:bg-green-700 
            text-white px-6 py-3 rounded-lg 
            shadow-md transition-all duration-300
          "
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
