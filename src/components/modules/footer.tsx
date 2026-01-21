// src/components/modules/footer.tsx

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
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
  { title: "আমাদের সম্পর্কে", href: "/about" },
  { title: "কোর্সসমূহ", href: "/courses" },
  { title: "প্রবন্ধ ও রচনা", href: "/article" },
  { title: "সাধারণ জিজ্ঞাসা", href: "contact" },
];

const socialLinks: SocialLinkItem[] = [
  {
    icon: <FaWhatsapp size={18} />,
    href: "https://linkedin.com",
    color: "bg-[#21C063] hover:bg-[#21C063]",
  },
  {
    icon: <FaFacebook size={18} />,
    href: "https://facebook.com",
    color: "bg-[#0866FF] hover:bg-[#0866FF]",
  },
  {
    icon: <FaYoutube size={18} />,
    href: "https://twitter.com",
    color: "bg-[#FF0033] hover:bg-[#FF0033]",
  },
  {
    icon: <MdEmail size={18} />,
    href: "https://twitter.com",
    color: "bg-[#FBBC04] hover:bg-[##FBBC04]",
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
            className="flex flex-col items-start gap-4" // ✅ flex-col + gap-4 দিয়ে icon distance ঠিক করা
          >
            <div>
              <img className="w-46" src="../logo.png" alt="logo" />
            </div>

            <div className="flex gap-3">
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
                  <Link
                    to={link.href}
                    className="relative text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                  >
                    {link.title}
                  </Link>
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
              annahdaislamicademy@gmail.com
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">মোবাইল</p>
            <p className="font-medium text-gray-800 dark:text-white">
              +880 1883-595268
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
          <Link to={"https://www.linkedin.com/in/arafatalways1/"}>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © 2026 An Nahda Academy • Developed by{" "}
              <u className="">Yeasin Arafat</u>
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
