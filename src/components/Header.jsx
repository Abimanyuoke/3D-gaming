import 'boxicons/css/boxicons.min.css'

export default function Header() {
    return (
        <header className="py-1 px-7 flex justify-between items-center fixed top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">
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

            <nav>
                <a href="#">
                    < i class='bxr  bx-user-circle'  ></i> Home
                </a>
            </nav>
        </header>
    )
}