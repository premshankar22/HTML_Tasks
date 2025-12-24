import { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");

  const [submitName, setSubmitName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitName(username);
    setUsername("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }} className="card">
      <h2>Username Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {submitName && (
        <p>
          <strong>Entered Username:</strong> {submitName}
        </p>
      )}
    </div>
  );
};

export default UserForm;
