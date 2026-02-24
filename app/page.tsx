"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Github,} from "lucide-react"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        // style={{
        //   backgroundImage: `url('/images/prof-pics1.jpg')`
        // }}
      />
      
      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Subtle glow effects for enhanced aesthetic */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#991dbe]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[60%] right-[15%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content - positioned relative to appear above background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex flex-col justify-center px-4 py-16 md:py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto">
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={itemVariants} style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.9)' }}>
              Olayiwola Ibrahim
            </motion.h1>

            <motion.p className="text-xl md:text-2xl max-w-3xl mb-12" variants={itemVariants} style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
              I develop robust, scalable web and mobile applications, building efficient frontends, powerful backends, and seamless user experiences. I focus on performance, maintainability, and delivering real-world value through clean, modern code.
            </motion.p>

            <motion.nav className="flex flex-wrap gap-y-4 gap-x-8 mb-12" variants={itemVariants}>
              <Link href="/" className="text-white hover:text-gray-300 relative group pb-2">
                Home
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-[#991dbe]" initial={{ width: "100%" }} />
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 relative group pb-2">
                About
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-[#991dbe] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link href="/resume" className="text-white hover:text-gray-300 relative group pb-2">
                Resume
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-[#991dbe] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link href="/experience" className="text-white hover:text-gray-300 relative group pb-2">
                Experience
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-[#991dbe] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link href="/portfolio" className="text-white hover:text-gray-300 relative group pb-2">
                Portfolio
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-[#991dbe] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300 relative group pb-2">
                Contact
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-[#991dbe] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </motion.nav>

            <motion.div className="flex space-x-4" variants={itemVariants}>
              {/* <Link href="https://www.linkedin.com/in/ola  variants={itemVariants}"> </Link> */}
              <Link
                href="https://www.linkedin.com/in/olayiwola-ibrahim-b0b468278/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-full hover:bg-gray-700/90 transition-colors border border-white/10"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href="https://github.com/wisdom6715"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-full hover:bg-gray-700/90 transition-colors border border-white/10"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}