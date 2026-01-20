// src/components/modules/HeroSection.tsx

import { BookOpen, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative py-14 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/kover.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-[#FFF9E9]/90 dark:bg-slate-900/90"></div>

      <div className="my-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ================= TEXT SIDE ================= */}
          <div className="relative md:w-1/2 text-center md:text-left">
            {/* 📘 Floating Book */}
            <motion.img
              src="/book.webp"
              alt="Floating Book"
              className="
                pointer-events-none
                absolute
                left-4 top-6
                w-8 sm:w-10 md:w-14
                md:-left-16 md:top-24
                opacity-80
              "
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* 🪐 Floating Saturn */}
            <motion.img
              src="/saturn.webp"
              alt="Floating Planet"
              className="
                pointer-events-none
                absolute
                right-4 top-16
                w-10 sm:w-12 md:w-16
                md:-right-16 md:top-36
                opacity-80
              "
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <p className="text-sm text-blue-300 mb-3 font-medium">
              শুরু হোক জ্ঞানার্জন এখান থেকেই
            </p>

            <h1 className="text-4xl font-bold text-blue-400 mb-5 leading-tight">
              ইলমের আলোয় জাগ্রত
              <br />
              জীবনের প্রত্যয়…
            </h1>

            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
              আদর্শ ও নৈতিকতা সম্পন্ন যুগ সচেতন প্রজন্ম গড়ার এক অনন্য প্রতিষ্ঠান
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              এখানে আমরা ইসলামিক মূল্যবোধ, আধুনিক শিক্ষা ও দক্ষতা উন্নয়নের
              সমন্বয়ে আপনার সন্তানকে আগামীর জন্য প্রস্তুত করে তুলি — ইনশাআল্লাহ।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center gap-2 bg-[#0084D1] hover:bg-[#50A2FF] text-white font-semibold py-3 px-6 rounded-full transition">
                <UserPlus className="w-5 h-5" />
                Explore Courses
              </button>

              <button className="flex items-center gap-2 border border-[#0084D1] text-[#0084D1] hover:bg-purple-50 dark:hover:bg-slate-800 font-semibold py-3 px-6 rounded-full transition">
                <BookOpen className="w-5 h-5" />
                আমাদের বইসমূহ
              </button>
            </div>
          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="md:w-1/2">
            <img
              src="/hero.gif"
              alt="Hero Illustration"
              className="mx-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
