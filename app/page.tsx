"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Calendar, Clock, ArrowRight } from "lucide-react"

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

  const blogPosts = [
    {
      id: 1,
      title: "Nigeria’s economic future rests on tech — Not oil",
      excerpt:
        "As global economies rapidly evolve through artificial intelligence, data science, cloud computing, and digital entrepreneurship, the world is clearly shifting toward knowledge-based and innovation-driven growth models. Countries that invest in technology and digital infrastructure are reaping the benefits of increased productivity, job creation, and global competitiveness.",
      date: "January 25, 2023",
      readTime: "8 min read",
      author: "Oladosu Ibrahim",
      image: "/images/blog1.png",
      category: "Business Insights",
      url: "https://sudais.hashnode.dev/multi-cloud-strategy-and-how-can-it-benefit-enterprises",
    },

    {
      id: 2,
      title: "Cloud adoption in Nigeria’s banking: The key to a modern, inclusive future",
      excerpt:
        "Cloud computing is no longer a futuristic concept—it is the engine powering modern banking systems around the world. From enabling real-time transactions to supporting scalable digital services, cloud technology is redefining how financial institutions operate and engage with customers.",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Oladosu Ibrahim",
      image: "https://cdn.businessday.ng/wp-content/uploads/2025/01/unnamed-3.jpg",
      category: "Business Insights",
      url: "https://businessday.ng/opinion/article/cloud-adoption-in-nigerias-banking-the-key-to-a-modern-inclusive-future/",
    },
    {
      id: 3,
      title: "AI isn’t taking our jobs; it’s transforming them",
      excerpt:
        "As the world accelerates into a new era powered by artificial intelligence, machine learning, cloud computing, and automation, we are witnessing a fundamental shift in the nature of work itself. Rather than eliminating jobs, AI is reshaping roles, streamlining workflows, and creating entirely new categories of employment across industries—from healthcare and finance to education and creative arts.",
      date: "March 18, 2025",
      readTime: "5 min read",
      author: "Oladosu Ibrahim",
      image: "https://cdn.businessday.ng/2023/07/xI25SKwE-Artificial-intelligence.png",
      category: "Business Insights",
      url: "https://businessday.ng/opinion/article/ai-isnt-taking-our-jobs-its-transforming-them/",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center px-4 py-16 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={itemVariants}>
            Oladosu Ibrahim
          </motion.h1>

          <motion.p className="text-xl md:text-2xl max-w-3xl mb-12" variants={itemVariants}>
            I am passionate about transforming raw data into meaningful insights, building reliable data infrastructure,
            and leveraging cloud and DevOps technologies to drive efficient and informed decision-making processes.
          </motion.p>

          <motion.nav className="flex flex-wrap gap-y-4 gap-x-8 mb-12" variants={itemVariants}>
            <Link href="/" className="text-white hover:text-gray-300 relative group pb-2">
              Home
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500" initial={{ width: "100%" }} />
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 relative group pb-2">
              About
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/resume" className="text-white hover:text-gray-300 relative group pb-2">
              Resume
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/certificates" className="text-white hover:text-gray-300 relative group pb-2">
              Certificates
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/portfolio" className="text-white hover:text-gray-300 relative group pb-2">
              Portfolio
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 relative group pb-2">
              Blog
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 relative group pb-2">
              Contact
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </motion.nav>

          <motion.div className="flex space-x-4" variants={itemVariants}>
            {/* <Link href="https://www.linkedin.com/in/ola  variants={itemVariants}"> </Link> */}
            <Link
              href="https://www.linkedin.com/in/oladosu-ibrahim/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>


            <Link
              href="https://github.com/Sudaisib"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        className="py-20 px-4 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <motion.div
                className="uppercase text-gray-400 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                LATEST ARTICLES
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ibrahim&apos;s Cloud & Data Chronicles
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/blog" className="text-green-500 hover:text-green-400 flex items-center font-medium">
                View All Articles
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
              >
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-400 mb-3 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 hover:text-green-500 transition-colors">{post.title}</h3>

                    <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

                    <motion.div
                      className="flex items-center text-green-500 font-medium mt-auto group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
