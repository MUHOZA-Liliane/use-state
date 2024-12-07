
import { useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const [output, setOutput] = useState("Type in your name");
  const [name, setName] = useState("");

  const handleReset = () => {
    setName("");
    setOutput("Type in your name");
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(`${name}`);
  };

  return (
    <main className="h-screen w-full">
      <div className="w-[500px] mx-auto mt-[20vh] bg-sky-200 p-6 rounded-lg hover:bg-sky-500">
        <p className="text-center mb-8 text-gray-700">{output}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleOnChange}
            placeholder="Your name"
            className="px-5 py-2 border-[2px] rounded-lg border-blue-500
            outline-none w-full focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          />
          <div className="mt-6 flex gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Clear
            </button>
             {/* <button className="bg-red-500 px-4 py-2">clear</button>   */}
            <button className="bg-red-500 rounded-lg  text-white ">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
