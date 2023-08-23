import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '../components/Button';

export default function Home() {
    return (
        <>
            <Navbar />
            
            <section className='m-4 flex flex-col items-center justify-center p-4'>
                <div className='w-full h-8'>{/* SPACER */}</div>
                <h1 className='text-6xl font-extrabold'>Simple. Better. Faster.</h1>
                <div className='w-full h-8'>{/* SPACER */}</div>
                <subtitle className="text-xl text-stone-400 w-3/6 p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat impedit enim sapiente eos quis, praesentium perspiciatis nisi officia illo eaque obcaecati quibusdam nulla sit id eius cumque tempore repellendus.</subtitle>
                <div className='w-full h-8'>{/* SPACER */}</div>
                <Button btn_text={"Sample Button"}/>
            </section>

            <Footer />
        </>
    );
}