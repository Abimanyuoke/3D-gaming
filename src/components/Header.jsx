import { FaRegUserCircle } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

export default function Header() {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="py-1 px-7 flex justify-between items-center top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-black sticky">
            <div className="flex lg:gap-14 gap-4 items-center">
                <img src="public/images/logo.png" alt="logo-img" className="md:w-16 w-12" />
                <div className="hidden md:flex gap-5">
                    <button className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg h-8 px-6 font-medium text-nowrap hover:opacity-70 transition-all duration-300">
                        PLAY NOW
                    </button>
                    <button className="bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg h-8 px-6 font-medium text-nowrap hover:opacity-70 transition-all duration-300">
                        PLAY NOW
                    </button>
                </div>
            </div>

            <nav className="hidden md:flex lg:gap-8 gap-4">
                <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                    <FaRegUserCircle /> Avatar
                </a>
                <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                    <IoDiamondOutline /> Arena
                </a>
                <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                    <MdKeyboardDoubleArrowUp /> Beyond
                </a>
                <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                    <BsShop />Shop
                </a>
            </nav>

            <button onClick={handleMenu} className="text-3xl p-2 md:hidden">
                {menu ? <IoMdClose /> : <IoMdMenu />  }
            </button>

            {menu && (
                <div className="fixed top-14 right-0 left-0 bg-black p-5 md:hidden">
                    <nav className="flex flex-col gap-4 items-center">
                        <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                            <FaRegUserCircle /> Avatar
                        </a>
                        <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                            <IoDiamondOutline /> Arena
                        </a>
                        <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                            <MdKeyboardDoubleArrowUp /> Beyond
                        </a>
                        <a href="#" className="flex relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:bottom-0 after:left-0 after:transition-all hover:after:w-full text-nowrap items-center gap-2">
                            <BsShop />Shop
                        </a>
                    </nav>

                    <div className="flex flex-col space-y-2 mt-5">
                        <button className="bg-purple-700 py-2 rounded w-full">
                            Play Now
                        </button>

                        <button className="bg-gray-500 py-2 rounded w-full">
                            NFT Store
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}