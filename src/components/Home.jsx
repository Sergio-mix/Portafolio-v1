import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        try {
            const typed = new Typed(el.current, {
                strings: [
                    "I'm a backend developer.",
                    "I'm a frontend developer.",
                    "I'm a junior developer."
                ],
                startDelay: 2000,
                contentType: 'html',
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                smartBackspace: true,
                showCursor: true,
                cursorChar: '|',
                cursorBlinking: true,
                cursorPosition: 0,
                shuffle: false,
                fadeOut: false,
                fadeOutClass: 'typed-fade-out',
                loopCount: Infinity,
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div name='home' className='w-full h-screen bg-[#fffff]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#f54293]'>
                    Sergio Hernández
                </h1>
                <span className='typed-cursor text-4xl sm:text-7xl font-bold text-[#8892b0]' ref={el}/>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm an engineering student, I'm interested in learning about the world of development,
                    I focus more than anything on the backend part, but I don't mind learning new skills.
                </p>
            </div>
        </div>
    );
};

export default Home;
