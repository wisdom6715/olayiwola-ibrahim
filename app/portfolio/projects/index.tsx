"use client"
    
export default function portfolioProjects(){
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
    },
    {
      id: 12,
      title: "Mounting Amazon EFS on an EC2 Instance in AWS: A Step-by-Step Guide",
      description: "This step-by-step guide shows you how to create and mount an Amazon Elastic File System (EFS) on an EC2 instance, enabling scalable and shared file storage for your applications.",
      details:
        "Amazon Elastic File System (EFS) provides scalable file storage for use with Amazon EC2 instances. In this guide, I'll walk you through the process of creating and mounting an EFS file system on an EC2 instance.",
      keyInsights: [],
      recommendations: [],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      category: "AWS",
      subcategory: "EC2",
      link: "https://sudais.hashnode.dev/mounting-amazon-efs-on-an-ec2-instance-in-aws-a-step-by-step-guide",
    },
    {
      id: 13,
      title: "Step-by-Step Guide to Creating an IAM User in AWS",
      description: "Learn how to securely manage access to AWS resources with this step-by-step guide on creating an IAM user using AWS Identity and Access Management (IAM).",
      keyInsights: [],
      recommendations: [],
      details:
        "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. In this guide, I'll walk you through the process of creating an IAM user in AWS.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      category: "AWS",
      subcategory: "IAM",
      link: "https://sudais.hashnode.dev/step-by-step-guide-to-creating-an-iam-user-in-aws",
    },
    {
      id: 14,
      title: "The Role of Excel in Business Intelligence and Data-Driven Decision Making",
      description: "Discover how Microsoft Excel empowers data-driven decision making in modern organizations through its robust data analysis and business intelligence capabilities.",
      keyInsights: [],
      recommendations: [],
      details:
        "Microsoft Excel is a powerful tool for data analysis and business intelligence. In this article, I explore how Excel can be used for data-driven decision making in modern organizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "EXCEL",
      link: "https://sudais.hashnode.dev/the-role-of-excel-in-business-intelligence-and-data-driven-decision-making",
    },
    {
      id: 15,
      title: "Step-by-Step Guide: Creating a Linux Virtual Machine on Microsoft Azure",
      description: "Learn how to create and manage a Linux virtual machine on Microsoft Azure with this step-by-step guide, ideal for developers and IT professionals exploring cloud-based infrastructure.",
      keyInsights: [],
      recommendations: [],
      details:
        "Microsoft Azure provides a robust platform for creating and managing virtual machines. In this guide, I'll walk you through the process of creating a Linux virtual machine on Azure.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      category: "AZURE",
      link: "https://sudais.hashnode.dev/step-by-step-guide-creating-a-linux-virtual-machine-on-microsoft-azure",
    },
    {
      id: 16,
      title: "Mastering GitHub: A Beginner’s Guide to Code Hosting, Collaboration, and Version Control",
      description: "Efficient code management is essential in today’s fast-paced software development. Version control, collaboration, and accountability are key to building scalable applications, automating infrastructure, and driving data analysis projects forward.**",
      keyInsights: [],
      recommendations: [],
      details:
        "In today’s fast-paced and collaborative software development environment, managing code efficiently is not just a convenience—it's a necessity. Version control, collaboration, and accountability form the backbone of successful projects, whether you're building enterprise applications, automating cloud infrastructure, or analyzing large datasets",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1747238377096/579d2fd6-dd77-4765-9e62-48f25aba9bf8.png",
      category: "DEVOPS",
      link: "https://sudais.hashnode.dev/mastering-github-a-beginners-guide-to-code-hosting-collaboration-and-version-control",
    },
  ]
  return{
    projects
  }
}