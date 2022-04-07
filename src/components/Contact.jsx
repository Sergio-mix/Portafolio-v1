import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#FFFFFF] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/6f5d2d59-1ab8-400e-9556-004b259f2109"
                  className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email -
                        myemail@gmail.com</p>
                </div>
                <input className='bg-[#EEEEEE] p-2 border-radius-12' type="text" placeholder='Name' name='name'
                       required/>
                <input className='my-4 p-2 bg-[#EEEEEE] p-2 border-radius-12' type="email" placeholder='Email'
                       name='email' required/>
                <textarea className='bg-[#EEEEEE] p-2 border-radius-12' name="message" rows="10"
                          placeholder='Message' required/>
                <input type={'submit'}
                       className='text-white hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto button-contact'/>
            </form>
        </div>
    )
}

export default Contact