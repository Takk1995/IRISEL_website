import React from "react";
import "../../style/QuizPage.css";
import ReactDom from "react-dom";

const Modal = ({ onSubmit, modalTitle, modalText, backgroundImage }) => {


  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content-left">
          <div className="modalImg" style={{ backgroundImage: `url(${backgroundImage})` }}>
          </div>
        </div>
        <div className="modal-content-right">
          <div className="modalTitle">
            <h1>{modalTitle}</h1>
          </div>
          <div className="modalcontent">
            <p>{modalText}</p>
          </div>
          <a href={onSubmit} style={{ textDecoration: 'none', color: 'inherit' }}>
          <button
            type="submit"
            className="btn btn-submit"
              >
            前往購買
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;