const AboutInstitute = () => {
  return (
    <section className="bg-white dark:bg-[#0b1220] py-20 px-4 transition-colors">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          An-Nahda Islamic Institute
        </h2>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          আদর্শ ও নৈতিকতা সম্পন্ন যুগ-সচেতন প্রজন্ম গড়ার এক অনন্য প্রতিষ্ঠান
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-8">
          <span className="w-20 h-[1px] bg-[#2A4976]"></span>
          <span className="mx-4 text-[#2A4976] text-xl">✦</span>
          <span className="w-20 h-[1px] bg-[#2A4976]"></span>
        </div>

        {/* Intro Card */}
        <div className="text-left bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 space-y-5 text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>
            সাম্প্রতিক কালে যখন নৈতিকতার অবক্ষয়, মূল্যবোধের সংকট ও ধর্মীয়
            অজ্ঞতার দূষিত বাতাস আমাদের সামাজিক পরিবেশকে আবৃত্ত করে রেখেছে, তখন
            কিছু প্রতিষ্ঠান আমাদের সমাজের মানুষদের জন্য আশার প্রদীপ হয়ে উঠে।
          </p>

          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              An-Nahda Islamic Institute
            </span>{" "}
            তেমনি একটি ব্যতিক্রমধর্মী সমাজ কল্যাণমূলক প্রতিষ্ঠান, যেটা ধর্মীয়
            শিক্ষার পাশাপাশি আধুনিক জ্ঞান-বিজ্ঞান ও প্রশিক্ষণের মাধ্যমে একটি
            সুশিক্ষিত, আত্মনির্ভরশীল এবং নৈতিকতাসম্পন্ন প্রজন্ম গড়ার লক্ষ্যে কাজ
            করে যাচ্ছে।
          </p>

          <p>
            আমাদের কাছে শিক্ষা মানে কেবল বইয়ের পাতা মুখস্থ করা নয়; শিক্ষা মানে
            চিন্তার স্বচ্ছতা, চরিত্রের সৌন্দর্য এবং বাস্তব জীবনের চ্যালেঞ্জ
            মোকাবিলার প্রস্তুতি।
          </p>
        </div>

        {/* Sections */}
        <InfoSection
          title="১. সমন্বিত ও গবেষণাভিত্তিক কারিকুলাম"
          items={[
            "কুরআন ও ইসলামিক স্টাডিজ: বিশুদ্ধ আকিদা, ফিকহ, আরবি ভাষা ও আদব",
            "আন্তর্জাতিক মানের একাডেমিক শিক্ষা: গণিত, বিজ্ঞান ও সমাজবিজ্ঞান",
            "নৈতিকতা ও মূল্যবোধ: ভালো মানুষ হিসেবে গড়ে তোলা",
          ]}
        />

        <InfoSection
          title="২. আধুনিক দক্ষতা ও প্রযুক্তিগত জ্ঞান"
          items={[
            "বেসিক কম্পিউটার, টাইপিং ও ইন্টারনেট ব্যবহার",
            "গ্রাফিক্স ডিজাইন, ভিডিও এডিটিং, ডিজিটাল মার্কেটিং",
            "ডিজিটাল সচেতনতা ও সাইবার নিরাপত্তা",
          ]}
        />

        <InfoSection
          title="৩. বহুভাষিক যোগ্যতা"
          items={[
            "আরবি: কুরআনের ভাষা বোঝা ও কথোপকথন",
            "ইংরেজি: স্পোকেন ও একাডেমিক দক্ষতা",
            "বাংলা: শুদ্ধ উচ্চারণ ও প্রমিত ব্যবহার",
          ]}
        />

        <InfoSection
          title="৪. চারিত্রিক উৎকর্ষ ও নান্দনিকতা"
          items={[
            "সুন্দর হাতের লেখা ও ক্যালিগ্রাফি",
            "চিত্রাংকন ও সৃজনশীলতা",
            "লাইফ স্কিল ও নেতৃত্ব বিকাশ",
          ]}
        />

        {/* Commitment */}
        <div className="mt-14 text-left bg-white dark:bg-white/5 dark:to-white/5 border border-gray-200 dark:border-amber-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            আমাদের অঙ্গীকার
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
            <li>ইসলামিক মূল্যবোধে অটল থাকা</li>
            <li>একাডেমিক শিক্ষায় দক্ষ হওয়া</li>
            <li>প্রযুক্তি ও ভাষায় পারদর্শী হওয়া</li>
            <li>সমাজের জন্য আদর্শ হিসেবে গড়ে ওঠা</li>
          </ul>
          <p className="mt-5 font-semibold text-gray-900 dark:text-white">
            আমরা কেবল পড়ালেখা করাই না, আমরা আগামীর নেতৃত্ব তৈরি করি।
          </p>
        </div>
      </div>
    </section>
  );
};

const InfoSection = ({ title, items }: any) => (
  <div className="mt-14 text-left">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
      <span className="w-2 h-2 bg-[#2A4976] rounded-full"></span>
      {title}
    </h3>
    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6">
      <ul className="space-y-2 list-disc pl-5 text-gray-800 dark:text-gray-300">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default AboutInstitute;
