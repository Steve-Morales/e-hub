import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";

export default function Profile() {
    return (
        <>
            <Navbar />
            
            <div className="relative flex flex-col items-center justify-center "> {/*center all the "main items"*/}
                <div className="relative w-4/6"> {/* items within me are relative to me */}
                    <div className="absolute inset-0 z-0">
                        <img
                            className="object-cover blur-md"
                            src="https://placehold.co/1920x1280"
                        />
                    </div>
                    <div className="relative z-1">
                        <img
                            className="object-contain"
                            src="https://placehold.co/1920x1280"
                        />
                    </div>



                </div>

                <div className="shadow-black shadow-lg absolute -bottom-16 w-fit border-2 rounded-full border-gray-600 bg-white">
                    <img
                        className="rounded-full object-contain"
                        src="https://placehold.co/220x220"
                        alt="User"
                        style={{ maxWidth: "220px", maxHeight: "220px" }}
                    />
                </div>
            </div>

            <section className="">
                <Tabs/>
            </section>

            <Footer />
        </>
    );
}