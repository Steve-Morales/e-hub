import React, {useState} from 'react';

import { FaTimes } from 'react-icons/fa';

export default function ProfileModal() {
    const [exit, setExit] = useState(false);
    
    return (
        <>

            <div className={`bg-white rounded-lg shadow-lg h-5/6 w-5/6 p-4 ${exit? "animate-jump-out" : "block animate-jump-in" }`}>
                <div className="flex flex-col">
                    <div 
                    className="flex flex-row items-center justify-end hover:cursor-pointer pb-2"
                    onClick={()=>{setExit(true);}}
                    >
                        <FaTimes />
                    </div>

                    {/* Body */}
                    <div className=" flex flex-row">
                        <hr />
                        {/* Content */}
                        <div className=" flex flex-col w-full max-h-96 md:w-5/6 overflow-scroll">
                            <h1 className="font-extrabold text-2xl">Sample Title</h1>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quia, corporis distinctio eum odit consequuntur eius facilis repellat accusamus eveniet eaque quaerat dolorum inventore, quod laborum, nostrum vero necessitatibus?</p>
                                <p>Sample text</p>
                            </div>

                            <h1 className="font-extrabold text-2xl">Sample Title</h1>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quia, corporis distinctio eum odit consequuntur eius facilis repellat accusamus eveniet eaque quaerat dolorum inventore, quod laborum, nostrum vero necessitatibus?</p>
                                <p>Sample text</p>
                            </div>

                            <h1 className="font-extrabold text-2xl">Sample Title</h1>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quia, corporis distinctio eum odit consequuntur eius facilis repellat accusamus eveniet eaque quaerat dolorum inventore, quod laborum, nostrum vero necessitatibus?</p>
                                <p>Sample text</p>
                            </div>
                        </div>

                        {/* TOC */}
                        <div className="border-l-2 border-gray-800 hidden md:block flex flex-col w-0/6 md:w-1/6 items-end px-4">
                            <a href="#"><h3 className="font-extrabold hover:scale-110 duration-100 ease-linear">Sample Title</h3></a>
                            <a href="#"><h3 className="font-extrabold hover:scale-110 duration-100 ease-linear">Sample Title</h3></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}