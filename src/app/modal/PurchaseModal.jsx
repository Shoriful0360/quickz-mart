import React from 'react';

const PurchaseModal = ({isModal,firstName,lastName,setIsModal}) => {
    if(!isModal) return null
    return (
         <div className="fixed inset-0 flex justify-center items-center z-50">
  {/* Background blur overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

  {/* Centered spinning box */}
  <div className="relative box flex flex-col justify-center items-center p-8">
    <p>🎉 Congratulations! {firstName} {lastName}</p>
    <p className="text-gray-200 text-sm mt-4">Your purchase was successful 💳</p>
    <button
      onClick={() => setIsModal(false)}
      className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
    >
      Continue Shopping
    </button>
  </div>
</div>

    );
};

export default PurchaseModal;