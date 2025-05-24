"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Link from "next/link"
import portfolioProjects from "./projects"

// Define AWS subcategories
const AWS_SUBCATEGORIES = [
  "ALL",
  "IAM",
  "EC2",
  "S3",
  "Lambda",
  "RDS",
  "CloudFormation",
  "CloudWatch",
  "VPC",
  "Route53"
]

export default function Portfolio() {
  const [filter, setFilter] = useState("ALL")
  const [awsSubFilter, setAwsSubFilter] = useState("ALL") // New state for AWS subfilter
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const { projects } = portfolioProjects()

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

  const filteredProjects = filter === "ALL" 
    ? projects 
    : filter === "AWS"
      ? projects.filter(project => 
          project.category === "AWS" && 
          (awsSubFilter === "ALL" || project.subcategory === awsSubFilter)
        )
      : projects.filter(project => project.category === filter)

  const handleImagePreview = (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setPreviewImage(imageSrc)
  }

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
              onClick={() => {
                setFilter(category)
                if (category !== "AWS") setAwsSubFilter("ALL")
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* AWS Subcategory Filter - only shown when AWS is selected */}
        {filter === "AWS" && (
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              <button className="px-6 py-2 bg-gray-700 rounded-md flex items-center gap-2">
                AWS Services: {awsSubFilter}
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
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="absolute z-10 mt-1 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1 max-h-60 overflow-auto">
                  {AWS_SUBCATEGORIES.map((subcategory) => (
                    <button
                      key={subcategory}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        awsSubFilter === subcategory 
                          ? "bg-green-500 text-white" 
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() => setAwsSubFilter(subcategory)}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ... (rest of your component remains the same) */}
        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
                        {filteredProjects.map((project) => (
                          <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            layoutId={`project-container-${project.id}`}
                          >
                            <motion.div 
                              className="relative h-64 overflow-hidden group" 
                              layoutId={`project-image-${project.id}`}
                            >
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              
                              {/* Preview Icon - appears on hover */}
                              <motion.button
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30"
                                onClick={(e) => handleImagePreview(project.image, e)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </div>
                              </motion.button>
              
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
                                onClick={() => setSelectedProject(project.id)}
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

      {/* ... (existing modals remain the same) */}
      {/* Image Preview Modal */}
        {previewImage && (
            <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setPreviewImage(null)}
            >
                      <motion.div
                        className="relative max-w-5xl max-h-[90vh] w-full h-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Image
                          src={previewImage}
                          alt="Preview"
                          fill
                          className="object-contain"
                        />
                        <button
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                          onClick={() => setPreviewImage(null)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                          </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}
      
            {/* Project Detail Modal */}
            {selectedProject !== null && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                          
                          <div className="border-t border-gray-700 pt-4 mb-6">
                            <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                            <p className="text-gray-300 mb-6">{project.details}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold mb-3 text-green-400">Key Insights</h4>
                                <ul className="space-y-2">
                                  {project.keyInsights.map((insight, index) => (
                                    <li key={index} className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span className="text-gray-300">{insight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold mb-3 text-green-400">Recommendations</h4>
                                <ul className="space-y-2">
                                  {project.recommendations.map((recommendation, index) => (
                                    <li key={index} className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span className="text-gray-300">{recommendation}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="mt-6">
                              <Link 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
                              >
                                View Project
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
                                  className="ml-1"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15 3 21 3 21 9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              </Link>
                            </div>
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