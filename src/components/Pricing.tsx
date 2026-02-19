import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Simple, transparent pricing.
                    </h2>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-14 h-8 bg-slate-700 rounded-full p-1 transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <motion.div
                                className="w-6 h-6 bg-white rounded-full shadow-md"
                                animate={{ x: isAnnual ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                            Yearly <span className="text-indigo-400 text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

                    {/* Starter Card */}
                    <div className="bg-slate-800/30 rounded-2xl border border-white/10 p-8 flex flex-col h-full hover:border-white/20 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                        <p className="text-slate-400 text-sm mb-6">For individuals just starting out.</p>
                        <div className="text-3xl font-bold text-white mb-6">$0<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                        <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-colors mb-8">
                            Get Started
                        </button>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> 1 Ad Account</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Basic Analytics</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> 24h Data Retention</li>
                        </ul>
                    </div>

                    {/* Pro Card (Highlighted) */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative bg-slate-800 rounded-2xl border border-indigo-500 p-8 flex flex-col h-full shadow-2xl shadow-indigo-500/10 md:scale-105 z-10"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold text-white shadow-lg">
                            MOST POPULAR
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                        <p className="text-slate-400 text-sm mb-6">For growing teams and agencies.</p>
                        <div className="flex items-baseline gap-1 mb-6">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={isAnnual ? "year" : "month"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-4xl font-bold text-white"
                                >
                                    ${isAnnual ? 79 : 99}
                                </motion.span>
                            </AnimatePresence>
                            <span className="text-lg text-slate-500">/mo</span>
                        </div>
                        <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/25 transition-all mb-8">
                            Start Free Trial
                        </button>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> 5 Ad Accounts</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Advanced AI Predictions</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Competitor Spy</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Priority Support</li>
                        </ul>
                    </motion.div>

                    {/* Enterprise Card */}
                    <div className="bg-slate-800/30 rounded-2xl border border-white/10 p-8 flex flex-col h-full hover:border-white/20 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                        <p className="text-slate-400 text-sm mb-6">For large scale operations.</p>
                        <div className="text-3xl font-bold text-white mb-6">Custom</div>
                        <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-colors mb-8">
                            Contact Sales
                        </button>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Unlimited Accounts</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Custom AI Models</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> Dedicated Account Manager</li>
                            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-indigo-400" /> API Access</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
