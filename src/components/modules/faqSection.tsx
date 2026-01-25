// src/FAQSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItemType[] = [
  {
    id: 1,
    question: "আন নাহ্দা ইনস্টিটিউট বিশেষত্ব কী?",
    answer:
      "এই একাডেমিটি আধুনিক প্রযুক্তি ব্যবহার করে ইসলামিক শিক্ষা প্রদান করে থাকে, যা শিক্ষার্থীদের জন্য সহজ এবং কার্যকর। এটি অভিজ্ঞ শিক্ষক মণ্ডলী এবং যুগোপযোগী শিক্ষাদান পদ্ধতির জন্য পরিচিত।",
  },
  {
    id: 2,
    question: "কারা এই একাডেমির প্রশিক্ষণ নিতে পারবে?",
    answer:
      "যে কেউ ইসলামিক জ্ঞান অর্জন করতে আগ্রহী, তারা এই একাডেমিতে প্রশিক্ষণ নিতে পারবে। বয়সের কোনো সীমাবদ্ধতা নেই, সবার জন্য উন্মুক্ত।",
  },
  {
    id: 3,
    question: "প্রশিক্ষণ শেষে কী কোনো সমস্যা সমাধান?",
    answer:
      "হ্যাঁ, প্রশিক্ষণ শেষে শিক্ষার্থীদের যেকোনো সমস্যা সমাধানে আমাদের সাপোর্ট টিম সবসময় প্রস্তুত থাকে এবং গাইডেন্স প্রদান করে।",
  },
  {
    id: 4,
    question: "আন নাহ্দা গ্রুপে কীভাবে পরিচিতি পাবো?",
    answer:
      "প্রশিক্ষণ সফলভাবে সম্পন্ন করার পর, আপনি আমাদের বিশেষ আন নাহ্দা গ্রুপে যুক্ত হওয়ার সুযোগ পাবেন এবং সেখানে পরিচিতি ও নেটওয়ার্কিং করতে পারবেন।",
  },
  {
    id: 5,
    question: "প্রশিক্ষণ শেষে ফোনে সার্টিফিকেট পাওয়া যাবে?",
    answer:
      "হ্যাঁ, প্রশিক্ষণ শেষে সফলভাবে কোর্স সম্পন্ন করলে আপনাকে ডিজিটাল সার্টিফিকেট প্রদান করা হবে, যা ফোনে ডাউনলোড করে সংরক্ষণ করা যাবে।",
  },
  {
    id: 6,
    question: "আন নাহ্দা ইনস্টিটিউট বিশেষত্ব কী?",
    answer:
      "আমাদের বিশেষত্ব হলো অভিজ্ঞ শিক্ষক মণ্ডলী এবং যুগোপযোগী শিক্ষাদান পদ্ধতি। আমরা মানসম্মত শিক্ষা নিশ্চিত করি।",
  },
];

interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="self-start border border-border-light dark:border-gray-700 rounded-md shadow-sm bg-card-bg-light dark:bg-gray-800 overflow-hidden">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-4 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      >
        <span className="text-text-light dark:text-text-dark font-medium">
          {item.question}
        </span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-icon-color dark:text-gray-400" />
        ) : (
          <Plus className="w-4 h-4 text-icon-color dark:text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white dark:bg-gray-700 transition-colors duration-300 p-4 sm:p-8">
      <div className="my-container mb-4">
        <header className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-orange-400 rounded-full mb-3 flex items-center justify-center shadow-md">
            <span className="text-white font-bold">💡</span>
          </div>
          <h1 className="text-2xl font-semibold text-text-light dark:text-text-dark">
            FAQ
          </h1>
        </header>

        {/* 🔥 IMPORTANT FIX HERE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
