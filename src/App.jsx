import React from "react";
import Navbar from "./components/Navbar";
import ConsultiveSection from "./components/ConsultiveSection";
import Survicess from "./components/Survicess";
import About from "./components/About";
import Feature from "./components/Feature";
import ContactForm from "./components/ContactForm";
import FormBlog from "./components/FormBlog";
import LatestProject from "./components/LatestProject";
import TestimonialGrid from "./components/TestimonialGrid";
import FAQSForm from "./components/FAQSForm";
import TeamMember from "./components/TeamMember";
import BusinessGrowth from "./components/BusinessGrowth";
import TeamAndServices from "./components/TeamAndServices";
import KeyBenefits from "./components/KeyBenefits";
import ConsultationForm from "./components/ConsultationForm";
import BlogSection from "./components/BlogSection";
// import ProjectMember from "./components/ProjectMember";
// import ProjectShowcase from "./components/ProjectShowcase";
import BusinessCards from "./components/BusinessCards";
import SmartApproach from "./components/SmartApproach";
import HeroSection from "./components/HeroSection";
import HistorySlider from "./components/HistorySlider";
import AchievementsCarousel from "./components/AchievementsCarousel";
import ExperienceBanner from "./components/ExperienceBanner";
import ServicesCard from "./components/ServicesCard";
import Sustainability from "./components/Sustainability";
import SpecificServices from "./components/SpecificServices";
import Performence from "./components/Performence";
import AdvancedAnalytics from "./components/AdvancedAnalytics";
import Organization from "./components/Organization";
import CustomerInsights from "./components/CustomerInsights";
import LargeBlog from "./components/LargeBlog";
import BlogSec from "./components/BlogSec";
import BlogCards from "./components/BlogCards";
// import BlogCards from "./components/BlogCards";

const App = () => {
  return (
    <div>
      <Navbar />
      <ConsultiveSection />
      <Survicess />
      <About />
      <BusinessCards />
      <SmartApproach />
      <HeroSection />
      <HistorySlider />
      <AchievementsCarousel />
      <ExperienceBanner />
      <Feature />
      <ContactForm />
      <FormBlog />
      <LatestProject />
      <TestimonialGrid />
      <FAQSForm />
      <TeamMember />
      <ServicesCard/>
      <BusinessGrowth />
      <TeamAndServices />
      <KeyBenefits />
      <ConsultationForm />
      <Sustainability/>
      <Performence/>
      <AdvancedAnalytics/>
      <Organization/>
      <CustomerInsights/>

      {/* < SpecificServices/> */}
      <BlogSection />
      <LargeBlog/>
      <BlogSec/>
      {/* <BlogCards/> */}
      <BlogCards/>
    </div>
  );
};

export default App;
