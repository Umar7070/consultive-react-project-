import React from 'react'
import Navbar from './components/Navbar'
import ConsultiveSection from './components/ConsultiveSection'
import Survicess from './components/Survicess'
import About from './components/About'
import Feature from './components/Feature'
import ContactForm from './components/ContactForm'
import FormBlog from './components/FormBlog'
import LatestProject from './components/LatestProject'
import TestimonialGrid from './components/TestimonialGrid'
import FAQSForm from './components/FAQSForm'
import TeamMember from './components/TeamMember'
import BusinessGrowth from './components/BusinessGrowth'
import TeamAndServices from './components/TeamAndServices'
import KeyBenefits from './components/KeyBenefits'
import ConsultationForm from './components/ConsultationForm'

const App = () => {
  return (
    <div>
        <Navbar/>
        <ConsultiveSection/>
        <Survicess/>
        <About/>
        <Feature/>
        <ContactForm/>
        <FormBlog/>
        <LatestProject/>
        <TestimonialGrid/>
        <FAQSForm/>
        <TeamMember/>
        <BusinessGrowth/>
        <TeamAndServices/>
        <KeyBenefits/>
        <ConsultationForm/>
      
    </div>
  )
}

export default App
