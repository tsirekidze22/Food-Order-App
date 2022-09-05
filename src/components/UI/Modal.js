import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onBackdropClick }) => {
  return <div className={classes.backdrop} onClick={onBackdropClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onBackdropClick }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onBackdropClick={onBackdropClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
