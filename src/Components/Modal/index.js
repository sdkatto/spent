import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const modalstyle = show ? "modal-black display-block" : "display-none";
  return (
    <div className={modalstyle}>
      <section className="modal-dialog modal-dialog-center" role="document">
        <div className="modal-content">
          {children}
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={handleClose}>
              Cancel
            </button>
            <button className="btn bg-primary text-white">Add</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Modal };
