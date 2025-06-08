import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

// Custom Cursor Component
function CustomCursor({ isHovering3D }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - (isHovering3D ? 12 : 15),
                y: position.y - (isHovering3D ? 12 : 15),
                scale: isHovering3D ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            <motion.div
                className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
                animate={{
                    width: isHovering3D ? "24px" : "40px",
                    height: isHovering3D ? "24px" : "40px",
                }}
                transition={{ duration: 0.2 }}
            />
            {isHovering3D && (
                <motion.div
                    className="absolute inset-0 rounded-full border border-violet-500"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: 0.5 }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
}

// Main Component
export default function Characters() {
    const [selectedAvatar, setSelectedAvatar] = useState("VIKI");
    const [cursorInModellArea, setCursorInModellArea] = useState(false);

    const Avatar = {
        VIKI: {
            name: "VIKI",
            power: 75,
            stable: 95,
            penetrate: 30,
            portable: 80,
            stars: 3,
        },
        EVA: {
            name: "EVA",
            power: 90,
            stable: 80,
            penetrate: 70,
            portable: 60,
            stars: 4,
        },
    };

    const currentAvatar = Avatar[selectedAvatar];

    return (
        <div className="relative w-full h-screen overflow-hidden mb-[10%]">
            <CustomCursor isHovering3D={cursorInModellArea} />

            <div className="relative z-10 pt-6 text-center">
                <h1 className="text-5xl font-bold tracking-widest md:-mb-14 mb-8" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}>
                    FIGHTERS
                </h1>
            </div>

            <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
                {/* LEFT INFO PANEL */}
                <div className="w-full md:w-2/4 flex flex-col md:ml-10">
                    <div className="bg-gray-900/80 rounded-lg p-4 mb-4 backdrop-blur-sm border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]">
                        <h1 className="text-2xl font-semibold mb-2">{currentAvatar.name}</h1>
                        <div className="space-y-3 mb-16">
                            {["power", "stable", "penetrate", "portable"].map((key) => (
                                <div className="flex items-center" key={key}>
                                    <span className="w-24 text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-violet-600 to-white" style={{ width: `${currentAvatar[key]}%` }}></div>
                                    </div>
                                    <span className="ml-2">{currentAvatar[key]}</span>
                                </div>
                            ))}
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

                    {/* Avatar Select */}
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(Avatar).map((key) => (
                            <div
                                key={key}
                                className={`relative bg-gray-900/80 backdrop-blur-sm rounded-lg border flex lg:flex-row flex-col justify-between p-3 px-12 items-center cursor-pointer transition-all duration-300`}
                                onClick={() => setSelectedAvatar(key)}
                            >
                                <div className="text-lg mb-2">{key}</div>
                                <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                                    <img src={`/images/${key}.png`} alt={`${key} Image`} />
                                </div>
                                <div className="flex">
                                    {[...Array(Avatar[key].stars)].map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4 fill-violet-400 text-violet-500" />
                                    ))}
                                </div>
                                {selectedAvatar === key && (
                                    <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT 3D PANEL */}
                <AnimatePresence mode="wait">
                    <div
                        className="relative md:w-2/4 w-full md:h-full flex items-center justify-center h-80 overflow-hidden"
                        onMouseEnter={() => setCursorInModellArea(true)}
                        onMouseLeave={() => setCursorInModellArea(false)}
                    >
                        {selectedAvatar === "VIKI" ? (
                            <motion.div
                                key="VIKI"
                                className="absolute inset-0"
                                initial={{ x: "100%" }}
                                animate={{ x: "0" }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/Gr2kX3AWw7IpObSG/scene.splinecode" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="EVA"
                                className="absolute inset-0"
                                initial={{ x: "100%" }}
                                animate={{ x: "0" }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/HD7HomWWSREh4Cy6/scene.splinecode" />
                            </motion.div>
                        )}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
}
