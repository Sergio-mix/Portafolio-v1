import React from 'react';


const ModalWork = (props) => {

    function isOpen(isOpen) {
        if (isOpen)
            return ("show");
        else
            return (" ");
    }

    return (
        <div className={"modal-container " + isOpen(props.show)}>
            <div className="modal-div">
                <h1 className={"text-4xl text-pink-600"}>{props.data.title}</h1>

                <button onClick={props.close}>Cerrar</button>
            </div>
        </div>
    );
}

export default ModalWork;