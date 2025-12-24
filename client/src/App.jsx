import UserList from "./component/UserList";
import Counter from "./component/Counter"
import UserForm from "./component/UserForm"
import LifecycleLogger from "./component/LifecycleLogger"
import "./App.css";
import React, {useState} from 'react'
function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <UserList />
      <Counter />
      <UserForm/>
      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show && <LifecycleLogger />}
    </div>
  );
}

export default App;
