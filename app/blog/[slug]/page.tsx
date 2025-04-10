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
