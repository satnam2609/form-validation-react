import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./component/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Form />
    </div>
  );
}

export default App;
