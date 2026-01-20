// src/CourseSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowRight } from "lucide-react";

// Define the interface for a course item
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
}

const coursesData: CourseItemData[] = [
  {
    id: 1,
    title: "রিডিং শেখার তরিকা",
    subtitle: "(Learn How to Read)",
    academy: "Muallimeen Academy",
    lessons: 6,
    students: 16,
    type: "রেকর্ডেড কোর্স",
    price: "৳৮২০০",
    imageAlt: "Reading course thumbnail",
  },
  {
    id: 2,
    title: "শিক্ষক সার্টিফিকেশন কোর্স",
    subtitle: "(Teachers Certification Course)",
    academy: "Muallimeen Academy",
    lessons: 10,
    students: 137,
    type: "লাইভ কোর্স",
    price: "৳৮৫০০",
    imageAlt: "Teacher certification course thumbnail",
  },
  {
    id: 3,
    title: "নূরানী মুয়াল্লিম ট্রেনিং",
    subtitle: "(Noorani Muallim Training)",
    academy: "Muallimeen Academy",
    lessons: 6,
    students: 41,
    type: "রেকর্ডেড কোর্স",
    price: "৳৮৬০০",
    imageAlt: "Noorani training course thumbnail",
  },
];

// Define props interface for the card component
interface CourseCardProps {
  course: CourseItemData;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      // Enhanced hover effect with shadow glow and lift
      whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 100, 255, 0.15)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Image/Thumbnail Area (Placeholder) */}
      <div className="h-40 bg-linear-to-r from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative">
        <span className="text-gray-500 dark:text-gray-400">
          {course.imageAlt} Placeholder
        </span>
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {course.type}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {course.subtitle}
        </p>

        {/* Academy and Metadata */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 border-b pb-4 border-gray-200 dark:border-gray-700">
          <span className="font-medium">{course.academy}</span>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 mb-5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-500" /> {course.lessons} লেসন
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" /> {course.students}{" "}
            স্টুডেন্ট
          </div>
          {/* Removed the redundant 'type' display here for cleaner look */}
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
            {course.price}
          </span>
          {/* Enhanced button design with gradient and icon */}
          <button className="bg-linear-to-r from-blue-600 to-teal-500 text-white px-2 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-teal-600 transition duration-300 flex items-center gap-1">
            বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Course: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="my-container">
        {/* Enhanced Header Section with animation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 md:mb-0"
          >
            আমাদের কোর্স সমূহ
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-lg shadow-xl hover:opacity-90 transition duration-300 font-semibold"
          >
            সকল কোর্স সমূহ
          </motion.button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coursesData.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
