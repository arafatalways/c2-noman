import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-[#262E40]">
      <div className="my-container text-center">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("contact_title", "যোগাযোগ")}
        </h1>

        {/* SUBTITLE */}
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-16">
          {t(
            "contact_desc",
            "যেকোনো প্রয়োজনে, জিজ্ঞাসা, মতামত কিংবা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা ইনশাআল্লাহ দ্রুত উত্তর দেওয়ার চেষ্টা করবো।",
          )}
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* PHONE */}
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              {t("phone", "মোবাইল")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">+880 1550 708690</p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              {t("email", "ইমেইল")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">info@ilmweb.net</p>
          </div>

          {/* WEBSITE */}
          <div className="flex flex-col items-center">
            <Globe className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              {t("website", "ওয়েবসাইট")}
            </h3>
            <a
              href="https://www.ilmweb.net"
              className="text-indigo-600 hover:underline"
            >
              www.ilmweb.net
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">
              {t("social", "সোশ্যাল মিডিয়া")}
            </h3>

            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-indigo-600">
                <Facebook />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <Twitter />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <Youtube />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
