import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1c1c1c] text-gray-300 border-radius-12'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sergio, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a fourth semester student of systems engineering,
                with soft skills and good assertive communication,
                I always seek to have the best efficiency when
                preparing projects or jobs and in the same way
                find the best optimal way to use the given resources.
                I consider myself a person of integrity and leadership.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
