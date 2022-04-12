import React from 'react';

import HTML from '../assets/images/html.png';
import SpringBoot from '../assets/images/spring.png';
import Java from '../assets/images/java.png';
import Python from '../assets/images/python.png';
import MySql from '../assets/images/mysql.png';
import CSS from '../assets/images/css.png';
import Bootstrap from '../assets/images/bootstrap.png';
import JavaScript from '../assets/images/javascript.png';
import ReactImg from '../assets/images/react.png';
import Mongo from '../assets/images/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-100% bg-[#FFFFFF] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={SpringBoot} alt="HTML icon" />
                  <p className='my-4'>Spring Boot</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4 '>Java</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={MySql} alt="HTML icon" />
                  <p className='my-4'>MySql</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 content-skills hover:text-pink-600 hover:shadow-[#f54293] border-radius-12'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
