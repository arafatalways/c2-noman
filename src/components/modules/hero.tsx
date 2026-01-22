// src/components/modules/HeroSection.tsx

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative py-6 md:py-10 overflow-x-hidden"
      style={{
        backgroundImage: "url('/kover.png')",
        backgroundSize: "120%", // 🔹 image একটু ছড়িয়ে দেওয়া
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ EXTRA SOFT OVERLAY (background প্রায় hide) */}
      <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/97" />

      <div className="relative z-10 my-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ================= TEXT SIDE ================= */}
          <div className="relative md:w-1/2 text-center md:text-left mt-12 lg:-mt-20">
            {/* 🪐 Floating Saturn (desktop only, very subtle) */}
            <div className="pointer-events-none absolute inset-0 ">
              <motion.img
                src="/saturn.webp"
                alt="Floating Planet"
                className="absolute top-65 md:top-20 right-0 w-32 opacity-75"
                style={{ transform: "translateX(45%)" }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>

            {/* 📘 Floating Book — আরও উপরে */}
            <div className="relative flex justify-center md:justify-start -mt-12 md:-mt-20 mb-2">
              <motion.img
                src="/book.webp"
                alt="Floating Book"
                className="w-32 opacity-75"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-[#06384E] mb-4 leading-tight">
              আন নাহ্দা ইসলামিক <br /> ইনস্টিটিউট…
            </h1>

            <p className="text-sm md:text-lg text-gray-800 dark:text-gray-200 mb-3">
              আদর্শ ও নৈতিকতা সম্পন্ন যুগ সচেতন প্রজন্ম গড়ার এক অনন্য প্রতিষ্ঠান
            </p>

            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
              যেখানে আমরা আপনার সন্তানকে Islamic Values, Academic Knowledge,
              Modern Courses এবং Skill Training-এর মাধ্যমে আগামীর উজ্জ্বল
              ভবিষ্যৎ হিসেবে গড়ে তুলবো। ইনশাআল্লাহ!
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="flex items-center gap-2 border border-[#0084D1] text-[#0084D1] hover:bg-blue-50 dark:hover:bg-slate-800 font-semibold py-3 px-6 rounded-full transition">
                <BookOpen className="w-5 h-5" />
                আমাদের বইসমূহ
              </button>
            </div>
          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="md:w-1/2 md:mt-4">
            <img
              src="/hero.gif"
              alt="Hero Illustration"
              className="mx-auto max-w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
