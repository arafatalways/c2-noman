import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { X } from "lucide-react"; // X আইকন ইমপোর্ট করা হয়েছে ক্লোজ বাটনের জন্য
import { Transition } from "@headlessui/react"; // Headless UI Transition ইমপোর্ট করা হয়েছে

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // মেনু ওপেন/ক্লোজ স্টেট

  // ছবির সাথে মিল রেখে বাংলা ন্যাভিগেশন লিংক

  const navLinks = [
    { name: " মূলপাতা", path: "/" },
    { name: "বিভাগ সমূহ", path: "/faq" },
    { name: "প্রবন্ধ ও রচনা", path: "/article" },
    { name: "কোর্সসমূহ", path: "/courses" },
    { name: "পরিচিতি", path: "/about" },
    // { name: "যোগাযোগ", path: "/education" },
  ];

  return (
    // হেডার সেকশন: ছবির ব্যাকগ্রাউন্ড কালার এবং ডার্ক মোড কালার
    <header className="sticky my-container top-4 z-50 border-b border-gray-200 bg-[#FFFFFF] backdrop-blur-lg transition-all duration-300 dark:border-[#262E40] dark:bg-[#262E40] rounded-xl shadow-md">
      <div className="my-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link className="flex items-center gap-2 text-teal-600" to="/">
              <span className="hidden text-xl font-bold text-gray-900 dark:text-white sm:block">
                <img className="w-26" src="../logo.png" alt="logo" />
              </span>
            </Link>
          </div>

          {/* Desktop Links (md স্ক্রিন থেকে দেখাবে) */}
          <div className="hidden lg:block">
            <nav>
              <ul className="flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#001f5b] hover:text-[#2A4976] dark:text-gray-300 dark:hover:text-white transition duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:block rounded-lg bg-[#0084D1] px-6 py-2 text-white font-semibold shadow-md hover:bg-[#315382] transition duration-200"
              >
                যোগাযোগ
              </Link>
              <ModeToggle />
            </div>

            {/* মোবাইল মেনু বাটন */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg bg-gray-100 p-2 text-gray-600 dark:bg-gray-800"
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <div className="lg:hidden absolute top-16 right-0 w-90 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg rounded-b-xl">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#2A4976] dark:hover:text-white transition duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center rounded-lg bg-[#2A4976] py-2 text-white font-semibold mt-4 hover:bg-[#315382] transition duration-200"
            >
              যোগাযোগ
            </Link>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
