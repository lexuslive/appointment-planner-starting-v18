import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
          aria-label="Contact Name"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="\b([0O]?[1lI][1lI])?[4A][4A][\dOIlZEASB]{10,11}\b"
          placeholder="Contact Phone"
          aria-label="Contact Phone"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
          aria-label="Contact Email"
        />
        <input type="submit" value="Add Contact" aria-label="Add Contact"/>
      </form>
    </>
  );
};

