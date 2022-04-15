import React from 'react';
import Box from "./Box";

const Work = () => {
    const jsonData= require('../assets/data/data.json');
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
                    {jsonData.map((item, index) => {
                        return (
                            <Box title={item.title}
                                 imageHome={item.imageHome}
                                 images={item.images}
                                 code={item.code}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Work;
