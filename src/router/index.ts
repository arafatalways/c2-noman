import FrontLayout from "@/components/layout/FrontLayout";
import AboutPage from "@/pages/AboutPage";
import ArticlePage from "@/pages/ArticlePage";
import ContactPage from "@/pages/ContactPage";
import CoursePage from "@/pages/CoursePage";
import FAQPage from "@/pages/FAQPage";
import HeroPage from "@/pages/HeroPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/hero",
        Component: HeroPage,
      },
      {
        path: "/courses",
        Component: CoursePage,
      },
      {
        path: "/faq",
        Component: FAQPage,
      },
      {
        path: "/article",
        Component: ArticlePage,
      },
    ],
  },
]);
