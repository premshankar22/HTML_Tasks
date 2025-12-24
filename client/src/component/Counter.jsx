import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container} className="card">
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <div>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)} style={styles.button}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
  },
};

export default Counter;
