import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider"; // আপনার path অনুযায়ী ঠিক করে নিন

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service || {};

  const { user } = useContext(AuthContext); // এখানে থেকে user পাওয়া যাবে

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("✅ Booking successful!");
          form.reset();
        } else {
          alert("❌ Something went wrong!");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("⚠️ Server error, please try again later.");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 mb-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Checkout
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Service: <span className="font-semibold text-gray-700">{title}</span>
      </p>

      {/* Form */}
      <form onSubmit={handleBookService} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
            defaultValue={user?.email || ""}
            readOnly
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="text"
            name="amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
            defaultValue={price}
            readOnly
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Order Now
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
