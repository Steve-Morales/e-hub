import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="relative flex flex-col items-center justify-center">
                <img
                    className="w-4/6 object-contain"
                    src="https://placehold.co/1920x960"
                />
                <div className="absolute bottom-0 left-0 w-fit border-2 rounded-full border-gray-600 bg-white">
                    <img
                        className="rounded-full object-contain"
                        src="https://placehold.co/220x220"
                        alt="User"
                        style={{ maxWidth: "220px", maxHeight: "220px" }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}