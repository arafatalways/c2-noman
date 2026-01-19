import { BookOpen, UserPlus } from "lucide-react"; // আইকন ইমপোর্ট করুন

export default function HeroSection() {
  return (
    // মূল সেকশন: ডার্ক মোডে ব্যাকগ্রাউন্ড ডার্ক ব্লু-ব্ল্যাক করা হয়েছে
    <section className="bg-[#FFF9E9] dark:bg-slate-900 py-12 md:py-20 transition-colors duration-300">
      {/* কন্টেইনার: সর্বোচ্চ প্রস্থ এবং প্যাডিং */}
      <div className="my-container">
        {/* গ্রিড লেআউট: md স্ক্রিন থেকে কন্টেন্ট দুটি কলামে ভাগ হবে */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* বাম পাশের টেক্সট কন্টেন্ট */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* প্রধান শিরোনাম: ডার্ক মোডে হালকা নীল/সাদাটে রঙ দেওয়া হয়েছে */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#001f5b] dark:text-blue-400 mb-4">
              আন নাহ্দা ইসলামিক ইনস্টিটিউট
            </h1>

            {/* উপ-শিরোনাম: ডার্ক মোডে টেক্সট সাদা/হালকা গ্রে */}
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
              আদর্শ ও নৈতিকতা সম্পন্ন যুগ সচেতন প্রজন্ম গড়ার এক অনন্য
              প্রতিষ্ঠান!
            </p>

            {/* বিস্তারিত প্যারাগ্রাফ: ডার্ক মোডে টেক্সট গ্রে */}
            <p className="text-gray-700 dark:text-gray-400 mb-8">
              যেখানে আমরা আপনার সন্তানকে Islamic Values, Academic Knowledge,
              Modern Courses এবং Skill Training-এর মাধ্যমে আগামীর উজ্জ্বল ভবিষৎ
              হিসেবে গড়ে তুলবো। ইনশাআল্লাহ!
            </p>

            {/* কল-টু-অ্যাকশন বাটন */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-[#2A4976] dark:bg-blue-600 hover:bg-[#315382] dark:hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                <UserPlus className="w-5 h-5" />
                প্রশিক্ষণে যোগ দিন
              </button>

              {/* দ্বিতীয় বাটন: ডার্ক মোডে বর্ডার এবং টেক্সট কালার অ্যাডজাস্ট করা হয়েছে */}
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-transparent hover:bg-gray-100 dark:hover:bg-slate-800 text-[#2A4976] dark:text-blue-400 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 border border-[#2A4976] dark:border-blue-400">
                <BookOpen className="w-5 h-5" />
                আমাদের বইসমূহ
              </button>
            </div>
          </div>

          {/* ডান পাশের ইমেজ/ইলাস্ট্রেশন */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="../hero.gif"
              alt="Muallimeen Academy Illustration"
              className="mx-auto object-cover rounded-lg shadow-xl dark:shadow-blue-900/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
