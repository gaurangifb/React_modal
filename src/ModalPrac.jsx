import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
    const [showText, setShowText] = useState("")
  return (
    <>
      
        <div className={`modal ${props.modalOpen ? "open" : ""}`}>
          <div className="title">This is a model.</div>
          <div className="desc">This is the modal description.</div>
            <button className='close' onClick={() => props.setModalOpen(false)}>Close</button>
          <button className="submit" type="submit" onClick={() => {
          props.setModalOpen(false); 
          setShowText(() => showText=`${className} is clicked`)
        }}>
            Submit
          </button>
          <button className="cancel">Cancel</button>
        </div>
     
    </>
  );
};

export default Modal;
