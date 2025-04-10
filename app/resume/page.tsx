"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#004a99]">
        <Navbar activePage="resume" />
      </div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="uppercase text-gray-400 mb-2">
          RESUME
        </motion.div>

        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12" variants={itemVariants}>
          Check My Resume
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary Section */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
              Summary
            </motion.h2>

            <motion.div variants={itemVariants} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="absolute left-2 top-6 bottom-0 w-[1px] bg-green-500/30"></div>

              <h3 className="text-xl font-bold text-green-500">Oladosu Ibrahim</h3>
              <p className="mt-2 italic text-gray-300">
                Meticulous and result-driven Data Analyst who specializes in leveraging my expertise in Power BI,
                Tableau, Excel and SQL to empower businesses in making informed and data-driven decisions.
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Lagos, Nigeria
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  (+234) 8168044655
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Oladosuadeniyi39@gmail.com
                </li>
              </ul>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 mt-12">
              Education
            </motion.h2>

            <motion.div variants={itemVariants} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="absolute left-2 top-6 bottom-0 w-[1px] bg-green-500/30"></div>

              <h3 className="text-xl font-bold text-green-500">Bachelor of Science (Accounting & Finance)</h3>
              <div className="inline-block bg-gray-700 px-3 py-1 text-sm mt-1">2021 - 2024</div>
              <p className="mt-2">Ajayi Crowther University</p>
            </motion.div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
              Professional Experience
            </motion.h2>

            <motion.div variants={itemVariants} className="relative pl-8 pb-12">
              <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="absolute left-2 top-6 bottom-0 w-[1px] bg-green-500/30"></div>

              <p className="mt-2">You can get my work experience under the CV below.</p>

              <div className="mt-8">
                <a
                  href="https://drive.google.com/file/d/1-2XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}
