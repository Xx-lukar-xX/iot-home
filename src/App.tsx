import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <main className="container">
        <h1>Welcome to Tauri + React</h1>

        <div className="row">
          <a href="https://www.diunchi.com" target="_blank">
            <img src="/logo.svg" alt="Vite Logo" />
          </a>
        </div>
        <p>Click on the Tauri, Vite, and React logos to learn more.</p>

        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">button</button>
        </form>
        <p>{greetMsg}</p>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
