"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Navbar from "@/components/navbar"

export default function Portfolio() {
  const [filter, setFilter] = useState("ALL")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      id: 1,
      title: "Stockholm Cholera Outbreak Analysis",
      description: "Data analysis and visualization of the 1853 Stockholm Cholera Outbreak",
      image: "/images/stockholm-cholera.png",
      category: "TABLEAU",
      details:
        "This project analyzes the 1853 Stockholm Cholera Outbreak data, visualizing death trends by month, profession, gender, and quarterly toll. The dashboard provides insights into the 248 total deaths, with an average age of 34 among victims.",
    },
    {
      id: 2,
      title: "Customer Churn Analysis",
      description: "Comprehensive analysis of customer churn factors and patterns",
      image: "/images/customer-churn.png",
      category: "POWER BI",
      details:
        "This Power BI dashboard analyzes customer churn data for 7,043 customers with a 26.54% churn rate. It breaks down churn by gender, customer tenure, contract type, and dependents to identify key factors affecting customer retention.",
    },
    {
      id: 3,
      title: "Revenue Analysis Dashboard",
      description: "Multi-dimensional analysis of revenue across countries and demographics",
      image: "/images/customer-dashboard.png",
      category: "POWER BI",
      details:
        "This dashboard provides a comprehensive view of revenue metrics across 10 countries, totaling £21,764,629. It analyzes revenue by country, age band, gender, weekday trends, customer value segments, and income ranges.",
    },
    {
      id: 4,
      title: "Call Center Performance Dashboard",
      description: "Analysis of call center metrics and agent performance",
      image: "/images/call-center.png",
      category: "POWER BI",
      details:
        "This dashboard tracks call center performance with metrics on call volume, resolution rates, and agent efficiency. It shows 5,000 total calls with 4,054 answered and 3,646 resolved, providing insights into call trends and agent performance.",
    },
    {
      id: 5,
      title: "Stockholm Cholera Outbreak Analysis",
      description: "Data analysis and visualization of the 1853 Stockholm Cholera Outbreak",
      image: "/images/stockholm-cholera.png",
      category: "TABLEAU",
      details:
        "This project analyzes the 1853 Stockholm Cholera Outbreak data, visualizing death trends by month, profession, gender, and quarterly toll. The dashboard provides insights into the 248 total deaths, with an average age of 34 among victims.",
    },
  ]

  const filteredProjects = filter === "ALL" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#004a99]">
        <Navbar activePage="portfolio" />
      </div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="uppercase text-gray-400 mb-2">
          PORTFOLIO
        </motion.div>

        <motion.div
          className="w-32 h-1 bg-green-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12" variants={itemVariants}>
          My Works
        </motion.h1>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          {["ALL", "EXCEL", "POWERBI", "SQL", "PYTHON", "AWS", "AZURE", "DEVOPS"].map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-md ${
                filter === category ? "bg-green-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              } transition-colors`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              layoutId={`project-container-${project.id}`}
              onClick={() => setSelectedProject(project.id)}
            >
              <motion.div className="relative h-64 overflow-hidden" layoutId={`project-image-${project.id}`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </div>
              </motion.div>
              <motion.div className="p-6" layoutId={`project-content-${project.id}`}>
                <motion.h3 className="text-xl font-bold mb-2" layoutId={`project-title-${project.id}`}>
                  {project.title}
                </motion.h3>
                <motion.p className="text-gray-300" layoutId={`project-description-${project.id}`}>
                  {project.description}
                </motion.p>
                <motion.button
                  className="mt-4 text-green-500 font-medium flex items-center gap-1"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-gray-900 rounded-lg max-w-4xl w-full overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)
              if (!project) return null

              return (
                <>
                  <motion.div className="relative h-80 sm:h-96" layoutId={`project-image-${project.id}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <button
                      className="absolute top-4 right-4 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✕
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </motion.div>
                  <div className="p-6">
                    <motion.h3 className="text-2xl font-bold mb-2" layoutId={`project-title-${project.id}`}>
                      {project.title}
                    </motion.h3>
                    <div className="mb-4">
                      <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <motion.p className="text-gray-300 mb-6" layoutId={`project-description-${project.id}`}>
                      {project.description}
                    </motion.p>
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                      <p className="text-gray-300">{project.details}</p>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
