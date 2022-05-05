import React from 'react';
import Box from "./Box";
import Modal from "./ModalWork";

const Work = () => {
    const jsonData = require('../assets/data/data.json');
    const [modal, setModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    const handleModal = (data) => {
        setModal(true);
        setModalData(data);
    }

    const handleClose = () => {
        setModal(false);
    }
    return (
        <div name='work' className='w-full md:h-100% text-gray-300 bg-[#1c1c1c] border-radius-12'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-5'>
                    {jsonData.word.map((item, index) => {
                        return (
                            <Box
                                data={item}
                                event={event => handleModal(item)}
                            />
                        )
                    })}
                </div>
            </div>
            <Modal isVisible={modal} data={modalData} close={handleClose}/>
        </div>
    );
};

export default Work;
