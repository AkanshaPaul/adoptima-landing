import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to optimize?
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Join thousands of marketers saving time and budget with AdOptima AI.
                </p>

                <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg shadow-indigo-500/30 transition-all hover:scale-105">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
