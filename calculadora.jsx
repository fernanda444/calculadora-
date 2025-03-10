import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      <div className="bg-pink-400 p-6 rounded-2xl shadow-lg w-72">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right text-xl bg-pink-100 rounded mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? handleCalculate() : handleClick(char)
              }
              className="p-4 bg-pink-300 rounded text-xl font-bold shadow"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-4 bg-red-400 rounded text-xl font-bold shadow"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
