import React, { useState } from "react";
import {createPortal} from "react-dom"
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mssg, setMssg] = useState("")

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMssg(value)
}

  return (
    <div className="App">
    {mssg}
    <button className='btn btn-open' onClick={() => setModalOpen(true)}>Open</button>
      {modalOpen && (
        createPortal(<Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick}>
          <h1>This is the modal title</h1>
          <p>This is the modal description</p>
        </Modal>, document.body)
      )}
      This is behind the modal
    </div>
  );
};

export default App;
