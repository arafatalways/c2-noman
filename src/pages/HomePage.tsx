import ContactSection from "@/components/modules/contact";
import Course from "@/components/modules/course";
import FAQSection from "@/components/modules/faqSection";
import Hero from "@/components/modules/hero";
import About from "@/components/modules/about";
import VideoSection from "@/components/modules/videoSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Course />
      <About />
      <VideoSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
