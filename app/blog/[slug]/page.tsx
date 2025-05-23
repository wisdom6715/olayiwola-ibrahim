"use client"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  // Blog posts data with URLs to the actual Hashnode articles
  const blogPosts = [
    {
      slug: "mounting-amazon-efs-on-an-ec2-instance-in-aws-a-step-by-step-guide",
      url: "https://sudais.hashnode.dev/mounting-amazon-efs-on-an-ec2-instance-in-aws-a-step-by-step-guide",
    },
    {
      slug: "step-by-step-guide-to-creating-an-iam-user-in-aws",
      url: "https://sudais.hashnode.dev/step-by-step-guide-to-creating-an-iam-user-in-aws",
    },
    {
      slug: "the-role-of-excel-in-business-intelligence-and-data-driven-decision-making",
      url: "https://sudais.hashnode.dev/the-role-of-excel-in-business-intelligence-and-data-driven-decision-making",
    },
    {
      slug: "step-by-step-guide-creating-a-linux-virtual-machine-on-microsoft-azure",
      url: "https://sudais.hashnode.dev/step-by-step-guide-creating-a-linux-virtual-machine-on-microsoft-azure",
    },
    {
      slug: "multi-cloud-strategy-and-how-can-it-benefit-enterprises",
      url: "https://sudais.hashnode.dev/multi-cloud-strategy-and-how-can-it-benefit-enterprises",
    },
    {
      slug: "Mastering GitHub: A Beginner’s Guide to Code Hosting, Collaboration, and Version Control",
      url: "https://sudais.hashnode.dev/mastering-github-a-beginners-guide-to-code-hosting-collaboration-and-version-control",
    },
    {
      slug: "Cloud adoption in Nigeria’s banking: The key to a modern, inclusive future",
      url: "https://businessday.ng/opinion/article/cloud-adoption-in-nigerias-banking-the-key-to-a-modern-inclusive-future/",
    },
    {
      slug: "The Role of Excel in Business Intelligence and Data-Driven Decision-Making",
      url: "https://sudais.hashnode.dev/the-role-of-excel-in-business-intelligence-and-data-driven-decision-making",
    },
    {
      slug: "Predictive Analytics Failures in Business: What Went Wrong and Why",
      url: "https://sudais.hashnode.dev/predictive-analytics-failures-in-business-what-went-wrong-and-why",
    },
    {
      slug: "AI isn’t taking our jobs; it’s transforming them",
      url: "https://businessday.ng/opinion/article/ai-isnt-taking-our-jobs-its-transforming-them/",
    },
  ]

  const blogPost = blogPosts.find((post) => post.slug === slug)

  // Redirect to the actual Hashnode article
  useEffect(() => {
    if (blogPost) {
      window.location.href = blogPost.url
    } else {
      router.push("/blog")
    }
  }, [blogPost, router])

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
        <p className="text-xl">Redirecting to article...</p>
      </div>
    </div>
  )
}
