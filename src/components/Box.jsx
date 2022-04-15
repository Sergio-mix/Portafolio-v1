import React from 'react';

const Box = (props) => {
    const [image, setImage] = React.useState(props.imageHome);
    return (
        <div
            style={{backgroundImage: `url(${image})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               {props.title}
              </span>
                <div className='pt-8 text-center'>
                    <a href={props.code} target='_blank'>
                        <button
                            className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Box;