import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <section id="solutions" className="py-24 container mx-auto px-6 text-center">
        <div className="glass p-12 rounded-3xl border-indigo-500/20 bg-indigo-500/5">
          <h2 className="text-4xl font-bold mb-6">Ready to accelerate your growth?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join 500+ companies using Velostock to streamline their operations.
          </p>
          <button className="px-10 py-5 bg-accent-primary hover:bg-indigo-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-indigo-500/30">
            Get Started Now
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
