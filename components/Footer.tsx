export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <div className="text-xl font-bold tracking-tighter text-white mb-2">
                            VELO<span className="text-accent-primary">STOCK</span>
                        </div>
                        <p className="text-sm text-slate-500">© 2026 Velostock Inc. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex space-x-4">
                        {/* Social icons placeholder */}
                        <div className="w-8 h-8 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white cursor-pointer">
                            𝕏
                        </div>
                        <div className="w-8 h-8 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white cursor-pointer">
                            in
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
