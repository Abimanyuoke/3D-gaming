import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]">
            <img src="src\public\\images\illu-text.png" alt="Illu-Text" className="h-10" />
            <img src="src\public\\images\illu-logo.png" alt="Illu-Logo" className="h-16 md:inline hidden" />
            <div className="flex gap-4">
                <div className="flex items-center cursor-pointer">
                    <FaLinkedin/>
                    <a href="#" className="md:text-3xl text-2xl hover:text-violet-600 duration-300"></a>
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaSquareInstagram/>
                    <a href="#" className="md:text-3xl text-2xl hover:text-violet-600 duration-300"></a>
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaDiscord/>
                    <a href="#" className="md:text-3xl text-2xl hover:text-violet-600 duration-300"></a>
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaFacebookSquare/>
                    <a href="#" className="md:text-3xl text-2xl hover:text-violet-600 duration-300"></a>
                </div>
            </div>
        </footer>
    )
}