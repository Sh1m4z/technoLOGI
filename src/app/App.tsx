import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';

import { CustomCursor } from '@/app/components/CustomCursor';

import { TTTTInteractive } from '@/app/components/TTTTInteractive';


// SVG Icons for buttons
import logoImage from '@/assets/cf2efb8d84b173b37e2e50c31e24a8466857a35d.png';


const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="relative w-full min-h-screen bg-white custom-cursor-page">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar - Slush Style */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center cursor-pointer flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] aspect-[7.5/1]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logoImage} alt="TechnoLOGI Logo" className="w-full h-full object-contain" />
            </motion.button>

            {/* Center Navigation Links */}
            <div className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Solution', id: 'solution' },
                { label: 'Services', id: 'services' },
                { label: 'Work', id: 'work' }
              ].map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-full transition-all duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call Now Button */}
              <motion.a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-semibold rounded-full transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon />
                Call Now
              </motion.a>

              {/* WhatsApp Us Button */}
              <motion.a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold rounded-full transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-gray-50"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Solution', id: 'solution' },
              { label: 'Services', id: 'services' },
              { label: 'Work', id: 'work' }
            ].map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all duration-300 text-center"
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918792359555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <span className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us on WhatsApp!
        </span>
      </a>

      {/* Hero Section with Updated Content */}
      <section
        id="home"
        className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 overflow-hidden min-h-screen flex items-center"
      >
        {/* Gooey Interactive Background */}

        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            {/* Main Headline - Split into two parts */}
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black mb-4 sm:mb-6 md:mb-8 leading-[1.1] px-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-[#D7001F] drop-shadow-lg">
                Turning Business
              </span>
              <span className="block text-[#D7001F] drop-shadow-lg">
                Websites
              </span>
            </motion.h1>

            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black mb-6 sm:mb-8 md:mb-12 leading-[1.1] px-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-[#009343] drop-shadow-lg">
                Into Customer
              </span>
              <span className="block text-[#009343] drop-shadow-lg">
                Enquiries
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Through high-converting websites with WhatsApp and call integration, plus marketing and eye-catching 3D videos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/918792359555"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-black flex items-center justify-center gap-4 sm:gap-5 transform hover:scale-110 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                WHATSAPP US NOW
              </motion.a>
              <motion.a
                href="tel:+918792359555"
                className="bg-gradient-to-r from-[#D7001F] to-[#E60076] hover:from-[#B8001A] hover:to-[#C6005C] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-black flex items-center justify-center gap-4 sm:gap-5 transform hover:scale-110 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 CALL US
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Simple Solution Section */}
      <section id="solution" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 italic px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#E60076]">
                OUR SIMPLE SOLUTION
              </span>
            </h2>
          </motion.div>

          {/* Solution Description */}
          <motion.div
            className="bg-gradient-to-br from-[#FFE89A] via-[#FFD4A3] to-[#FFC1A8] rounded-3xl sm:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-2xl mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-6 sm:mb-8">
              We set up a complete <span className="text-[#E60076] font-black">Business Enquiry System</span> that helps customers notice you and contact you easily:
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { emoji: "🌐", text: "Fast, professional website with WhatsApp and call enquiry buttons" },
                { emoji: "🔍", text: "Google Business optimization so customers can find you easily" },
                { emoji: "🎬", text: "Marketing videos to explain your business and attract attention" },
                { emoji: "✨", text: "Eye-catching 3D anamorphic videos that make people stop, watch, and remember your brand" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                  </div>
                  <p className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section - Slush Style */}
      <section id="services" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-[#F5F3FF] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 italic px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5BA3FF] to-[#9810FA]">
                WHAT WE DO
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 px-4">
              Everything you need to grow your business online
            </p>
          </motion.div>

          {/* Services Grid - Slush Style Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* First Row - 3 cards forming inverted V */}
            <motion.div
              className="bg-[#5BA3FF] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer sm:translate-y-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-white leading-tight">
                  FAST<br />WEBSITES
                </h3>
              </div>
              <div className="flex justify-center">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/30 rounded-2xl sm:rounded-3xl flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl">🌐</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#25D366] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer sm:-translate-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageCircle className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-white/40" strokeWidth={1.5} />
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-gray-900 leading-tight">
                  WHATSAPP<br />INTEGRATION
                </h3>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#E60076] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer sm:translate-y-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-white leading-tight">
                  CALL<br />BUTTONS
                </h3>
              </div>
              <div className="flex justify-center">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/30 rounded-2xl sm:rounded-3xl flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl">📞</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Second Row - 3 cards forming V */}
            <motion.div
              className="bg-[#FFD520] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer sm:-translate-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/30 rounded-2xl sm:rounded-3xl flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl">🔍</div>
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-gray-900 leading-tight">
                  GOOGLE<br />BUSINESS
                </h3>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#FF6B35] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer sm:translate-y-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-white leading-tight">
                  MARKETING<br />VIDEOS
                </h3>
              </div>
              <div className="flex justify-center">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/30 rounded-2xl sm:rounded-3xl flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl">🎬</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#E4B3FF] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer sm:-translate-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#FF6B35] to-[#E60076] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl">✨</div>
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-gray-900 leading-tight">
                  3D<br />VIDEOS
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Images & Video Gallery Section */}
      <section id="work" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#F5F3FF] via-white to-[#FFDFE0] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 italic px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] via-[#E60076] to-[#9810FA]">
                OUR WORK
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 px-4">
              See what we create for businesses like yours
            </p>
          </motion.div>

          {/* Creative Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {/* Image 1 */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1632937145991-91620be68319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg0ODU3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                <p className="text-white text-xl sm:text-2xl md:text-3xl font-black">CREATIVE DESIGNS</p>
              </div>
            </motion.div>

            {/* Image 2 - Video Placeholder */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl bg-[#1673ff]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY4NDU5MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Video content"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                  <div className="w-0 h-0 border-t-[12px] sm:border-t-[16px] border-t-transparent border-l-[20px] sm:border-l-[24px] border-l-[#1673ff] border-b-[12px] sm:border-b-[16px] border-b-transparent ml-1"></div>
                </div>
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
                <p className="text-white text-xl sm:text-2xl md:text-3xl font-black">3D VIDEOS</p>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl md:col-span-1 lg:col-span-1"
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtfGVufDF8fHx8MTc2ODQzMzc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy clients"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E60076]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                <p className="text-white text-xl sm:text-2xl md:text-3xl font-black">HAPPY CLIENTS</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative S Container */}
          <motion.div
            className="relative h-[600px] sm:h-[500px] md:h-[600px] lg:h-[400px] xl:h-[500px] mb-12 sm:mb-16 md:mb-20 overflow-hidden rounded-3xl sm:rounded-[48px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <TTTTInteractive />
          </motion.div>

          {/* Video Showcase Section */}
          <motion.div
            className="bg-gradient-to-br from-[#FFD520] via-[#FF6B35] to-[#E60076] rounded-3xl sm:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-white mb-6 sm:mb-8 leading-tight">
                  STUNNING 3D ANAMORPHIC VIDEOS
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  Eye-catching videos that make people stop scrolling and start engaging with your brand.
                </p>
                <motion.a
                  href="https://wa.me/918792359555"
                  className="inline-flex items-center gap-3 sm:gap-4 bg-white text-[#E60076] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-black shadow-xl"
                  whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  GET YOUR VIDEO
                </motion.a>
              </div>

              {/* Right: Video Placeholder */}
              <motion.div
                className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/95 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-0 h-0 border-t-[16px] sm:border-t-[20px] border-t-transparent border-l-[28px] sm:border-l-[32px] border-l-[#E60076] border-b-[16px] sm:border-b-[20px] border-b-transparent ml-2"></div>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
                  <p className="text-white text-base sm:text-lg md:text-xl font-black">WATCH SAMPLE VIDEO</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12 px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-[200px] sm:w-[240px] md:w-[260px] aspect-[7.5/1]">
              <img src={logoImage} alt="TechnoLOGI Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <p className="text-gray-400 text-lg">© {new Date().getFullYear()} TechnoLOGI. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Contact@technologi.in</p>
        </div>
      </motion.footer>
    </div>
  );
}