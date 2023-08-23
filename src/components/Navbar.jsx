export default function Navbar() {
    return (
        <>
            <nav className='flex items-center justify-center bg-slate-100 h-12 shadow-md'>
                <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Home</a>
                <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Users</a>
                <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Edit</a>
                <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Settings</a>
            </nav>
        </>
    );
}