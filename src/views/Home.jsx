import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '../components/Button';

export default function Home() {
    return (
        <>
            <Navbar />
            
            <section className='m-4 flex flex-col items-center justify-center p-16'>
                <div className='w-full h-8'>{/* SPACER */}</div>
                <h1 className='text-6xl font-extrabold'>Simple. Better. Faster.</h1>
                <div className='w-full h-8'>{/* SPACER */}</div>
                <subtitle className="text-xl text-stone-400 w-3/6 p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat impedit enim sapiente eos quis, praesentium perspiciatis nisi officia illo eaque obcaecati quibusdam nulla sit id eius cumque tempore repellendus.</subtitle>
                <div className='w-full h-8'>{/* SPACER */}</div>
                <Button btn_text={"Sample Button"}/>
            </section>

            <section className='grid grid-row-4 gap-4 p-16 bg-gray-800'>
                <div className='grid grid-cols-10 gap-2'>
                    <h1 className='col-span-4 text-6xl font-extrabold text-white'>Networking Displays Made Easy</h1>
                </div>

                <div className='grid grid-cols-10 gap-2'>
                    <subtitle className="col-span-6 text-xl text-stone-400 p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat impedit enim sapiente eos quis, praesentium perspiciatis nisi officia illo eaque obcaecati quibusdam nulla sit id eius cumque tempore repellendus.</subtitle>
                </div>
            </section>

            <Footer />
        </>
    );
}