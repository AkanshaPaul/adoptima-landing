import React from 'react';
import { motion } from 'framer-motion';
import { Box, Hexagon, Zap, Activity, Globe, Triangle, Command, Cpu } from 'lucide-react';

const logos = [
    { name: "Acme Corp", icon: Box },
    { name: "Echo Valley", icon: Hexagon },
    { name: "Quantum", icon: Zap },
    { name: "Pulse", icon: Activity },
    { name: "Celestial", icon: Globe },
    { name: "Apex", icon: Triangle },
    { name: "Command", icon: Command },
    { name: "SysTek", icon: Cpu },
];

const LogoTicker: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-slate-900 border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-slate-400 text-sm font-medium tracking-wider uppercase mb-8">
                    Trusted by forward-thinking teams
                </h2>

                <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex gap-16 flex-none pr-16"
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center gap-2 group flex-none">
                                <logo.icon className="w-8 h-8 text-slate-500 group-hover:text-indigo-400 transition-colors duration-300" />
                                <span className="text-lg font-semibold text-slate-500 group-hover:text-white transition-colors duration-300">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
