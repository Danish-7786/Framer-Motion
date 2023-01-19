import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => null}
       
      >
        Launch Modal
      </motion.button>
    </div>
  );
}

export default App;
