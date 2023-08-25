import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '../components/Button';

export default function Home() {
    return (
        <>
            <Navbar />

            <section className='sm:grid sm:grid-cols-12 gap-x-8 px-6 sm:px-8 pt-24 sm:pt-48 lg:pt-64 pb-24 sm:pb-48 lg:pb-64 container mx-auto gap-8 lg:gap-12 grid'>
                <h1 className='text-center col-start-4 col-end-10 text-6xl font-extrabold'>Simple. Better. Faster.</h1>
                <subtitle
                    className="text-center col-start-5 col-end-9 text-xl text-stone-400"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat impedit enim sapiente eos quis, praesentium perspiciatis nisi officia illo eaque obcaecati quibusdam nulla sit id eius cumque tempore repellendus.</subtitle>

                <div className='col-span-12 flex items-center justify-center'>
                    <Button btn_text={"Sample Button"} />
                </div>
            </section>

            <section className='bg-gray-800 w-screen'>
                
                <div className='sm:grid sm:grid-cols-12 gap-x-8 px-6 sm:px_8 pt-24 sm:pt-48 lg:pt-64 pb-24 sm:pb-48 lg:pb-64 container mx-auto gap-8 lg:gap-12 grid '>
                    <h1 className='col-start-2 col-end-12 text-6xl font-extrabold text-white'>Networking Displays Made Easy</h1>
                    <subtitle className="col-start-2 col-end-8 col-span-6 text-xl text-stone-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat impedit enim sapiente eos quis, praesentium perspiciatis nisi officia illo eaque obcaecati quibusdam nulla sit id eius cumque tempore repellendus.</subtitle>
                    <p className='col-start-2 col-end-8 col-span-6 text-2xl font-extrabold text-green-400'>Lorem ipsum dolor sit</p>
                    <a href={"#"} className="underline text-gray-300 hover:text-gray-500 transition-colors duration-300">
                        {"Text"}
                        <span className="inline-block ml-1 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2">→</span>
                    </a>
                </div>

            </section>

            <Footer />
        </>
    );
}
