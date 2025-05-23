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
      category: "EXCEL",
      details: "The US Super Store Sales Analysis project is a comprehensive retail analytics case study focused on uncovering insights from transactional data of a fictional superstore operating across the United States. It explores key business areas such as sales performance, profitability, customer behavior, product trends, and regional operations.",
      link: "https://1drv.ms/x/c/476753bb47a7d227/EQUW_OTxXw5LtSfuy1LPVcABc0z04OZUabYdIURb3juesA?e=5Z5W46",
      keyInsights: [
        "Total Revenue: $1,924,338 with Average Profit Margin: 12%",
        "Technology generates highest revenue (37%), followed by Furniture (34%) and Office Supplies (29%)",
        "Best-performing month is April ($387,449), while July ($25,937) records lowest sales",
        "East region leads in revenue ($592,171), while South region has lowest sales ($357,105)",
        "Top customers contribute significant portion of total revenue"
      ],
      recommendations: [
        "Leverage Technology Segment with expanded product offerings and targeted promotions",
        "Increase Summer promotions to address seasonal sales dip",
        "Boost sales in South region with aggressive marketing strategies",
        "Implement loyalty programs for high-value customers",
        "Optimize inventory by stocking high-demand categories and phasing out underperformers"
      ]
    },
    {
      id: 2,
      title: "Airline Passenger Satisfaction Analysis",
      description: "A data-driven analysis of key factors influencing airline passenger satisfaction using real-world survey data.",
      image: "/images/project2.png",
      category: "EXCEL",
      details: "The Airline Passenger Satisfaction Analysis project is a comprehensive study focused on understanding the key factors that influence passenger satisfaction in the airline industry. Using real-world survey data, this project analyzes various aspects of the passenger experience, including demographics, travel behavior, service quality, flight performance, and delays.",
      link: "https://1drv.ms/x/c/476753bb47a7d227/EVSxbpYw5slAjZFi_4SihI4BPXgeOgH7Lunfs0qnBg0Rsg?e=p3yDjD",
      keyInsights: [
        "Business travel (89,693) far exceeds personal travel (40,187)",
        "73,452 passengers are Neutral or Dissatisfied vs 56,428 Satisfied",
        "Economy class experiences highest delay rates (45-48%)",
        "Returning customers report higher satisfaction than first-time travelers",
        "Older Adults and Seniors report lower satisfaction with online booking"
      ],
      recommendations: [
        "Enhance loyalty programs for frequent travelers",
        "Improve Economy Class service quality and efficiency",
        "Optimize flight schedules to reduce delays for business travelers",
        "Upgrade meal selections especially in Economy class",
        "Simplify digital interfaces for Older Adults and Seniors"
      ]
    },
    {
      id: 3,
      title: "Amazon Sales Performance Analysis",
      description: "A data-driven analysis of Amazon sales trends, product performance, customer preferences, and regional distribution.",
      image: "/images/project3.png",
      category: "EXCEL",
      details: "The Amazon Sales Performance Analysis project is a data-driven exploration of sales activities on one of the world's largest e-commerce platforms. This analysis focuses on understanding sales trends, product performance, customer preferences, delivery efficiency, and regional sales distribution",
      link: "https://1drv.ms/x/c/476753bb47a7d227/Ef_K4bCibNJIqXJVU0hVFIwB3rlaspoGKGbjj8qM13WZAA?e=qaA7gf",
      keyInsights: [
        "Refrigerators, Laptops, and Smartphones generated over 60% of total revenue",
        "February had highest revenue ($122,695) despite March having most orders",
        "Electronics (348 units) far exceed all other categories in sales volume",
        "Monday and Tuesday are best-performing days, Saturday has lowest sales",
        "High cancellation and pending rates point to order fulfillment issues"
      ],
      recommendations: [
        "Prioritize Refrigerators, Laptops, and Smartphones in marketing",
        "Investigate April's sales drop for inventory or marketing issues",
        "Launch weekly deals early in the week to ride Monday-Tuesday peaks",
        "Address Saturday's underperformance with weekend flash sales",
        "Audit pending/cancelled orders to improve fulfillment"
      ]
    },
    {
      id: 4,
      title: "Bank Churn Analysis",
      description: "An analysis of customer data to identify key factors influencing bank customer churn and predict attrition patterns.",
      image: "/images/project4.png",
      category: "EXCEL",
      details: "The Bank Churn Analysis project focuses on identifying key factors that contribute to customer attrition in a banking environment. Using a dataset containing customer demographics, account information, and banking activity, this project aims to uncover patterns and behaviors that indicate whether a customer is likely to leave the bank (churn).",
      link: "https://1drv.ms/x/c/476753bb47a7d227/ES11AXiDdtRLhm_vAaA_vTcBbmlxit7dOOCxU-haIsvkXA?e=8JseS9",
      keyInsights: [
        "Overall Churn Rate: 20.4% (2,037 churned)",
        "Middle-aged (1,057 churned) and Seniors (283 churned) show higher churn",
        "Germany (814 churned) has the highest churn rate among countries",
        "High-net-worth customers (19/34 churned) exhibit dissatisfaction",
        "New Customers (528 churned) struggle with engagement"
      ],
      recommendations: [
        "Improve onboarding experience for new customers",
        "Implement predictive analytics to identify at-risk customers early",
        "Introduce exclusive VIP banking services for high-net-worth customers",
        "Conduct targeted market research in Germany to address dissatisfaction",
        "Enhance engagement for Young Adults & Seniors with customized products"
      ]
    },
    {
      id: 5,
      title: "MTN Customer Churn Analysis",
      description: "An Excel-based BI dashboard analyzing customer churn, retention trends, and revenue patterns in the MTN Pulse segment.",
      image: "/images/project5.png",
      category: "EXCEL",
      details: "The MTN Pulse Churn Analysis & Retention Intelligence Dashboard is a business intelligence solution designed to uncover key factors driving customer churn and revenue fluctuations within the MTN Pulse segment. Built using Microsoft Excel, this project provides a centralized, interactive environment to monitor retention trends, subscription behaviors, and revenue performance metrics",
      link: "https://1drv.ms/x/c/476753bb47a7d227/ETY-6KX2Up1NgIIqL5zF57ABH2z5bN9w7dwpUYSne5chJw?e=8r548Y",
      keyInsights: [
        "Female customers, seniors and middle-aged users show higher churn rates",
        "Churn is high even among customers with 'Very Good' satisfaction ratings",
        "Mobile SIM Card users have highest churn rate and lowest revenue",
        "5G Broadband users contribute highest revenue with lower churn",
        "Churned customers accounted for significant revenue loss"
      ],
      recommendations: [
        "Implement improved feedback mechanisms for churned customers",
        "Design age-appropriate loyalty programs for high-risk segments",
        "Shift focus from satisfaction surveys to behavior-based insights",
        "Offer incentives for SIM Card users to upgrade devices",
        "Promote high-revenue subscription plans more aggressively"
      ]
    },
    {
      id: 6,
      title: "Global Electronics Retailer Analysis ",
      description: "Global Electronics, founded in 2005, is a leading consumer electronics brand operating in 8 countries, known for its innovative tech products and excellent customer service.",
      image: "/images/project6.png",
      category: "POWERBI",
      details: "Founded in 2005, Global Electronics is a global leader in consumer electronics, offering a wide range of tech products including computers, phones, TVs, appliances, and more. With a presence in 8 countries, the company has built a reputation for quality, innovation, and exceptional customer service.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiZDM5MTNmNTEtZTJiYy00MDgxLWIwOTItMzc2YzVjZWFhNzIxIiwidCI6ImY4NGE2ODk5LTUyMWQtNGRhZS1hZThjLTgyNTkyOGExMDcyOCJ9",
      keyInsights: [
        "Online stores outperform offline stores in revenue",
        "Camera category leads with $19 million in revenue (34.6% of total sales)",
        "Adventure Works is top-performing brand ($11.9 million revenue)",
        "United States has largest customer base",
        "Online advertising acquired 7,506 customers (most effective channel)"
      ],
      recommendations: [
        "Expand digital marketing efforts and SEO strategies",
        "Capitalize on high-performing Camera category and Adventure Works brand",
        "Strengthen presence in United States and explore Canada/Australia markets",
        "Investigate revenue decline of Northwind Traders brand",
        "Implement loyalty programs for high-value customers"
      ]
    },
    {
      id: 7,
      title: "UK Train Rides Analysis",
      description: "The UK Train Ride project analyzes real-world railway data to uncover insights into passenger behavior, journey trends, revenue, and route performance.",
      image: "/images/project7.png",
      category: "POWERBI",
      details: "The UK Train Ride project is a comprehensive data analysis and visualization initiative that explores railway travel data in the United Kingdom. Using real-world train ride data, this project uncovers insights into passenger behavior, journey trends, revenue generation, and route performance.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMGM3YzgxMTgtNDAyZS00NzA5LThhMTMtYjU1NDBhNDg1NmIwIiwidCI6ImY4NGE2ODk5LTUyMWQtNGRhZS1hZThjLTgyNTkyOGExMDcyOCJ9",
      keyInsights: [
        "UK rail network accommodates over 1.7 billion passenger journeys annually",
        "London stations account for majority of traffic",
        "Off-peak travel sees 30-40% lower ridership",
        "Average UK train travels over 70,000 miles per year",
        "Revenue performance varies significantly by route and time"
      ],
      recommendations: [
        "Optimize scheduling to balance peak and off-peak ridership",
        "Improve service quality on high-traffic routes",
        "Develop targeted promotions for off-peak travel",
        "Enhance real-time passenger information systems",
        "Invest in capacity planning based on route performance"
      ]
    },
    {
      id: 8,
      title: "Adult Census Income in USA",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/project8.png",
      category: "POWERBI",
      details: "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiYTFiZTVmMDAtN2Q3Yy00NTBlLTkwMmQtNGM2NTQxY2U1MTI4IiwidCI6ImY4NGE2ODk5LTUyMWQtNGRhZS1hZThjLTgyNTkyOGExMDcyOCJ9",
      keyInsights: [
        "76% of individuals earn less than $50K annually",
        "Seniors dominate high income bracket while Young Adults lag behind",
        "Males are 2.3x more likely to earn above $50K than females",
        "Higher educational attainment strongly correlates with higher income",
        "Tech and business roles dominate top-earning occupations"
      ],
      recommendations: [
        "Invest in upskilling & education programs for economic mobility",
        "Address gender income inequality through policy interventions",
        "Support Young Adults with career acceleration programs",
        "Promote tech career pathways across all age groups",
        "Encourage career shifts into high-income occupations"
      ]
    },
    {
      id: 9,
      title: "CRM Sales Opportunities",
      description: "The CRM Sales Opportunities Dashboard is a BI tool that visualizes opportunity trends, pipeline health, and sales performance using core CRM data.",
      image: "/images/project9.png",
      category: "POWERBI",
      details: "The CRM Sales Opportunities Dashboard is an end-to-end business intelligence solution built to empower sales leaders with visibility into opportunity trends, pipeline health, product performance, and team effectiveness. Leveraging data from core CRM modules such as Accounts, Sales Team, Products, and the Sales Pipeline, this dashboard provides a centralized, interactive platform for tracking, forecasting, and optimizing sales opportunities.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiZjIxY2Y2ZjItMDU4MC00MjA5LTk2ZGQtYjcxYjFhYjU5ZTc2IiwidCI6ImY4NGE2ODk5LTUyMWQtNGRhZS1hZThjLTgyNTkyOGExMDcyOCJ9",
      keyInsights: [
        "Sales pipeline heavily weighted toward early-stage opportunities",
        "Won opportunities drive highest revenue contribution",
        "Win rate declines sharply after Proposal stage",
        "Some sales reps have high deal volume but lower conversion rates",
        "Revenue concentrated in specific regions creating dependency risk"
      ],
      recommendations: [
        "Analyze lost opportunities post-Proposal stage to identify common objections",
        "Introduce stricter lead qualification criteria",
        "Improve forecasting accuracy using historical win/loss data",
        "Offer personalized coaching based on rep performance patterns",
        "Launch pilot programs in underperforming territories"
      ]
    },
    {
      id: 10,
      title: "Motor Vehicle Theft Analysis",
      description: "This project analyzes motor vehicle theft data in New Zealand to identify patterns, high-risk areas, and trends to support law enforcement, policymakers, and vehicle owners.",
      image: "/images/project10.png",
      category: "SQL",
      details: "Motor vehicle theft is a growing concern in New Zealand, affecting both urban and rural areas. With thousands of vehicles stolen annually, it is crucial to analyze patterns, identify high-risk locations, and uncover trends that can help curb this issue. This project aims to leverage data analysis techniques to derive insights that can benefit multiple stakeholders, including law enforcement agencies, policymakers, vehicle owners, and insurance companies.",
      link: "https://github.com/Sudaisib/SQL-Portfolio-Projects/blob/main/Motor%20Vehicle%20Theft%20Analysis/README.md",
      keyInsights: [
        "Over 15,000 vehicle theft cases analyzed with 18% increase over 3 years",
        "Only 43% of stolen vehicles were successfully recovered",
        "Auckland, Wellington, and Christchurch identified as high-theft regions",
        "Most thefts occur between 8 PM and 2 AM, especially on weekends",
        "Toyota, Honda, and Mazda older models are most frequently stolen"
      ],
      recommendations: [
        "Increase night patrols in identified hotspots",
        "Invest in smart surveillance systems with AI detection",
        "Implement real-time vehicle tracking systems",
        "Educate owners about advanced security devices",
        "Develop AI-driven predictive models for theft prevention"
      ]
    },
    {
      id: 11,
      title: "Netflix Movies & TV Shows",
      description: "A data-driven analysis of Netflix's global content trends, viewer preferences, and catalog strategies based on metadata from its library.",
      image: "/images/project11.png",
      category: "SQL",
      details: "The Netflix Movies & TV Shows Analysis project explores global content trends, viewer preferences, and strategic content distribution on one of the world’s leading streaming platforms. Using a dataset containing metadata about Netflix’s catalog—including titles, genres, release years, ratings, cast, countries, and duration—this analysis provides insights into how Netflix curates and evolves its library to meet diverse audience demands.",
      link: "https://github.com/Sudaisib/SQL-Portfolio-Projects/tree/main/Netflix%20Movies%20and%20TV%20Shows",
      keyInsights: [
        "Movies dominate Netflix’s catalog, but TV Shows are substantial.",
        "TV Shows tend to have a more consistent rating structure.",
        "United States, India, and the UK are major content providers.",
        "Genres like Documentaries and Dramas are prominently featured.",
        "Recent years have seen a spike in content addition, especially from India.",
        "Keyword analysis helps identify potentially violent content"
      ],
      recommendations: [
        "For Viewers: Use genre and rating trends to guide content choices.",
        "For Netflix: Increase localization for countries with growing contributions (like India).",
        "For Content Strategy: Track high-performing genres and expand content in those niches.",
        "For Content Moderation: Consider keyword tagging to identify mature or violent content.",
      ]
    }
  ]


  // ... (filteredProjects and handleImagePreview remain the same)
  const filteredProjects = filter === "ALL" ? projects : projects.filter((project) => project.category === filter)

  const handleImagePreview = (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setPreviewImage(imageSrc)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* ... (Navbar and header section remain the same) */}
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