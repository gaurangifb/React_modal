import React, {useState} from "react";
import Modal from "./Modal";
import "./App.css";

const App = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  

  return (
    <>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="content">{props.className}</div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
    </>
  );
};

export default App;
