import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Handshake, CheckCircle2 } from "lucide-react";

interface SpecialityItemData {
  title: string;
  icon: React.ElementType;
  description: string[];
  color: string;
  lightBg: string;
  iconColor: string;
}

const specialitiesData: SpecialityItemData[] = [
  {
    title: "লক্ষ্য উদ্দেশ্য",
    icon: Target,
    description: [
      "আদর্শ, নৈতিকতা ও ঈমানভিত্তিক একটি যুগ-সচেতন প্রজন্ম গড়ে তোলাই আমাদের মূল লক্ষ্য।",
      "কুরআন ও সুন্নাহর আলোকে আধুনিনাক একাডেমিক শিক্ষা ও প্রয়োজনীয় দক্ষতার সমন্বয়ে আমরা শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করি—ইনশা আল্লাহ।",
    ],
    color: "from-pink-500 to-rose-500",
    lightBg: "bg-pink-50 dark:bg-pink-900/20",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    title: "মূল্যবোধ",
    icon: Handshake,
    description: [
      "ইসলামী আদর্শ, সততা ও শালীনতার উপর দাঁড়িয়ে আমরা মানসম্মত শিক্ষা, শৃঙ্খলা এবং দায়িত্বশীলতা গড়ে তোলায় বিশ্বাস করি।",
      " Deen ও Dunya-র মধ্যে ভারসাম্য বজায় রেখে শিক্ষার্থীদের পূর্ণাঙ্গ মানুষ হিসেবে তৈরি করাই আমাদের অঙ্গীকার।",
    ],
    color: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "সেবা",
    icon: Lightbulb,
    description: [
      "কুরআন ও ইসলামিক স্টাডিজ ভিত্তিক শিক্ষা আধুনিক ও মানসম্মত একাডেমিক কারিকুলাম",
      "নৈতিকতা ও চরিত্র গঠনমূলক কার্যক্রম	দক্ষতা উন্নয়ন ও যুগোপযোগী স্কিল ট্রেনিং	অভিভাবক-বান্ধব ও শৃঙ্খলাপূর্ণ শিক্ষাপরিবেশ",
    ],
    color: "from-orange-500 to-amber-500",
    lightBg: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

interface SpecialityCardProps {
  item: SpecialityItemData;
  index: number;
}

const SpecialityCard: React.FC<SpecialityCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      <div
        className={`absolute -inset-0.5 bg-linear-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500`}
      ></div>

      <div className="relative h-full bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl flex flex-col border border-gray-100 dark:border-slate-800">
        <div className="flex items-center mb-6">
          <div
            className={`p-4 rounded-xl ${item.lightBg} ${item.iconColor} transform group-hover:scale-110 transition-transform duration-300`}
          >
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">
            {item.title}
          </h3>
        </div>

        <ul className="space-y-4 grow">
          {item.description.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-600 dark:text-gray-300"
            >
              <CheckCircle2
                className={`w-5 h-5 mr-3 mt-1 shrink-0 ${item.iconColor}`}
              />
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Decorative Line */}
        <div
          className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-r ${item.color} rounded-full`}
        ></div>
      </div>
    </motion.div>
  );
};

const Special: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#262E40] py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="my-container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold dark:text-white mt-3"
          >
            আমাদের{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              বিশেষত্ব
            </span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specialitiesData.map((item, index) => (
            <SpecialityCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
