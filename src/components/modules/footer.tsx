// Assuming lucide-react for placeholder icons for social links
import { Facebook, Twitter, Linkedin } from "lucide-react";
// Using basic anchor tags, but you can replace with your 'Link' component from react-router-dom

// We will use basic links as seen in the image footer
const footerLinks = [
  { title: "আমাদের সম্পর্কে", href: "#" },
  { title: "গোপনীয়তা নীতি", href: "#" },
  { title: "শর্তাবলী", href: "#" },
  { title: "সাধারণ জিজ্ঞাসা", href: "#" },
  { title: "নিবন্ধন করবেন যেভাবে", href: "#" },
];

// CORRECTED: Defined as a proper array of objects
const socialLinks = [
  {
    icon: <Facebook className="size-5 text-white" />,
    href: "#",
    bg: "bg-[#1DA1F2]",
  },
  {
    icon: <Twitter className="size-5 text-white" />,
    href: "#",
    bg: "bg-[#1DA1F2]",
  },
  {
    icon: <Linkedin className="size-5 text-white" />,
    href: "#",
    bg: "bg-[#0A66C2]",
  },
];

const Footer = () => {
  return (
    // Main background color matching the light beige in the image
    <footer className="w-full bg-[#fefaf5]">
      {/* Top Section with main content and links */}
      <div className="my-container pt-12 pb-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Column 1: Academy Info and Social Icons */}
          <div className="flex flex-col gap-4 max-w-sm">
            {/* Logo Placeholder (Replace with your actual SVG if needed) */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-full"></div>{" "}
              {/* Placeholder icon/logo area */}
              <h3 className="text-lg font-semibold text-gray-800">
                মুয়াল্লিমিন একাডেমি
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              মুয়াল্লিমিন একাডেমি একটি উদ্যম, একটি পথচলা যা একটি টেকসই
              শিক্ষাব্যবস্থার প্রয়োজনীয় সকল সংস্কারের জন্য নিবেদিত।
            </p>
            {/* Social Icons (using circles as in the image) */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-full ${social.bg} transition-opacity hover:opacity-80`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Required Links (in Bengali) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-800">প্রয়োজনীয় লিংক</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-blue-600"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collaboration (সহযোগিতা) & Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-800">সহযোগিতা</h4>
            <p className="text-sm text-gray-600">সাধারণ জিজ্ঞাসা</p>
            <p className="text-sm text-gray-600">
              ইমেইল: <br />
              <strong className="text-gray-800">
                muallimeenacademy@gmail.com
              </strong>
            </p>
            <p className="text-sm text-gray-600">
              মোবাইল: <br />
              <strong className="text-gray-800">01836096651</strong>
            </p>
          </div>

          {/* Column 4: Other (অন্যান্য) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-800">অন্যান্য</h4>
            <p className="text-sm text-gray-600">ব্রহ্ম</p>
            <p className="text-sm text-gray-600">নিবন্ধন করবেন যেভাবে</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar (Darker gray background from image) */}
      <div className="bg-gray-100 py-4 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-gray-600">
            Copyright 2025 Muallimeen Academy | Developed by Sakib Binnesar
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Coordinate by Zubayr Ahmad Saqib.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
