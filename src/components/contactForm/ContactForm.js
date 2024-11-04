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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
