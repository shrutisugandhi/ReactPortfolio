import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = ({modalHeading,closeModal}) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                
                <div className="modal-header">
                    <h1>{modalHeading}</h1>
                    <p className="close-modal" onClick={closeModal} >&times;</p>
                </div>
                <div className="modal-body">
                    <p>React Portfolio is LIVE</p>
                    <p>I've created a Portfolio with ReactJs using all concept of React like React Router,React portal,Props,class based/functional based components etc</p>
                </div>
                <div className="modal-footer">
                    <p>&copy; copywrite 2021</p>
                </div>
        </div>

        </div>, document.getElementById('modal'))
}
export default Modal;



//React Portal are used to make components which need to be overlap or shown at top of parent component 