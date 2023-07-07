import React from "react";
import "./Modal.css";

const Modal = ({ children, onSubmit, onCancel, onClose }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if(e.target.className === "modal-container") {
          onClose("The modal was closed");
        }
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => onClose("The modal was closed")}>
            &times;
          </p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button
            className="btn btn-submit"
            onClick={() => onSubmit("Submit was clicked")}
          >
            Submit
          </button>

          <button
            className="btn btn-cancel"
            onClick={() => onCancel("Cancel was clicked")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
