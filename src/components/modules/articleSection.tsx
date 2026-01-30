import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

/* ================= TYPES ================= */
interface Article {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  slug: string;
}

interface ArticleCardProps extends Article {
  index: number;
}

/* ================= GRADIENTS ================= */
const gradients = [
  "from-blue-500 to-cyan-400",
  "from-emerald-500 to-green-400",
  "from-orange-500 to-amber-400",
];

/* ================= ARTICLE CARD ================= */
const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  altText,
  slug,
  index,
}) => {
  const gradient = gradients[index % gradients.length];

  return (
    <Link to={`/articles/${slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="relative group h-full cursor-pointer"
      >
        {/* 🔥 Gradient Glow / Hover effect */}
        <div
          className={`absolute -inset-0.5 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500 bg-linear-to-r ${gradient}`}
        />

        {/* 🧱 Card */}
        <div className="relative h-full bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 flex flex-col overflow-hidden">
          {/* Image */}
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105"
          />

          {/* Text */}
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* 🔹 Bottom Gradient Line */}
          <div
            className={`mt-auto h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-linear-to-r ${gradient}`}
          />
        </div>
      </motion.div>
    </Link>
  );
};

/* ================= ARTICLE SECTION ================= */
const ArticleSection: React.FC = () => {
  const articles: Article[] = [
    {
      title: "সন্তানের শিক্ষা ভাবনা:- মা বাবার করণীয়",
      description:
        "পিতা তার সন্তানকে উত্তম আদবের চেয়ে উত্তম কিছু উপহার দিতে পারে না।",
      imageUrl: "../a-three.jfif",
      altText: "ইসলামী শিক্ষা",
      slug: "../article-one",
    },
    {
      title: "আমাদের শিক্ষা-কারিকুলাম কেমন হওয়া উচিৎ",
      description:
        "আমাদের সমাজে সমষ্টিগতভাবে দু’ধরনের শিক্ষা ব্যবস্থার অস্তিত্ব পাওয়া যায়...",
      imageUrl: "../a-two.jfif",
      altText: "নৈতিকতা ও আদর্শ",
      slug: "../article-two",
    },
    {
      title: "আন নাহ্দা ইসলামিক ইনস্টিটিউট",
      description:
        "আদর্শ ও নৈতিকতা সম্পন্ন যুগ-সচেতন প্রজন্ম গড়ার এক অনন্য প্রতিষ্ঠান",
      imageUrl: "../a-1.jfif",
      altText: "দ্বীনি ও আধুনিক শিক্ষা",
      slug: "../article-three",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="my-container">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center dark:text-white mb-10"
        >
          প্রবন্ধ ও রচনা
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
