import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowRight } from "lucide-react";

interface CourseItemData {
  id: number;
  title: string;
  subtitle: string;
  academy: string;
  lessons: number;
  students: number;
  type: string;
  price: string;
  imageAlt: string;
  imageUrl: string;
}

const coursesData: CourseItemData[] = [
  {
    id: 1,
    title: "রিডিং শেখার তরিকা",
    subtitle: "(Learn How to Read)",
    academy: "An Nahda Institute",
    lessons: 6,
    students: 16,
    type: "রেকর্ডেড কোর্স",
    price: "৳৮২০০",
    imageAlt: "Reading course thumbnail",
    imageUrl: "../course-1.png",
  },
  {
    id: 2,
    title: "শিক্ষক সার্টিফিকেশন কোর্স",
    subtitle: "(Teachers Certification Course)",
    academy: "An Nahda Institute",
    lessons: 10,
    students: 137,
    type: "লাইভ কোর্স",
    price: "৳৮৫০০",
    imageAlt: "Teacher certification course thumbnail",
    imageUrl: "../course-2.png",
  },
  {
    id: 3,
    title: "নূরানী মুয়াল্লিম ট্রেনিং",
    subtitle: "(Noorani Muallim Training)",
    academy: "An Nahda Institute",
    lessons: 6,
    students: 41,
    type: "রেকর্ডেড কোর্স",
    price: "৳৮৬০০",
    imageAlt: "Noorani training course thumbnail",
    imageUrl: "../course-3.png",
  },
];

interface CourseCardProps {
  course: CourseItemData;
  index: number;
}

const gradients = [
  {
    glow: "from-blue-500 to-cyan-400",
    icon: "text-blue-500",
    price: "text-blue-600 dark:text-blue-400",
  },
  {
    glow: "from-emerald-500 to-green-400",
    icon: "text-emerald-500",
    price: "text-emerald-600 dark:text-emerald-400",
  },
  {
    glow: "from-orange-500 to-amber-400",
    icon: "text-orange-500",
    price: "text-orange-600 dark:text-orange-400",
  },
];

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const color = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      {/* 🔥 Glow (same design, fixed rounding issue) */}
      <div
        className={`absolute -inset-0.5 bg-linear-to-r ${color.glow} rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500`}
      />

      {/* 🧱 Card */}
      <div className="relative h-full bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl flex flex-col border border-gray-100 dark:border-slate-800 overflow-hidden">
        {/* 📷 Image */}
        <div className="relative h-48 mb-5 overflow-hidden rounded-xl">
          <img
            src={course.imageUrl}
            alt={course.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 bg-white dark:bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow">
            {course.type}
          </span>
        </div>

        {/* 📄 Content */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {course.subtitle}
        </p>

        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 border-b pb-3 border-gray-200 dark:border-gray-700">
          {course.academy}
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-5">
          <div className="flex items-center gap-2">
            <BookOpen className={`w-4 h-4 ${color.icon}`} />
            {course.lessons} লেসন
          </div>
          <div className="flex items-center gap-2">
            <Users className={`w-4 h-4 ${color.icon}`} />
            {course.students} স্টুডেন্ট
          </div>
        </div>

        {/* 💰 Price + Button */}
        <div className="mt-auto flex justify-between items-center">
          <span className={`text-3xl font-extrabold ${color.price}`}>
            {course.price}
          </span>
          <button className="bg-[#2A4976] text-white px-3 py-2 rounded-md shadow hover:bg-[#315382] transition flex items-center gap-1">
            বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 🌈 Bottom hover line */}
        <div
          className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-r ${color.glow} rounded-full`}
        />
      </div>
    </motion.div>
  );
};

const Course: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="my-container">
        {/* Header (About style motion) */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold dark:text-white"
          >
            আমাদের{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              কোর্সসমূহ
            </span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          {coursesData.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
