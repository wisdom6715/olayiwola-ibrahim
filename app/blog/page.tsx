"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Calendar, Clock, User, Search, Filter } from "lucide-react"
import { useState } from "react"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

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

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  }

  const categories = [
    "All",
    "Data Analysis",
    "Business Insights",
    "Data Visualization",
    "Power BI",
    "SQL & Databases",
    "Python for Data",
    "Cloud Computing",
    "DevOps & Engineering",
    "AI & Machine Learning",
    "Career & Growth",
    "Tools & Tutorials",
    "Tech Industry Insights",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Mounting Amazon EFS on an EC2 Instance in AWS: A Step-by-Step Guide",
      excerpt:
        "Amazon Elastic File System (EFS) provides scalable file storage for use with Amazon EC2 instances. In this guide, I'll walk you through the process of creating and mounting an EFS file system on an EC2 instance.",
      date: "May 15, 2023",
      readTime: "6 min read",
      author: "Oladosu Ibrahim",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      category: "Cloud Computing",
      url: "https://sudais.hashnode.dev/mounting-amazon-efs-on-an-ec2-instance-in-aws-a-step-by-step-guide",
    },
    {
      id: 2,
      title: "Step-by-Step Guide to Creating an IAM User in AWS",
      excerpt:
        "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. In this guide, I'll walk you through the process of creating an IAM user in AWS.",
      date: "April 20, 2023",
      readTime: "5 min read",
      author: "Oladosu Ibrahim",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      category: "Cloud Computing",
      url: "https://sudais.hashnode.dev/step-by-step-guide-to-creating-an-iam-user-in-aws",
    },
    {
      id: 3,
      title: "The Role of Excel in Business Intelligence and Data-Driven Decision Making",
      excerpt:
        "Microsoft Excel is a powerful tool for data analysis and business intelligence. In this article, I explore how Excel can be used for data-driven decision making in modern organizations.",
      date: "March 12, 2023",
      readTime: "7 min read",
      author: "Oladosu Ibrahim",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Data Analysis",
      url: "https://sudais.hashnode.dev/the-role-of-excel-in-business-intelligence-and-data-driven-decision-making",
    },
    {
      id: 4,
      title: "Step-by-Step Guide: Creating a Linux Virtual Machine on Microsoft Azure",
      excerpt:
        "Microsoft Azure provides a robust platform for creating and managing virtual machines. In this guide, I'll walk you through the process of creating a Linux virtual machine on Azure.",
      date: "February 18, 2023",
      readTime: "6 min read",
      author: "Oladosu Ibrahim",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      category: "Cloud Computing",
      url: "https://sudais.hashnode.dev/step-by-step-guide-creating-a-linux-virtual-machine-on-microsoft-azure",
    },
    {
      id: 5,
      title: "Multi-Cloud Strategy and How Can It Benefit Enterprises",
      excerpt:
        "A multi-cloud strategy involves using multiple cloud computing services from different providers. This article explores the benefits and challenges of implementing a multi-cloud strategy for enterprise organizations.",
      date: "January 25, 2023",
      readTime: "8 min read",
      author: "Oladosu Ibrahim",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop",
      category: "Cloud Computing",
      url: "https://sudais.hashnode.dev/multi-cloud-strategy-and-how-can-it-benefit-enterprises",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#004a99]">
        <Navbar activePage="blog" />
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#004a99]/90 to-[#1a1a1a]/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
            >
              Ibrahim&apos;s Cloud & Data Chronicles
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Exploring the world of data, cloud, and DevOps through practical insights and tutorials
            </motion.p>

            <motion.div
              className="relative max-w-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Category Filter */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center mb-6">
            <Filter size={20} className="mr-2 text-green-500" />
            <h2 className="text-xl font-semibold">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div variants={itemVariants} className="mb-16">
            <a href={filteredPosts[0].url} target="_blank" rel="noopener noreferrer">
              <div className="relative rounded-lg overflow-hidden group">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <Image
                    src={filteredPosts[0].image || "/placeholder.svg?height=800&width=1200"}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=800&width=1200"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                      {filteredPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-3xl">{filteredPosts[0].excerpt}</p>

                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {filteredPosts[0].author}
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center text-green-500 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read Article
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">No articles found matching your search criteria</div>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("All")
              }}
              className="text-green-500 hover:text-green-400 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
              >
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=600"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-3 hover:text-green-500 transition-colors">{post.title}</h2>

                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

                    <motion.div
                      className="flex items-center text-green-500 font-medium mt-auto group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read More
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
                        className="ml-1 group-hover:translate-x-2 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gray-800 rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Get the latest articles, tutorials, and insights on data engineering, cloud computing, and DevOps
                delivered straight to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                />
                <motion.button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Popular Topics</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Data Analysis", icon: "📊", color: "bg-blue-500" },
              { name: "Power BI", icon: "📈", color: "bg-yellow-500" },
              { name: "Cloud Computing", icon: "☁️", color: "bg-purple-500" },
              { name: "SQL & Databases", icon: "🗄️", color: "bg-green-600" },
              { name: "Python for Data", icon: "🐍", color: "bg-blue-600" },
              { name: "DevOps & Engineering", icon: "⚙️", color: "bg-red-500" },
              { name: "AI & Machine Learning", icon: "🤖", color: "bg-indigo-500" },
              { name: "Business Insights", icon: "💼", color: "bg-orange-500" },
            ].map((topic, index) => (
              <motion.div
                key={topic.name}
                className={`${topic.color} rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition-shadow`}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <h3 className="font-semibold">{topic.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
