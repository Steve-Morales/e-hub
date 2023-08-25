import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <>
            <div className="flex items-center justify-center m-4">
                <div className="w-full md:w-4/6 mx-auto p-4">
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaSearch className="w-5 h-5" />
                        </span>
                        <input
                            type="search"
                            className="py-2 text-sm text-white bg-gray-800 rounded-full pl-10 pr-4 w-full focus:outline-none focus:bg-white focus:text-gray-900"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}