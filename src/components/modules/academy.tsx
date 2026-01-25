// src/components/modules/CourseSection.tsx

import React from "react";
import { motion } from "framer-motion";

/* ================= TYPES ================= */
type Course = {
  title: string;
  description: string;
  image: string;
};

interface CourseCardProps extends Course {
  index: number;
}

/* ================= GRADIENTS ================= */
const gradients = [
  "from-green-500 to-emerald-400",
  "from-blue-500 to-cyan-400",
  "from-orange-500 to-amber-400",
];

/* ================= COURSE CARD ================= */
const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  index,
}) => {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      {/* 🔥 Gradient Glow */}
      <div
        className={`absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 bg-linear-to-r ${gradient}`}
      />

      {/* 🧱 Card */}
      <div className="relative h-full bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Image */}
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* 🔹 Bottom Gradient Line */}
        <div
          className={`mt-auto h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-linear-to-r ${gradient}`}
        />
      </div>
    </motion.div>
  );
};

/* ================= COURSE SECTION ================= */
const Academy: React.FC = () => {
  const courses: Course[] = [
    {
      title: "কিতাব বিভাগ",
      description:
        "আলিমিয়াত ও দাওরায়ে হাদিসের গুরুত্বপূর্ণ পড়াশোনা। আরবি ব্যাকরণ, ফিকহ, আকিদা ও তাফসিরের গভীর জ্ঞান অর্জনের সুযোগ।",
      image: "../a-1.webp",
    },
    {
      title: "হিফজুল কুরআন",
      description:
        "নিয়মিত মুরাজাআ ও শুদ্ধ তাজবীদের মাধ্যমে পূর্ণ কুরআন সহিহভাবে হিফজ করার সুযোগ।",
      image: "../a-1.webp",
    },
    {
      title: "নূরানী ও নাজেরা",
      description:
        "শিশুদের জন্য সহজ কুরআন পড়ার ভিত্তি তৈরি। হরফ, মাখরাজ ও শুদ্ধ উচ্চারণ শিক্ষা।",
      image: "../a-1.webp",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="my-container">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            📘 একাডেমিক কার্যক্রম
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-white mb-4">
            আমাদের বিভাগসমূহ
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            প্রতিটি বিভাগের জন্য রয়েছে আলাদা যত্ন এবং বিশেষায়িত কারিকুলাম যা
            আপনার সন্তানকে দক্ষ করে তুলবে।
          </p>
        </motion.div>

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
