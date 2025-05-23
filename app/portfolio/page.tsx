"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Portfolio() {
  const [filter, setFilter] = useState("ALL")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

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
      title: "US Super Store Sales Analysis",
      description: "The US Super Store Sales Analysis project is a retail analytics case study that examines sales, profitability, customer behavior, product trends, and regional performance using transactional data from a fictional U.S. superstore.",
      image: "/images/project1.png",
      category: "POWERBI",
      details:
        "The US Super Store Sales Analysis project is a comprehensive retail analytics case study focused on uncovering insights from transactional data of a fictional superstore operating across the United States. It explores key business areas such as sales performance, profitability, customer behavior, product trends, and regional operations.",
      link: "https://onedrive.live.com/personal/476753bb47a7d227/_layouts/15/Doc.aspx?sourcedoc=%7Be4fc1605-5ff1-4b0e-b527-eecb52cf55c0%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VRVVdfT1R4WHc1THRTZnV5MUxQVmNBQjNCUWk2VWp1MkVUV0pwOXJOZWhDZXc_ZT1TS0lEcW8&slrid=9ab6a0a1-b052-0000-6465-d0d5eb599653&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VRVVdfT1R4WHc1THRTZnV5MUxQVmNBQjNCUWk2VWp1MkVUV0pwOXJOZWhDZXc_cnRpbWU9S0p3NzFGMlozVWc&CID=9e5a26a5-ac12-4ca7-b00c-f3cc6c11e035&_SRM=0:G:61"
    },
    {
      id: 2,
      title: "Airline Passenger Satisfaction Analysis",
      description: "A data-driven analysis of key factors influencing airline passenger satisfaction using real-world survey data.",
      image: "/images/project2.png",
      category: "POWERBI",
      details:
        "The Airline Passenger Satisfaction Analysis project is a comprehensive study focused on understanding the key factors that influence passenger satisfaction in the airline industry. Using real-world survey data, this project analyzes various aspects of the passenger experience, including demographics, travel behavior, service quality, flight performance, and delays.",
      link: "https://onedrive.live.com/personal/476753bb47a7d227/_layouts/15/Doc.aspx?sourcedoc=%7B4327ad78-7ce3-432b-ace7-68185beec25b%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VYaXRKMFBqZkN0RHJPZG9HRnZ1d2xzQklfQ2Z1Wkg5SE8zVkJKWGdocXhjVEE_ZT1VaHNNSEg&slrid=63b8a0a1-2067-0000-5fa9-c8d740d9f94f&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VYaXRKMFBqZkN0RHJPZG9HRnZ1d2xzQklfQ2Z1Wkg5SE8zVkJKWGdocXhjVEE_cnRpbWU9MlZaek1tS1ozVWc&CID=e3034c5a-056f-43fb-b735-586c17103c63&_SRM=0:G:37"
    },
    {
      id: 3,
      title: "Amazon Sales Performance Analysis",
      description: "A data-driven analysis of Amazon sales trends, product performance, customer preferences, and regional distribution.",
      image: "/images/project3.png",
      category: "POWERBI",
      details:
        "The Amazon Sales Performance Analysis project is a data-driven exploration of sales activities on one of the world's largest e-commerce platforms. This analysis focuses on understanding sales trends, product performance, customer preferences, delivery efficiency, and regional sales distribution",
      link: "https://onedrive.live.com/:x:/g/personal/476753BB47A7D227/Ef_K4bCibNJIqXJVU0hVFIwBn5H-GXi5MmHwYjNyoo2mIg?resid=476753BB47A7D227!sb0e1caff6ca248d2a97255534855148c&ithint=file%2Cxlsx&e=ek6KFy&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VmX0s0YkNpYk5KSXFYSlZVMGhWRkl3Qm41SC1HWGk1TW1Id1lqTnlvbzJtSWc_ZT1lazZLRnk"
    },
    {
      id: 4,
      title: "Bank Churn Analysis",
      description: "An analysis of customer data to identify key factors influencing bank customer churn and predict attrition patterns.",
      image: "/images/project4.png",
      category: "POWERBI",
      details:
        "The Bank Churn Analysis project focuses on identifying key factors that contribute to customer attrition in a banking environment. Using a dataset containing customer demographics, account information, and banking activity, this project aims to uncover patterns and behaviors that indicate whether a customer is likely to leave the bank (churn).",
      link: "https://onedrive.live.com/:x:/g/personal/476753BB47A7D227/Ef_K4bCibNJIqXJVU0hVFIwBn5H-GXi5MmHwYjNyoo2mIg?resid=476753BB47A7D227!sb0e1caff6ca248d2a97255534855148c&ithint=file%2Cxlsx&e=ek6KFy&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VmX0s0YkNpYk5KSXFYSlZVMGhWRkl3Qm41SC1HWGk1TW1Id1lqTnlvbzJtSWc_ZT1lazZLRnk"
    },
    {
      id: 5,
      title: "MTN Customer Churn Analysis",
      description: "An Excel-based BI dashboard analyzing customer churn, retention trends, and revenue patterns in the MTN Pulse segment.",
      image: "/images/project5.png",
      category: "POWERBI",
      details:
        "The MTN Pulse Churn Analysis & Retention Intelligence Dashboard is a business intelligence solution designed to uncover key factors driving customer churn and revenue fluctuations within the MTN Pulse segment. Built using Microsoft Excel, this project provides a centralized, interactive environment to monitor retention trends, subscription behaviors, and revenue performance metrics",
      link: "https://onedrive.live.com/:x:/g/personal/476753BB47A7D227/EW4Oclat5qVEuOtklIMcmucBCSWwuMZg8F-78OPAHpO87Q?resid=476753BB47A7D227!s56720e6ee6ad44a5b8eb6494831c9ae7&ithint=file%2Cxlsx&e=vUu2bd&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy80NzY3NTNiYjQ3YTdkMjI3L0VXNE9jbGF0NXFWRXVPdGtsSU1jbXVjQkNTV3d1TVpnOEYtNzhPUEFIcE84N1E_ZT12VXUyYmQ"
    },
    {
      id: 6,
      title: "Global Electronics Retailer Analysis ",
      description: "Global Electronics, founded in 2005, is a leading consumer electronics brand operating in 8 countries, known for its innovative tech products and excellent customer service.",
      image: "/images/project6.png",
      category: "POWERBI",
      details:
        "Founded in 2005, Global Electronics is a global leader in consumer electronics, offering a wide range of tech products including computers, phones, TVs, appliances, and more. With a presence in 8 countries, the company has built a reputation for quality, innovation, and exceptional customer service.",
      link: "https://universityoflagos-my.sharepoint.com/personal/180205152_live_unilag_edu_ng/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments%2FGlobal%20Electronics%20Retailer%20Analysis%201%2Epbix&parent=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments&ga=1"
    },
    {
      id: 7,
      title: "UK Train Rides Analysis",
      description: "The UK Train Ride project analyzes real-world railway data to uncover insights into passenger behavior, journey trends, revenue, and route performance.",
      image: "/images/project7.png",
      category: "EXCEL",
      details:
        "The UK Train Ride project is a comprehensive data analysis and visualization initiative that explores railway travel data in the United Kingdom. Using real-world train ride data, this project uncovers insights into passenger behavior, journey trends, revenue generation, and route performance.",
      link: "https://universityoflagos-my.sharepoint.com/personal/180205152_live_unilag_edu_ng/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments%2FUK%20Train%20Rides%2Epbix&parent=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments&ga=1"
    },
    {
      id: 8,
      title: "Adult Census Income in USA",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/project8.png",
      category: "EXCEL",
      details:
        "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: "https://universityoflagos-my.sharepoint.com/personal/180205152_live_unilag_edu_ng/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments%2FIncome%20Dataset%20in%20USA%2Epbix&parent=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments&ga=1"
    },
    {
      id: 9,
      title: "CRM Sales Opportunities",
      description: "The CRM Sales Opportunities Dashboard is a BI tool that visualizes opportunity trends, pipeline health, and sales performance using core CRM data.",
      image: "/images/project9.png",
      category: "EXCEL",
      details:
        "The CRM Sales Opportunities Dashboard is an end-to-end business intelligence solution built to empower sales leaders with visibility into opportunity trends, pipeline health, product performance, and team effectiveness. Leveraging data from core CRM modules such as Accounts, Sales Team, Products, and the Sales Pipeline, this dashboard provides a centralized, interactive platform for tracking, forecasting, and optimizing sales opportunities.",
      link: "https://universityoflagos-my.sharepoint.com/personal/180205152_live_unilag_edu_ng/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments%2F360%20Projects%2Epbix&parent=%2Fpersonal%2F180205152%5Flive%5Funilag%5Fedu%5Fng%2FDocuments&ga=1"
    },
    {
      id: 10,
      title: "Motor Vehicle Theft Analysis",
      description: "This project analyzes motor vehicle theft data in New Zealand to identify patterns, high-risk areas, and trends to support law enforcement, policymakers, and vehicle owners.",
      image: "/images/project10.png",
      category: "SQL",
      details:
        "Motor vehicle theft is a growing concern in New Zealand, affecting both urban and rural areas. With thousands of vehicles stolen annually, it is crucial to analyze patterns, identify high-risk locations, and uncover trends that can help curb this issue. This project aims to leverage data analysis techniques to derive insights that can benefit multiple stakeholders, including law enforcement agencies, policymakers, vehicle owners, and insurance companies.",
      link: "https://github.com/Sudaisib/SQL-Portfolio-Projects/blob/main/Motor%20Vehicle%20Theft%20Analysis/README.md"
    },
    
  ]

  const filteredProjects = filter === "ALL" ? projects : projects.filter((project) => project.category === filter)

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
                      <Link href={project.link} className="text-green-600 pt-3">Check it out</Link>
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