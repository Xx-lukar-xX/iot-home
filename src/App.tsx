import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import FooterMenu from "./components/FooterMenu";
import HeaderProfile from "./components/HeaderProfile";

function App() {
    return (
      <div>
        <main className="container">
          <div className="row">
            <img src="/logo.svg" alt="App Logo" />
          </div>
        </main>
        <div>
          <HeaderProfile />
          <FooterMenu />
        </div>
      </div>
    );
}

export default App;
