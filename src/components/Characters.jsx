import { useState } from "react"
import { FaStar } from "react-icons/fa";

export default function Characters() {

    const [selectedAvatar, setSelectedAvatar] = useState("VIKI")

    const Avatar = {
        VIKI: {
            name: "VIKI",
            power: 75,
            stable: 95,
            penetrate: 30,
            portable: 80,
            stars: 3
        },
        EVA: {
            name: "EVA",
            power: 90,
            stable: 80,
            penetrate: 70,
            portable: 60,
            stars: 4
        },
    }

    const currentAvatar = Avatar[selectedAvatar];


    return (
        <div className="relative w-full h-screen overflow-hidden mb-[10%]">
            <div className="relative z-10 pt-6 text-center">
                <h1 className="text-5xl font-bold tracking-widest md:-mb-14 mb-8" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}>
                    FIGHTERS
                </h1>
            </div>

            <div className="relativez-10 flex md:flex-row flex-col items-center w-full h-full p-4">
                <div className="w-full md:w-2/4 flex flex-col md:ml-10">
                    <div className="bg-gray-900/80 rounded-lg p-4 mb-4 backdrop-blur-sm border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]">
                        <h1 className="text-2xl font-semibold mb-2">{currentAvatar.name}</h1>
                        <div className="space-y-3 mb-16">
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">
                                    Power
                                </span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-600 to-white" style={{ width: `${currentAvatar.power}%` }}></div>
                                </div>
                                <span className="ml-2">{currentAvatar.power}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">
                                    Stable
                                </span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-600 to-white" style={{ width: `${currentAvatar.stable}%` }}></div>
                                </div>
                                <span className="ml-2">{currentAvatar.stable}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">
                                    Penetrate
                                </span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-600 to-white" style={{ width: `${currentAvatar.penetrate}%` }}></div>
                                </div>
                                <span className="ml-2">{currentAvatar.penetrate}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">
                                    Portable
                                </span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-600 to-white" style={{ width: `${currentAvatar.portable}%` }}></div>
                                </div>
                                <span className="ml-2">{currentAvatar.portable}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                                Porticient
                            </button>
                            <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                                Redemption
                            </button>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4">

                        {/* VIKI */}
                        <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg border flex lg:flex-row flex-col justify-between p-3 px-12 items-center cursor-pointer transition-all duration-300" onClick={() => setSelectedAvatar("VIKI")}>
                            <div className="text-lg mb-2">
                                VIKI
                            </div>

                            <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                                <img src="public\images\VIKI.png" alt="Viki Image" />
                            </div>

                            <div className="flex">
                                {[...Array(3)].map((_, i) => (
                                    <FaStar key={i} className="w-4 h-4 fill-violet-400 text-violet-500" />))}
                            </div>

                            {selectedAvatar === "VIKI" && (
                                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>)}
                        </div>

                        {/* EVA */}
                        <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg border flex lg:flex-row flex-col justify-between p-3 px-12 items-center cursor-pointer transition-all duration-300"  onClick={() => setSelectedAvatar("EVA")}>
                            <div className="text-lg mb-2">
                                EVA
                            </div>

                            <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                                <img src="public\images\EVA.png" alt="Eva Image" />
                            </div>

                            <div className="flex">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar key={i} className="w-4 h-4 fill-violet-400 text-violet-500" />))}
                            </div>

                            {selectedAvatar === "EVA" && (
                                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}