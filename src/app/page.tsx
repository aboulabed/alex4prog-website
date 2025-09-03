import Home from "./components/Home";
import Services from "./components/Services"
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
import Customers from './components/Customers'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
export default function App() {
  return (
    <div className="space-y-12 md:space-y-24 bg-gray-50">
      <Home />
      <Services />
      <Projects />
      <WhyUs />
      <Customers />
      <JoinUs />
      <ContactUs />
    </div>
  )

}