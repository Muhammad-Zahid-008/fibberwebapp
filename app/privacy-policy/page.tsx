import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdOutlineMail } from "react-icons/md";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 right-0 pointer-events-none -z-10">
        <svg width="1121" height="1072" viewBox="0 0 1121 1072" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_439_2727)">
            <ellipse cx="807" cy="304" rx="527" ry="488" fill="url(#paint0_linear_439_2727)" fillOpacity="0.65" />
          </g>
          <defs>
            <filter id="filter0_f_439_2727" x="0" y="-464" width="1614" height="1536" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_439_2727" />
            </filter>
            <linearGradient id="paint0_linear_439_2727" x1="1380" y1="-284.5" x2="585.73" y2="758.57" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B8FF" />
              <stop offset="0.471154" stopColor="#3555FF" />
              <stop offset="0.942308" stopColor="#C702EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Header />
      <main className=" py-0">
        <div className="px-[5%]">
          <h1 className="text-4xl md:text-7xl pt-20 pb-20 text-center font-bold text-white mb-8">
            Privacy Policy
          </h1>
        </div>
        <div className="bg-white text-black px-[5%] py-10 my-0">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Introduction */}
            <p className="text-lg leading-relaxed text-gray-700">
              Fibber (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Fibber mobile application (the &quot;App&quot;) and related web services (including admin panel and landing page). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use Fibber.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                1. Information We Collect
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We collect the following types of data to provide and improve our services:
              </p>

              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#061353] mb-3">
                    a. Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Name, email address, and Apple ID/Google account (for authentication)</li>
                    <li>Subscription and payment details (handled securely via Apple App Store or Google Play)</li>
                    <li>Optional user feedback or support messages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#061353] mb-3">
                    b. Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>App interactions (e.g., tap & speak events)</li>
                    <li>Device information (model, OS version, unique device identifiers)</li>
                    <li>Logs related to speech input, response generation, and app performance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#061353] mb-3">
                    c. Audio Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Voice inputs are processed temporarily by AI systems to generate results.</li>
                    <li>Audio data is not stored permanently unless required for service improvement and only with explicit consent.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#061353] mb-3">
                    d. Automatically Collected Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>IP address, device type, browser type, crash logs, and analytics data (via AWS CloudWatch or equivalent)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                2. How We Use Your Information
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We use collected data to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide real-time voice-to-text and AI-generated results</li>
                <li>Manage subscriptions and verify payments</li>
                <li>Improve app performance and personalization</li>
                <li>Respond to customer support inquiries</li>
                <li>Ensure compliance with legal and security obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                3. Subscription and Payments
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>In-app purchases and subscriptions are processed by Apple App Store and Google Play Billing.</li>
                <li>We do not store or access your payment details directly.</li>
                <li>Subscription status and renewal are managed securely through these platforms.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                4. Data Storage and Security
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Data is securely stored and processed on Amazon Web Services (AWS).</li>
                <li>We use industry-standard encryption (HTTPS, TLS 1.2+) and access controls.</li>
                <li>Audio data is deleted after processing unless user consent is provided for retention.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                5. Data Sharing
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>We do not sell or rent your data.</strong> Data may be shared only with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Trusted third-party service providers (e.g., AWS, analytics tools)</li>
                <li>Legal authorities if required by law</li>
                <li>Apple/Google for billing and subscription management</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                6. User Rights
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Depending on your region, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access and review your personal data</li>
                <li>Request deletion or correction of data</li>
                <li>Withdraw consent at any time</li>
                <li>Contact us for data export or removal</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                To exercise these rights, email:{" "}
                <a href="mailto:privacy@fibberapp.com" className="text-[#3555FF] hover:text-[#C702EF] font-semibold underline">
                  privacy@fibberapp.com
                </a>
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Fibber is not intended for users under the age of 13 (or 16 where applicable). We do not knowingly collect personal data from children. If discovered, such data will be deleted immediately.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                8. Data Retention
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We retain minimal data only for as long as necessary to provide services or comply with legal obligations.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                9. International Data Transfers
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Your data may be processed on servers located in regions outside your home country (e.g., AWS regions). We ensure compliance with applicable data protection laws (GDPR, CCPA).
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                10. Updates to This Policy
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We may update this Privacy Policy periodically. Changes will be posted within the app and on our website. Continued use of the app means you accept the updated policy.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#061353] mt-8">
                11. Contact Us
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                For any questions or privacy concerns, please contact us at:
              </p>
              <p className="text-xl font-semibold text-[#061353] flex items-center gap-2">
                <MdOutlineMail className="text-[#081351]" />
                <a href="mailto:privacy@fibberapp.com" className="text-[#3555FF] hover:text-[#081351] underline">
                  privacy@fibberapp.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <div className="py-10 md:py-10 bg-[#081351]">

      <Footer />
      </div>
    </div>
  );
}

