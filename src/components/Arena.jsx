import { IoStorefrontOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import card1 from "src/assets/images/bento-card1.png"
import card2 from "src/assets/videos/bento-card2.mp4" 
import card3 from "src/assets/videos/bento-card3.mp4"
import card4 from "src/assets/videos/bento-card4.mp4"
import card5 from "src/assets/videos/bento-card5.mp4"
import card6 from "src/assets/images/bento-card5.png"

export default function Arena() {
    return (
        <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
            <div className="relative z-10 pt-6 text-center">
                <h1 className="text-5xl font-bold tracking-widest mb-28" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250, 0.5)" }}>
                    Arena
                </h1>
            </div>

            <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-1 space-y-4 md:space-y-6">
                    <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105">
                        {/* Card 1 */}
                        <div className="absolute h-full w-full">
                            <img src={card1} alt="card-1" />

                            <button className="flex absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                                <IoStorefrontOutline /> NFT Store
                            </button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="relative rounded-3xl border border-white aspect-[4.5/4] overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={card2}></video>
                    </div>
                </div>
                <div className="md:col-span-2 space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* Card 3 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={card3}></video>
                            <h1 className="absolute transform -translate-x-1/2 bottom-2 left-1/2 font-extrabold text-2xl z-10 ">Scoriox</h1>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={card4}></video>
                            <h1 className="absolute transform -translate-x-1/2 bottom-2 left-1/2 font-extrabold text-2xl z-10 ">Floralynx</h1>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={card5}></video>
                            <h1 className="absolute transform -translate-x-1/2 bottom-2 left-1/2 font-extrabold text-2xl z-10 ">Titanor</h1>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02] ">
                        <img src={card6} alt="card 5" />

                        <button className="flex absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                            <div className="absolute flex p-4">
                                <FaExternalLinkAlt />
                                Buy Now
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}