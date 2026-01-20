import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowRight } from "lucide-react"; // DollarSign আইকন যোগ করা হয়েছে

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
  imageUrl: string; // ইমেজের URL বা পাথ যুক্ত করা হয়েছে
}

// আপনার পাবলিক ফোল্ডারের ইমেজ পাথ দিয়ে ডেটা আপডেট করা হলো
const coursesData: CourseItemData[] = [
  {
    id: 1,
    title: "রিডিং শেখার তরিকা",
    subtitle: "(Learn How to Read)",
    academy: "An Nahda Academy",
    lessons: 6,
    students: 16,
    type: "রেকর্ডেড কোর্স",
    price: "৳৮২০০",
    imageAlt: "Reading course thumbnail",
    imageUrl: "../course-1.png", // এখানে আপনার আসল ইমেজের পাথ দিন
  },
  {
    id: 2,
    title: "শিক্ষক সার্টিফিকেশন কোর্স",
    subtitle: "(Teachers Certification Course)",
    academy: "An Nahda Academy",
    lessons: 10,
    students: 137,
    type: "লাইভ কোর্স",
    price: "৳৮৫০০",
    imageAlt: "Teacher certification course thumbnail",
    imageUrl: "../course-2.png", // এখানে আপনার আসল ইমেজের পাথ দিন
  },
  {
    id: 3,
    title: "নূরানী মুয়াল্লিম ট্রেনিং",
    subtitle: "(Noorani Muallim Training)",
    academy: "An Nahda Academy",
    lessons: 6,
    students: 41,
    type: "রেকর্ডেড কোর্স",
    price: "৳৮৬০০",
    imageAlt: "Noorani training course thumbnail",
    imageUrl: "../course-3.png", // এখানে আপনার আসল ইমেজের পাথ দিন
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
      // ছবির কার্ডের মতো হুবহু ডিজাইন ও শ্যাডো
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Image/Thumbnail Area (Placeholder) */}
      <div className="h-48 p-6 relative overflow-hidden">
        {/* ইমেজের জন্য img ট্যাগ ব্যবহার করা হয়েছে */}
        <img
          src={course.imageUrl}
          alt={course.imageAlt}
          className="w-full rounded-sm h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-gray-300 dark:bg-white text-black px-3 rounded-full text-xs font-semibold shadow-md">
          {course.type}
        </div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
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
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 flex items-center">
            {/* <DollarSign className="w-6 h-6 mr-1""")/>>  টাকার আইকন চাইলে ব্যবহার করতে পারেন */}
            {course.price}
          </span>
          {/* Enhanced button design with a flat, modern look */}
          <button className="bg-blue-600 text-white px-2 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-1">
            বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Course: React.FC = () => {
  return (
    <section className="py-20 bg-gray-200 dark:bg-gray-800">
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
            className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-xl hover:bg-blue-600 transition duration-300 font-semibold"
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
