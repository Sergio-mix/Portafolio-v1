import {useState} from "react";

const ModalWork = (props) => {

    function isOpen(isOpen) {
        if (isOpen)
            return ("display-block");
        else
            return ("display-none");
    }

    return (
        <div className={isOpen(props.show)}>
            <div className="modal-container">
                <div className="modal">
                    <h1 className={"text-4xl text-white font-bold"}>{props.data.title}</h1>

                    <button onClick={props.close}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalWork;