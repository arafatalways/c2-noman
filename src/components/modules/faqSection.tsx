// src/FAQSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Using Plus/Minus for exact match feeling

// Define the type for an FAQ item
interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

// Data extracted directly from the image content
const faqData: FAQItemType[] = [
  {
    id: 1,
    question: "মুয়ল্লিমিন একাডেমির বিশেষত্ব কী?",
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
    question: "মুয়াল্লিমিন গ্রুপে কীভাবে পরিচিতি পাবো?",
    answer:
      "প্রশিক্ষণ সফলভাবে সম্পন্ন করার পর, আপনি আমাদের বিশেষ মুয়াল্লিমিন গ্রুপে যুক্ত হওয়ার সুযোগ পাবেন এবং সেখানে পরিচিতি ও নেটওয়ার্কিং করতে পারবেন।",
  },
  {
    id: 5,
    question: "প্রশিক্ষণ শেষে ফোনে সার্টিফিকেট পাওয়া যাবে?",
    answer:
      "হ্যাঁ, প্রশিক্ষণ শেষে সফলভাবে কোর্স সম্পন্ন করলে আপনাকে ডিজিটাল সার্টিফিকেট প্রদান করা হবে, যা ফোনে ডাউনলোড করে সংরক্ষণ করা যাবে।",
  },
  {
    id: 6,
    question: "মুয়ল্লিনিন একাডেমির বিশেষত্ব কী?",
    answer:
      "আমাদের বিশেষত্ব হলো অভিজ্ঞ শিক্ষক মণ্ডলী এবং যুগোপযোগী শিক্ষাদান পদ্ধতি। আমরা মানসম্মত শিক্ষা নিশ্চিত করি।",
  },
];

const FAQItem: React.FC<{ item: FAQItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Styling closely matches the subtle light borders in the image
    <div className="border border-border-light dark:border-gray-700 rounded-md mb-4 shadow-sm bg-card-bg-light dark:bg-gray-800 overflow-hidden">
      <motion.button
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        // Subtle hover effect
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-text-light dark:text-text-dark font-medium">
          {item.question}
        </span>
        <div className="text-icon-color dark:text-gray-400">
          {/* Use plus/minus icons as seen in the image */}
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Indented answer section */}
            <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  // State for dark mode, defaulting to system preference

  return (
    <div className=" bg-bg-light dark:bg-gray-700 transition-colors duration-300 p-4 sm:p-8">
      <div className="my-container">
        <header className="flex justify-center items-center flex-col mb-10">
          {/* Placeholder for the logo/icon from the image */}
          <div className="w-12 h-12 bg-orange-400 rounded-full mb-3 flex items-center justify-center shadow-md">
            {/* Could be an actual image or icon */}
            <span className="text-white font-bold">💡</span>
          </div>
          <h1 className="text-2xl font-semibold text-text-light dark:text-text-dark">
            FAQ
          </h1>
          {/* Dark mode toggle button is useful but not in original image design */}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Distribute items into a two-column grid matching the image layout */}
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
