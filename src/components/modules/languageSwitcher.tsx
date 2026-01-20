// src/components/common/LanguageSwitcher.tsx

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-slate-800 transition"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">
          {i18n.language === "bn"
            ? "বাংলা"
            : i18n.language === "en"
              ? "English"
              : "العربية"}
        </span>
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden z-50">
          <button
            onClick={() => changeLanguage("bn")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-purple-50 dark:hover:bg-slate-800 ${
              i18n.language === "bn" &&
              "bg-purple-100 dark:bg-slate-800 font-semibold"
            }`}
          >
            🇧🇩 বাংলা
          </button>

          <button
            onClick={() => changeLanguage("en")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-purple-50 dark:hover:bg-slate-800 ${
              i18n.language === "en" &&
              "bg-purple-100 dark:bg-slate-800 font-semibold"
            }`}
          >
            🇬🇧 English
          </button>

          <button
            onClick={() => changeLanguage("ar")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-purple-50 dark:hover:bg-slate-800 ${
              i18n.language === "ar" &&
              "bg-purple-100 dark:bg-slate-800 font-semibold"
            }`}
          >
            🇸🇦 العربية
          </button>
        </div>
      )}
    </div>
  );
}
