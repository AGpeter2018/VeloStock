import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-glow -z-10" />

            <div className="container mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-xs font-bold tracking-widest uppercase text-accent-primary animate-fade-in">
                    Next-Gen Inventory Management
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-slide-up">
                    Manage your stock with <br />
                    <span className="text-gradient">unmatched velocity.</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    Velostock gives you real-time visibility, AI-powered predictions, and
                    seamless multi-warehouse sync. Scalable for businesses of all sizes.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                        Book a Demo
                    </button>
                </div>

                <div className="relative max-w-5xl mx-auto glass rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border-white/5 animate-fade-in">
                    <Image
                        src="/hero-dashboard.png"
                        alt="Velostock Dashboard"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
                </div>
            </div>
        </section>
    );
}
