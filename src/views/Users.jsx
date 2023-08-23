// FIXME: Temporary Name For Page Listing Users
import UserCard from "../components/UserCard";
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';


export default function Users() {
    return (
        <>
            <Navbar />

            <SearchBar />

            {/* User Cards */}
            <div className="flex items-center justify-center bg-gradient-to-b from-white to-gray-800">
                <div className="grid grid-cols-2 gap-y-32 gap-x-48">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>

            <Footer />
        </>
    );
}