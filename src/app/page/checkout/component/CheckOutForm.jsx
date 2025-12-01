"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartsSlice";
import PurchaseModal from "@/app/modal/PurchaseModal";


export default function CheckoutForm({ totalProductPrice,Singleproduct}) {

 
  const carts = useSelector((state) => state.cart.items);
  const user=useSelector((state)=>state.auth.user)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: user?.email,
    division: "",
    district: "",
    upazila: "",
    union: "",
    address: "",
    orderNote: "",
  });
 
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [unions, setUnions] = useState([]);
  const [isModal, setIsmodal] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

    const handleCloseModal = () => {
    setIsmodal(false);
    router.push("/"); // modal বন্ধ হলে home পেজে redirect
  };

// update form
useEffect(() => {
  if (user?.email) {
    setForm((prev) => ({ ...prev, email: user.email }));
  }
}, [user]);

  // Load all divisions initially
  useEffect(() => {
    fetch("https://bdapi.vercel.app/api/v.1/division")
      .then((res) => res.json())
      .then((data) => setDivisions(data.data))
      
  }, []);

  // Load districts when division changes
  useEffect(() => {
    if (form.divisionId) {
      fetch(`https://bdapi.vercel.app/api/v.1/district/${form.divisionId}`)
        .then((res) => res.json())
        .then((data) => setDistricts(data.data))
        .catch((err) => console.error("District fetch error:", err));
    } else {
      setDistricts([]);
      setUpazilas([]);
      setUnions([]);
    }
  }, [form.divisionId]);

  // Load upazilas when district changes
  useEffect(() => {
    if (form.districtId) {
      fetch(`https://bdapi.vercel.app/api/v.1/upazilla/${form.districtId}`)
        .then((res) => res.json())
        .then((data) => setUpazilas(data.data))
      
    } else {
      setUpazilas([]);
      setUnions([]);
    }
  }, [form.districtId]);

  // Load unions when upazila changes
  useEffect(() => {
    if (form.upazilaId) {
      fetch(`https://bdapi.vercel.app/api/v.1/union/${form.upazilaId}`)
        .then((res) => res.json())
        .then((data) => setUnions(data.data))
      
    } else {
      setUnions([]);
    }
  }, [form.upazilaId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDivisionChange = (e) => {
    const selected = divisions.find((d) => d.id == e.target.value);
    setForm((prev) => ({
      ...prev,
      divisionId: selected?.id,
      division: selected?.bn_name,
      district: "",
      districtId: "",
      upazila: "",
      upazilaId: "",
      union: "",
      unionId: "",
    }));
  };

  const handleDistrictChange = (e) => {
    const selected = districts.find((d) => d.id == e.target.value);
    setForm((prev) => ({
      ...prev,
      districtId: selected?.id,
      district: selected?.bn_name,
      upazila: "",
      upazilaId: "",
      union: "",
      unionId: "",
    }));
  };




  const handleUpazilaChange = (e) => {
    const selected = upazilas.find((u) => u.id == e.target.value);
    setForm((prev) => ({
      ...prev,
      upazilaId: selected?.id,
      upazila: selected?.bn_name,
      union: "",
      unionId: "",
    }));
  };

  const handleUnionChange = (e) => {
    const selected = unions.find((u) => u.id == e.target.value);
    setForm((prev) => ({
      ...prev,
      unionId: selected?.id,
      union: selected?.bn_name,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    let filteredCarts=[]
    if(carts && carts.length > 0){
     filteredCarts = carts.map((item) => ({
      productId: item.id,
      name: item.name,
      code: item.code,
    
     
    }));
    }else{
      filteredCarts={
          productId: Singleproduct._id,
      name: Singleproduct.name,
      code: Singleproduct.code,
    
      }
    }

    const { divisionId, districtId, upazilaId, unionId, ...filteredForm } = form;
    // Final order object
    const order = {
      userInfo: filteredForm,
      ProductsInfo: filteredCarts, 
     price: totalProductPrice,
    };

    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const result = await response.json()
    if (result.orderId) {
      localStorage.setItem('purchase', JSON.stringify(order))
      dispatch(clearCart())
      setIsmodal(true)
    }

  };

  if(!Singleproduct && carts.length===0) return <p className="text-center">Please add product</p>

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg mt-6 max-w-2xl mx-auto transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            required
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            required
            name="email"
            placeholder="Email"
            value={user?.email}
            readOnly
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        {/* Division / District / Upazila / Union */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            required
            value={form.divisionId || ""}
            onChange={handleDivisionChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">Select Division</option>
            {divisions.map((d) => (
              <option key={d.id} value={d.id}>
                {d.bn_name}
              </option>
            ))}
          </select>

          <select
            required
            value={form.districtId || ""}
            onChange={handleDistrictChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d.id} value={d.id}>
                {d.bn_name}
              </option>
            ))}
          </select>

          <select
            required
            value={form.upazilaId || ""}
            onChange={handleUpazilaChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">Select Upazila</option>
            {upazilas.map((u) => (
              <option key={u.id} value={u.id}>
                {u.bn_name}
              </option>
            ))}
          </select>

          <select
            required
            value={form.unionId || ""}
            onChange={handleUnionChange}
            className="border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">Select Union</option>
            {unions.map((u) => (
              <option key={u.id} value={u.id}>
                {u.bn_name}
              </option>
            ))}
          </select>
        </div>

        {/* Address */}
        <textarea
          required
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
        />

        {/* Place Order Button with unique design */}
    <button
      type="submit"
     
      className={`w-full text-white py-3 px-6 rounded-lg relative overflow-hidden text-lg font-semibold
      bg-gradient-to-r from-green-500 to-green-700
      hover:from-green-600 hover:to-green-800
      transition-all duration-300
    `}
    >
      <span className="inline-block mr-4">Place Order</span>
      <span className="inline-block bg-white text-green-700 font-bold px-3 py-1 rounded-full shadow-md">
        TK {totalProductPrice || 0}
      </span>
      <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-10 hover:w-full transition-all duration-500"></span>
    </button>


      </form>
      <PurchaseModal setIsModal={setIsmodal} isModal={isModal} lastName={form.lastName} firstName={form.firstName} onClose={handleCloseModal} />
    </div>
  );
}