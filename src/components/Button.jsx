import './Button.css';

export default function Button({btn_text}) {
    return (
        <>
            <button
                className='hover:bg-gray-600 transition duration-300 ease-in-out bg-gray-800 text-white text-center max-w-sm w-full p-4 rounded-sm text-xl'
            >
                {btn_text ? btn_text : "Button"}
            </button>
        </>
    );
}