import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    if (!user?.email) return;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [url, user?.email]);

  // ✅ Delete booking
  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Booking deleted!");
          setBooking(bookings.filter((b) => b._id !== id));
        }
      });
  };

  // ✅ Update booking status
  const handleStatus = (id, newStatus) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Booking updated!");
          setBooking(
            bookings.map((b) =>
              b._id === id ? { ...b, status: newStatus } : b
            )
          );
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id} className="text-center">
                <td>{index + 1}</td>
                <td>{booking.customerName}</td>
                <td>{booking.email}</td>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>${booking.price}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      booking.status === "approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {booking.status || "pending"}
                  </span>
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleStatus(booking._id, "approved")}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
