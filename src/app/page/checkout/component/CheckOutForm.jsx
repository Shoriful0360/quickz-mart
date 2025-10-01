"use client";
import { useState, useEffect } from "react";

export default function CheckoutForm(form, setForm) {
    // Dummy district & thana fetch (you should replace with real API)
    const [districts, setDistricts] = useState([]);
    const [thanas, setThanas] = useState([]);



    //   useEffect(() => {
    //     // Load districts from API
    //     fetch("/api/districts")
    //       .then((res) => res.json())
    //       .then((data) => setDistricts(data))
    //       .catch(() => setDistricts([]));
    //   }, []);

    //   useEffect(() => {
    //     if (form.district) {
    //       // Load thanas based on district
    //       fetch(`/api/thanas?district=${form.district}`)
    //         .then((res) => res.json())
    //         .then((data) => setThanas(data))
    //         .catch(() => setThanas([]));
    //     } else {
    //       setThanas([]);
    //     }
    //   }, [form.district]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const applyCoupon = async () => {
        if (!form.coupon) return;
        // Call coupon API => returns discount amount
        try {
            const resp = await fetch(`/api/apply-coupon?code=${form.coupon}`);
            const json = await resp.json();
            if (json.valid) {
                setOrder((prev) => ({ ...prev, discount: json.discount }));
            } else {
                alert("Coupon invalid or expired");
                setOrder((prev) => ({ ...prev, discount: 0 }));
            }
        } catch (err) {
            console.error(err);
            setOrder((prev) => ({ ...prev, discount: 0 }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Build payload
        const payload = {
            customer: form,
            orderDetails: order,
        };
        // Send to backend
        fetch("/api/submit-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Order placed successfully!");
                // Redirect or show confirmation
            })
            .catch((err) => {
                console.error(err);
                alert("Order failed");
            });
    };



    return (
        <div className=" bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                    </div>
                </div>

                {/* number and email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Phone Number</label>
                        <input
                            name="phone"
                            type="text"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                    </div>
                </div>
                {/* distric and thana */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">District</label>
                        <select
                            name="district"
                            required
                            value={form.district}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="">Select District</option>
                            {districts.map((d) => (
                                <option key={d.id} value={d.name}>
                                    {d.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font.medium">Thana</label>
                        <select
                            name="thana"
                            required
                            value={form.thana}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="">Select Thana</option>
                            {thanas.map((t) => (
                                <option key={t.id} value={t.name}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
{/* full address */}
                <div>
                    <label className="block mb-1 font-medium">Full Address</label>
                    <textarea
                        name="address"
                        required
                        rows={3}
                        value={form.address}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                    ></textarea>
                </div>
 {/* order note */}
                <div>
                    <label className="block mb-1 font-medium">Order Note</label>
                    <textarea
                        name="orderNote"
                        rows={2}
                        value={form.orderNote}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                    ></textarea>
                </div>
                {/* coupon code */}

                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Coupon Code</label>
                        <input
                            name="coupon"
                            type="text"
                            value={form.coupon}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={applyCoupon}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Apply
                    </button>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Payment Method</label>
                    <div className="flex items-center space-x-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={form.paymentMethod === "cod"}
                                onChange={handleChange}
                            />
                            Cash on Delivery
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="op"
                                checked={form.paymentMethod === "op"}
                                onChange={handleChange}
                            />
                            Online Payment
                        </label>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>




    );
}
