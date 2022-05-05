import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
        background: '#201e1e',
        borderRadius: '10px',
    },
};

const ModalWork = (props) => {
    let subtitle;

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        props.close(false);
    }

    return (
        <div>
            <Modal
                isOpen={props.isVisible}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input/>
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}

export default ModalWork;