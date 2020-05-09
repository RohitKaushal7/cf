import React from 'react';
import "./Modal.scss"

const Modal = props => {
    return (
        <>
            <div className="backdrop" onClick={props.closeModal}></div>
            <div className="modal">
                {props.content}
            </div>
        </>
    )
}

export default Modal;