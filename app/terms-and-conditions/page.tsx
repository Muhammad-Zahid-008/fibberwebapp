import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Terms And Conditions
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            Terms and Conditions - Coming Soon
          </p>
      
        </div>
      </main>
      <div className="py-10 md:py-10 bg-[#081351]">
      <Footer />
    </div>
    </div>
  );
}

