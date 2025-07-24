"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function About() {
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

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#991dbe]">
        <Navbar activePage="about" />
      </div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="uppercase text-gray-400 mb-2">
          ABOUT
        </motion.div>

        <motion.div
          className="w-32 h-1 bg-[#991dbe] mb-8"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12" variants={itemVariants}>
          Learn more about me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-lg shadow-xl"
          >
            <Image src="/images/profile.jpg" alt="Oladosu Ibrahim" width={500} height={600} className="w-full h-auto" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h2 className="text-2xl font-bold" variants={itemVariants}>
              Hello 👋,
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              I’m a results-driven Web and Mobile Full Stack Developer with a strong focus on building scalable applications, and seamless user experiences. I specialize in both frontend and backend development, leveraging modern tools like React, Next.js, Node.js, and React Native to create high-performance solutions. From intuitive interfaces to robust APIs, I turn complex problems into clean, maintainable code.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Founded IntuitionLabs and launched a product that attracted 500+ users in its first week, demonstrating rapid execution and user-driven development during its initial release phase.{" "}
              {/* <Link
                href="https://sudais.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ca33f8] hover:underline"
              >
                
              </Link> */}
            </motion.p>

            <motion.h3 className="text-xl font-semibold mt-6" variants={itemVariants}>
              My Tech Stack & Skills:
            </motion.h3>

            <motion.ul className="space-y-4" variants={containerVariants}>
              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-[#991dbe] mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Frontend Development</strong>
                  <p>JavaScript (ES6+), Tailwind CSS, TypeScript, ReactJs, NextJs</p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-[#991dbe] mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Mobile Development</strong>
                  <p>React Native, Expo, React Native CLI</p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-[#991dbe] mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Backend Development</strong>
                  <p>Node.js, Express.js, Flask, Django, Websockets, Firebase Auth, Superbase</p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-[#991dbe] mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Databases & Storage</strong>
                  <p>
                    PostgreSQL, MongoDB, DynamoDB, AWS S3
                  </p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-[#991dbe] mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Cloud & DevOps</strong>
                  <p>
                    Amazon Web Services (AWS), Google Cloud Platform (GCP), Railway, Hostinger, Vercel, Github
                  </p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-[#991dbe] mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Languages</strong>
                  <p>Typescript, Javascript, Python, SQL</p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.main>
    </div>
  )
}
