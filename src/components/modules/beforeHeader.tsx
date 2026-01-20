import { Facebook, Phone, Youtube } from "lucide-react";

export default function BeforeHeader() {
  return (
    // Outer container: ডার্ক মোডে ব্যাকগ্রাউন্ড slate-950 করা হয়েছে
    <section className="bg-[#FDF7E9] dark:bg-slate-800 py-3 hidden lg:block transition-colors duration-300">
      {/* Container for content */}
      <div className="my-container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section: ডার্ক মোডে টেক্সট সাদা */}
          <div className="text-gray-800 dark:text-gray-100">
            <h4 className="font-semibold">আসসালামু আলাইকুম</h4>
          </div>

          {/* Middle Section (Icons) */}
          <div className="flex space-x-4">
            {/* Facebook Icon: ডার্ক মোডে ব্যাকগ্রাউন্ড নীল এবং হোভার ইফেক্ট */}
            <div className="p-2 bg-[#1447E6] dark:bg-blue-700 rounded-full text-white cursor-pointer hover:bg-[#003380] dark:hover:bg-blue-600 transition duration-300">
              <Facebook className="w-5 h-5" />
            </div>

            <div className="p-2 bg-[#0084D1] dark:bg-blue-700 rounded-full text-white cursor-pointer hover:bg-[#003380] dark:hover:bg-blue-600 transition duration-300">
              <Facebook className="w-5 h-5" />
            </div>

            {/* Youtube Icon: ডার্ক মোডে লালচে ভাব আনা হয়েছে */}
            <div className="p-2 bg-[#FF0033] dark:bg-red-700 rounded-full text-white cursor-pointer hover:bg-[#003380] dark:hover:bg-red-600 transition duration-300">
              <Youtube className="w-5 h-5" />
            </div>
          </div>

          {/* Right Section (Phone): ডার্ক মোডে টেক্সট ও আইকন কালার অ্যাডজাস্ট */}
          <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-100">
            <Phone className="w-4 h-4 text-[#315382] dark:text-blue-400" />
            <span className="font-semibold">01836096651</span>
          </div>
        </div>
      </div>
    </section>
  );
}
