import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nights =
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24);
      return nights > 0 ? nights * price : 0;
    }
    return 0;
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2"
        />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>
          Total payment: <strong>${calculateTotal()}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
