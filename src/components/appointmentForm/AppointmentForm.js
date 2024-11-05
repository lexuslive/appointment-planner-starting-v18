import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        aria-label="Appointment Name"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        aria-label="Appointment Date"
        min={getTodayString()}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Time"
        aria-label="Appointment Time"
        required
      />
      <ContactPicker
        name="contact"
        value={name}
        contacts={contacts}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Add Appointment" aria-label="Add Appointment"/>
    </form>
  );
};
