// src/components/modules/HeroSection.tsx

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative py-14 md:py-24 overflow-x-hidden"
      style={{
        backgroundImage: "url('/kover.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFFFFF]/90 dark:bg-slate-900/90" />

      <div className="relative z-10 my-container overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-full overflow-x-hidden">
          {/* ================= TEXT SIDE ================= */}
          <div className="relative md:w-1/2 text-center md:text-left max-w-full overflow-x-hidden">
            {/* ✅ Floating visuals (Desktop only, SAFE) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.img
                src="/saturn.webp"
                alt="Floating Planet"
                className="absolute top-40 right-0 w-25 opacity-80"
                style={{ transform: "translateX(40%)" }}
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* ✅ Book.webp ঠিক “শুরু হোক জ্ঞানার্জন এখান থেকেই” লাইনটির উপরে */}
            <div className="relative mb-3 flex justify-center md:justify-start">
              <motion.img
                src="/book.webp"
                alt="Floating Book"
                className="w-24 opacity-80"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            <h1 className="text-4xl font-bold text-[#06384E] mb-5 leading-tight">
              আন নাহ্দা ইসলামিক <br /> ইনস্টিটিউট…
            </h1>

            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
              আদর্শ ও নৈতিকতা সম্পন্ন যুগ সচেতন প্রজন্ম গড়ার এক অনন্য প্রতিষ্ঠান
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              যেখানে আমরা আপনার সন্তানকে Islamic Values, Academic Knowledge,
              Modern Courses এবং Skill Training-এর মাধ্যমে আগামীর উজ্জ্বল
              ভবিষ্যৎ হিসেবে গড়ে তুলবো। ইনশাআল্লাহ!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center gap-2 border border-[#0084D1] text-[#0084D1] hover:bg-purple-50 dark:hover:bg-slate-800 font-semibold py-3 px-6 rounded-full transition">
                <BookOpen className="w-5 h-5" />
                আমাদের বইসমূহ
              </button>
            </div>
          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="md:w-1/2 max-w-full overflow-x-hidden">
            <img
              src="/hero.gif"
              alt="Hero Illustration"
              className="mx-auto max-w-full rounded-2xl shadow-xl block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
