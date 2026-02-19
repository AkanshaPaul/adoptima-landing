import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Zap, Search, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Everything you need to <span className="text-indigo-400">scale ads</span>.
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Powerful tools to automate your ad strategy and maximize ROAS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Predictive AI (Span 2) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 bg-slate-800/50 rounded-xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden group"
                    >
                        <div>
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Predictive AI</h3>
                            <p className="text-slate-400">Forecast ad performance before you spend a dime.</p>
                        </div>
                        {/* Visual: Trend Graph */}
                        <div className="relative h-32 mt-8 w-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent bottom-0" />
                            <svg viewBox="0 0 100 40" className="w-full h-full stroke-indigo-500 stroke-2 fill-none overflow-visible">
                                <motion.path
                                    d="M0 35 Q 20 30, 40 15 T 100 5"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </svg>
                            {/* Animated Points */}
                            <motion.div
                                className="absolute top-[12%] right-0 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </div>
                    </motion.div>

                    {/* Card 2: Instant Alerts (Span 1) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-slate-800/50 rounded-xl border border-white/10 p-8 flex flex-col group relative"
                    >
                        <div className="absolute top-6 right-6">
                            <div className="relative">
                                <Bell className="w-6 h-6 text-slate-300" />
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-white mb-2">Instant Alerts</h3>
                            <p className="text-slate-400 text-sm">Get notified the moment ROAS drops below target.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Competitor Spy (Span 1) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-slate-800/50 rounded-xl border border-white/10 p-8 flex flex-col justify-between group"
                    >
                        <div>
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Competitor Spy</h3>
                        </div>

                        <div className="space-y-3 mt-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-900/50 border border-white/5">
                                    <div className="w-6 h-6 rounded-full bg-slate-700" />
                                    <div className="h-2 w-20 bg-slate-700 rounded" />
                                    <div className="h-2 w-8 bg-slate-700 rounded ml-auto" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 4: One-Click Optimization (Span 2) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 bg-slate-800/50 rounded-xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-8 group"
                    >
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">One-Click Optimization</h3>
                            <p className="text-slate-400">Apply AI recommendations instantly.</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 flex items-center gap-2 group/btn"
                        >
                            <Zap className="w-5 h-5 fill-current" />
                            Optimize Now
                            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover/btn:ring-white/40 transition-all" />
                        </motion.button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Features;
