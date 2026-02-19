import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-slate-900 overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            AI-Powered Ad Optimization
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            Stop Wasting <span className="text-indigo-400">50%</span> of Your Ad Budget
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0"
                    >
                        AdOptima uses predictive AI to pause losing ads instantly, scaling your winners before your competitors even wake up.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-indigo-600/20">
                            Start Optimizing Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg backdrop-blur-sm border border-white/10 transition-colors">
                            View Demo
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    {/* Glassmorphism Card */}
                    <div className="relative w-full max-w-md aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col overflow-hidden">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                        {/* Card Content */}
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-white font-medium text-lg">Campaign Performance</h3>
                                    <p className="text-slate-400 text-sm">Real-time optimization</p>
                                </div>
                                <div className="p-2 bg-indigo-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-indigo-400" />
                                </div>
                            </div>

                            {/* Chart Visual */}
                            <div className="flex-1 flex items-end justify-between gap-3 sm:gap-4 pb-4">
                                {[35, 60, 45, 80, 55, 90, 70].map((height, index) => (
                                    <div key={index} className="w-full h-full flex items-end">
                                        <motion.div
                                            initial={{ height: "0%" }}
                                            animate={{ height: `${height}%` }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.4 + (index * 0.1),
                                                ease: "easeOut"
                                            }}
                                            className={`w-full rounded-t-lg ${index === 5 ? 'bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]' : 'bg-slate-700/50'
                                                }`}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Stats Overlay */}
                            <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-white/5 backdrop-blur-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400 text-sm">ROAS</span>
                                    <span className="text-green-400 font-bold text-sm">+324%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "78%" }}
                                        transition={{ duration: 1.5, delay: 0.8 }}
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements for Depth */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-8 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ y: [15, -15, 15] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-8 -left-12 w-32 h-32 bg-indigo-500/30 rounded-full blur-xl"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
