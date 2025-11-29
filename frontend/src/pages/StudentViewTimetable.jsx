import React from "react";
import Layout from "../components/Layout";

function StudentViewTimetable() {
  // Engineering timetable 8:45 - 16:30
  const timetable = [
    {
      day: "Monday",
      slots: [
        { time: "08:45 - 09:45", subject: "Mathematics III" },
        { time: "09:45 - 10:45", subject: "Physics" },
        { time: "10:45 - 11:00", subject: "Tea Break" },
        { time: "11:00 - 12:00", subject: "Computer Programming" },
        { time: "12:00 - 13:00", subject: "Electrical Engineering" },
        { time: "13:00 - 13:45", subject: "Lunch Break" },
        { time: "13:45 - 14:45", subject: "Engineering Mechanics" },
        { time: "14:45 - 15:45", subject: "Environmental Science" },
        { time: "15:45 - 16:30", subject: "Seminar / Lab" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "08:45 - 09:45", subject: "Chemistry" },
        { time: "09:45 - 10:45", subject: "Mathematics III" },
        { time: "10:45 - 11:00", subject: "Tea Break" },
        { time: "11:00 - 12:00", subject: "Computer Programming Lab" },
        { time: "12:00 - 13:00", subject: "Physics" },
        { time: "13:00 - 13:45", subject: "Lunch Break" },
        { time: "13:45 - 14:45", subject: "Electrical Engineering" },
        { time: "14:45 - 15:45", subject: "English" },
        { time: "15:45 - 16:30", subject: "Seminar / Lab" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { time: "08:45 - 09:45", subject: "English" },
        { time: "09:45 - 10:45", subject: "Physics Lab" },
        { time: "10:45 - 11:00", subject: "Tea Break" },
        { time: "11:00 - 12:00", subject: "Engineering Mechanics" },
        { time: "12:00 - 13:00", subject: "Computer Programming" },
        { time: "13:00 - 13:45", subject: "Lunch Break" },
        { time: "13:45 - 14:45", subject: "Chemistry Lab" },
        { time: "14:45 - 15:45", subject: "Environmental Science" },
        { time: "15:45 - 16:30", subject: "Seminar / Lab" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { time: "08:45 - 09:45", subject: "Mathematics III" },
        { time: "09:45 - 10:45", subject: "Physics" },
        { time: "10:45 - 11:00", subject: "Tea Break" },
        { time: "11:00 - 12:00", subject: "Electrical Engineering" },
        { time: "12:00 - 13:00", subject: "Computer Programming" },
        { time: "13:00 - 13:45", subject: "Lunch Break" },
        { time: "13:45 - 14:45", subject: "Engineering Mechanics" },
        { time: "14:45 - 15:45", subject: "English" },
        { time: "15:45 - 16:30", subject: "Seminar / Lab" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { time: "08:45 - 09:45", subject: "Chemistry" },
        { time: "09:45 - 10:45", subject: "Mathematics III" },
        { time: "10:45 - 11:00", subject: "Tea Break" },
        { time: "11:00 - 12:00", subject: "Computer Programming Lab" },
        { time: "12:00 - 13:00", subject: "Physics" },
        { time: "13:00 - 13:45", subject: "Lunch Break" },
        { time: "13:45 - 14:45", subject: "Electrical Engineering" },
        { time: "14:45 - 15:45", subject: "Environmental Science" },
        { time: "15:45 - 16:30", subject: "Seminar / Lab" },
      ],
    },
    {
      day: "Saturday",
      slots: [
        { time: "08:45 - 09:45", subject: "Mathematics III" },
        { time: "09:45 - 10:45", subject: "Physics" },
        { time: "10:45 - 11:00", subject: "Tea Break" },
        { time: "11:00 - 12:00", subject: "Computer Programming" },
        { time: "12:00 - 13:00", subject: "Engineering Mechanics" },
        { time: "13:00 - 13:45", subject: "Lunch Break" },
        { time: "13:45 - 14:45", subject: "Chemistry Lab" },
        { time: "14:45 - 15:45", subject: "English" },
        { time: "15:45 - 16:30", subject: "Seminar / Lab" },
      ],
    },
  ];

  return (
    <Layout><br /><br /><br />
      <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Weekly Timetable (8:45 AM - 4:30 PM)</h1>

        <div className="w-full max-w-7xl bg-black rounded-2xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Day / Time</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">08:45-09:45</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">09:45-10:45</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">10:45-11:00</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">11:00-12:00</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">12:00-13:00</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">13:00-13:45</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">13:45-14:45</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">14:45-15:45</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">15:45-16:30</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timetable.map((dayRow, idx) => (
                <tr key={idx} className="hover:bg-blue-400 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-black">{dayRow.day}</td>
                  {dayRow.slots.map((slot, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 text-sm font-medium ${
                        slot.subject.toLowerCase().includes("break") ? "bg-gray-100 text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {slot.subject}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-gray-500 text-sm">
          *Tea breaks and lunch are highlighted in blue.
        </p>
      </div>
    </Layout>
  );
}

export default StudentViewTimetable;
