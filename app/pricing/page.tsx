import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing
          </h1>
          <p className="text-gray-300 text-lg">
            Pricing plans - Coming Soon
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

