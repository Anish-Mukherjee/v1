import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { Moralis } from "moralis";

const Form = () => {
  const [username, setUsername] = useState("");
  const [rate, setRate] = useState(0);
  const [calendar, setCalendar] = useState("");
  const { authenticate, isAuthenticated } = useMoralis();

  const handleSubmit = (e) => {
    e.preventDefault();

    const createProfile = async (username, rate, calendar) => {
      await authenticate();
      const user = Moralis.User.current();

      if (isAuthenticated) {
        user.set("username", username);
        user.set("rate", rate);
        user.set("calendar", calendar);
        user.save();
      }
    };
    createProfile();
  };

  return (
    <main>
      <form>
        <label>Name:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Hourly Rate (USD)</label>
        <input
          type="number"
          required
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <label>Calendar Link:</label>
        <input
          type="url"
          required
          value={calendar}
          onChange={(e) => setCalendar(e.target.value)}
        />

        <Button margin="15" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </main>
  );
};

export default Form;
