import React from 'react';

const Box = (props) => {

    return (
        <div
            style={{backgroundImage: `url(${props.data.imageHome})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-3xl font-bold text-white tracking-wider'>
               {props.data.title}
              </h1>
                <div className='pt-8 text-center'>
                        <button
                            className='text-center rounded-lg px-4 py-3 m-2 bg-pink-600 text-white font-bold text-lg hover:scale-110 duration-500'
                        onClick={props.event}>
                            Open
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Box;