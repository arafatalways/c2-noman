import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// উদাহরণ ডেটা (আপনার আসল ডেটা দিয়ে পরিবর্তন করুন)

const footerLinks = [
  { title: "আমাদের সম্পর্কে", href: "/about" },
  { title: "কোর্সসমূহ", href: "/courses" },
  { title: "প্রবন্ধ ও রচনা", href: "/article" },
  { title: "সাধারণ জিজ্ঞাসা", href: "contact" },
];

interface SocialLinkItem {
  icon: React.ReactNode;
  href: string;
  color: string;
}

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
    color: "bg-[#FBBC04] hover:bg-[#FBBC04]", // ✅ double # ঠিক করলাম
  },
];

const FooterComponent = () => {
  return (
    // flex-col by default (mobile), md:flex-row on medium screens and up
    // gap-8 provides space between columns on all devices
    <div className="my-container">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-4">
        {/* Column 1: Logo and Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4"
        >
          <div className="shrink-0">
            {/* <img className="w-46" src="../logo.png" alt="logo" /> */}
            {/* Placeholder for image */}
            <div className="w-46 h-20 mt-6 mb-4 flex items-center justify-center">
              <img src="../logo.png" alt="" />
            </div>
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

        {/* Column 2-4: Links, Contact, Other Info (uses a wrapper for stacking) */}
        {/* This div wraps the remaining columns and makes them stack on mobile and form a grid on larger screens */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full md:w-auto">
          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start gap-4"
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              প্রয়োজনীয় লিংক
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
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

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-4"
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              সহযোগিতা
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ইমেইল: annahdaislamicademy@gmail.com
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              মোবাইল: +880 1883-595268
            </p>
          </motion.div>

          {/* Other Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start gap-4"
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              অন্যান্য
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">ব্রহ্ম</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              নিবন্ধন করবেন যেভাবে
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
