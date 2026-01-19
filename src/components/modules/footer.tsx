// src/components/modules/footer.tsx

import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface LinkItem {
  title: string;
  href: string;
}

interface SocialLinkItem {
  icon: React.ReactNode;
  href: string;
  color: string;
}

const footerLinks: LinkItem[] = [
  { title: "আমাদের সম্পর্কে", href: "#" },
  { title: "গোপনীয়তা নীতি", href: "#" },
  { title: "শর্তাবলী", href: "#" },
  { title: "সাধারণ জিজ্ঞাসা", href: "#" },
  { title: "নিবন্ধন করবেন যেভাবে", href: "#" },
];

const socialLinks: SocialLinkItem[] = [
  {
    icon: <Facebook size={18} />,
    href: "https://facebook.com",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <Twitter size={18} />,
    href: "https://twitter.com",
    color: "bg-sky-500 hover:bg-sky-600",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://linkedin.com",
    color: "bg-blue-700 hover:bg-blue-800",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#fefaf5] to-white dark:from-[#0f172a] dark:to-[#020617]">
      {/* Top Content */}
      <div className="my-container pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 shadow-lg"></div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                মুয়াল্লিমিন একাডেমি
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              একটি টেকসই ও আধুনিক শিক্ষাব্যবস্থা গড়ে তুলতে নিবেদিত একটি শিক্ষা
              উদ্যোগ।
            </p>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-white shadow-md transition ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              প্রয়োজনীয় লিংক
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="relative text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-gray-800 dark:text-white">
              সহযোগিতা
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-400">ইমেইল</p>
            <p className="font-medium text-gray-800 dark:text-white">
              muallimeenacademy@gmail.com
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">মোবাইল</p>
            <p className="font-medium text-gray-800 dark:text-white">
              01836096651
            </p>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-gray-800 dark:text-white">
              অন্যান্য
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">ব্রহ্ম</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              নিবন্ধন করবেন যেভাবে
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-[#020617]/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            © 2025 Muallimeen Academy • Developed by Sakib Binnesar
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Coordinated by Zubayr Ahmad Saqib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
