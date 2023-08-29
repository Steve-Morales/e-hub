// TODO: update link for register
import Navbar from "../components/Navbar";

export default function Login(){
    return(
        <>
            <Navbar />
            
            <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-3rem)] bg-[url('https://placehold.co/1920x1080')] bg-cover">

                <div className="bg-gray-800 border border-transparent rounded-3xl shadow-md w-2/3 sm:w-4/6 h-3/5 sm:h-2/3 flex flex-col items-center justify-center">

                    <form className="rounded flex flex-col items-start justify-center">
                        <div className="mb-8">
                            <text className="text-white font-bold text-lg">Welcome to e-hub!</text>
                        </div>
                        <div className="mb-6">
                            <label className=" text-white font-bold text-sm block mb-2" for="username">Username</label>
                            <input type="text" id="username" placeholder="Username"
                            className="rounded shadow-md border">   
                            </input>
                        </div>
                        <div className="mb-7">
                            <label className=" text-white font-bold text-sm block mb-2" for="password">Password</label>
                            <input type="password" id="password" placeholder="*********"
                            className="rounded shadow-md border block text-hidde">
                            </input>
                            <a className="text-sm text-blue-300 font-bold  hover:text-blue-100 transition-colors duration-300" href="/#">forgot password?</a>
                        </div>
                        <div className="mb-1 w-full flex flex-col items-center justify-center">
                            <button className="border-2 border-indigo-400 rounded bg-gray-950 text-gray-300 font-bold hover:bg-gray-500 transition-colors duration-300 px-10 py-2" type="button">Log-In</button>
                        </div>
                        <div className="mb-3">
                            <text className="text-gray-300 text-xs font-bold">New to e-hub? </text>
                            {/* FIXME: update link here! */}
                            <a href="/#" className="text-sm text-blue-300 font-bold hover:text-blue-100 transition-colors duration-300">Register</a>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}