import { useEffect } from "react";

const LifecycleLogger = () => {
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div className="card">
      <h3>Check the console</h3>
      <p>Open DevTools to see console Log.</p>
    </div>
  );
};

export default LifecycleLogger;
