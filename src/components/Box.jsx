import React from 'react';

const Box = (props) => {

    return (
        <div>
            <div
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-300">
                <div className='opacity-0 group-hover:opacity-100 content-div-items'>
                    <h1 className='text-4xl font-bold font-size-inherit tracking-wider'>
                        {props.data.title}
                    </h1>
                    <button
                        className='text-center rounded-lg px-4 py-3 m-2 bg-pink-600 text-white font-bold text-lg hover:scale-110 duration-300 mt-4'
                        onClick={props.event}>
                        Open
                    </button>
                </div>
                <img className={"img"} src={props.data.imageHome} alt={""}/>
            </div>
        </div>
    );
}

export default Box;