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
      <div className="bg-[#004a99]">
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
          className="w-32 h-1 bg-green-500 mb-8"
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
            <Image src="/images/profile.png" alt="Oladosu Ibrahim" width={500} height={600} className="w-full h-auto" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h2 className="text-2xl font-bold" variants={itemVariants}>
              Hey there,
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              I am a dedicated Data Analyst, Data Engineer, and Cloud/DevOps Engineer with a strong passion for data
              analytics, data engineering, cloud computing, and DevOps automation. My expertise lies in transforming raw
              data into valuable insights, designing and implementing scalable data pipelines, optimizing cloud
              infrastructure, and streamlining operations through DevOps best practices.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              With a background in Accounting & Finance, I transitioned into the tech industry, leveraging my analytical
              skills to help businesses adopt data-driven solutions and cloud architectures that enhance efficiency and
              innovation.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              I am also the Founder of{" "}
              <Link
                href="https://codesphere.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                CodeSphere Academy
              </Link>
              , a platform committed to mentoring and training aspiring Data Analysts, Data Engineers, Cloud Engineers,
              and other tech professionals. Through this initiative, I empower individuals with the skills needed to
              excel in the ever-evolving tech landscape.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              Beyond my technical expertise, I am passionate about knowledge sharing. I regularly contribute to the tech
              community through my blog,{" "}
              <Link
                href="https://sudais.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Ibrahim's Cloud & Data Chronicles
              </Link>
              , where I explore topics related to Data, AI, Cloud, and DevOps, providing insights and best practices to
              help others navigate the world of technology.
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
                <span className="text-green-500 mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Data Analysis & Visualization</strong>
                  <p>Microsoft Excel, Power BI, Google Sheets, PowerPoint, Seaborn, Matplotlib</p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-green-500 mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Databases & Query Languages</strong>
                  <p>MySQL, PostgreSQL, NoSQL, MongoDB, Cassandra, Google BigQuery, Amazon RDS, Azure SQL Database</p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-green-500 mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Data Engineering & ETL</strong>
                  <p>Apache Airflow, Apache Spark, DBT, Azure Data Factory, ETL Pipelines, Apache Kafka, Snowflake</p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-green-500 mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Cloud & DevOps</strong>
                  <p>
                    Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), Terraform, Docker,
                    Kubernetes, Git / GitHub / GitLab, CI/CD, Jenkins, Linux
                  </p>
                </div>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="flex items-start p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
              >
                <span className="text-green-500 mr-2 text-xl">✦</span>
                <div>
                  <strong className="block mb-1">Languages</strong>
                  <p>Python, SQL, Bash/Shell, DAX (for Power BI)</p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.main>
    </div>
  )
}
