import React from 'react';

const jsonData = require('../assets/data/data.json');

const Skills = () => {
    return (
        <div name='skills' className='w-full h-100% bg-[#FFFFFF] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {jsonData.skills.map((item, index) => {
                        return (
                            <div
                                className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                                <img className='w-20 mx-auto' src={item.img} alt="HTML icon"/>
                                <p className='my-4 '>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
