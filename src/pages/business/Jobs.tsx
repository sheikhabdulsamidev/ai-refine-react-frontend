"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Send, ThumbsUp, ThumbsDown, MessageSquare, RefreshCw } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import confetti from 'canvas-confetti'
import { DashboardLayout } from "@/components/layout/dashboard-layout"

const contentTypes = [
  "Blog Post",
  "Newsletter",
  "Product Description",
  "White Paper",
  "Case Study",
  "Social Media Post",
  "Press Release",
  "Technical Documentation",
  "Email Campaign",
  "Landing Page"
]

const initialJobs = [
  {
    id: "8",
    title: "Business Fraud Article",
    description: "Essential steps for financial services SMBs to protect against business fraud",
    status: "Submitted to Network",
    deadline: "2024-03-30",
    type: "Blog Post",
    credits: 138,
    promptAnswers: {
      authorName: "Chris Hooper, Brand Director, Veriff",
      industry: "Financial Services Security",
      geographicRegion: "Global",
      contentLanguage: "en-us",
      trendingTopic: "Business Fraud Protection",
      targetAudience: "Financial services SMBs and security decision-makers",
      audienceAction: "Implement enhanced fraud protection measures",
      keywords: "fraud protection, identity verification, financial security, SMB security",
      tone: "Authoritative and informative",
      audienceReaction: "Feel empowered to take action against fraud",
      callToAction: "Upgrade your fraud protection measures today"
    },
    generatedContent: `# Business Fraud Protection: 3 Essential Steps Every Financial Services SMB Must Take Now\n\nA few weeks ago, I spoke with a small business owner who runs a boutique financial services firm in Chicago. He was visibly shaken. Overnight, a fraudster had accessed his client portal and impersonated a customer, and initiated a bogus transaction. \"We thought we were covered,\" he told me. \"We had two-factor authentication and encrypted data. But it wasn't enough.\"\n\nStories like his are becoming all too common. According to the FBI's Internet Crime Report, U.S. businesses lost over $10 billion to cybercrime in 2022, with small and midsize businesses (SMBs) being particularly vulnerable. And the financial services space? A prime target.\n\nThis article is a wake-up call for SMBs in financial services. Business fraud protection isn't just a nice-to-have; it's a must-have. Here are three key steps every SMB should take to reduce their risk and reclaim control.\n\n1. Know Who You're Dealing With: Upgrade Your Identity Verification\n\nFor too many SMBs, identity verification is a static process done at onboarding. But today's fraudsters are sophisticated. They use deepfakes, stolen credentials, and synthetic identities to sneak past legacy systems. If your ID checks are outdated, they're not protecting you.\n\nModern business fraud protection starts with dynamic, AI-powered identity verification. Look for solutions that can:\n\n- Detect deepfake videos and manipulated images\n- Verify documents in real time\n- Match faces to ID with biometric precision\n\nThis isn't about slowing down your onboarding process—it's about building trust at speed.\n\n2. Think Like a Fraudster: Run a Digital Risk Audit\n\nOnline fraud doesn't happen by accident. It happens when we leave gaps in our digital armour. One of the smartest things a business leader can do is take a step back and assess their vulnerabilities.\n\nStart by asking:`
  },
  // ... other jobs
]

export default function BusinessJobsPage() {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState(initialJobs)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedJob, setSelectedJob] = useState<typeof initialJobs[0] | null>(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [showReviewDialog, setShowReviewDialog] = useState(false)
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [showFeedbackInput, setShowFeedbackInput] = useState(false)

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || job.status === statusFilter
    const matchesType = typeFilter === "all" || job.type === typeFilter
    
    return matchesSearch && matchesStatus && matchesType
  }).sort((a, b) => {
    // Prioritize Business Fraud Article
    if (a.title === "Business Fraud Article") return -1
    if (b.title === "Business Fraud Article") return 1
    
    // Then sort by status priority
    const statusPriority: Record<string, number> = {
      "Ready for Review": 1,
      "Submitted to Network": 2,
      "With Editor": 3,
      "Draft": 4,
      "Completed": 5
    }
    
    const statusDiff = statusPriority[a.status] - statusPriority[b.status]
    if (statusDiff !== 0) return statusDiff
    
    // If status is the same, sort by deadline (earlier first)
    return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  })

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Ready for Review":
        return "bg-yellow-500/20 text-yellow-500"
      case "Submitted to Network":
        return "bg-amber-600/20 text-amber-600"
      case "With Editor":
        return "bg-purple-500/20 text-purple-500"
      case "Draft":
        return "bg-gray-500/20 text-gray-500"
      case "Completed":
        return "bg-green-500/20 text-green-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleViewDetails = (job: typeof jobs[0]) => {
    setSelectedJob(job)
    setShowDetailsDialog(true)
  }

  const handleSubmitToNetwork = (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId
        ? { ...job, status: "Submitted to Network" }
        : job
    ))
    setShowDetailsDialog(false)
  }

  const handleReviewContent = (job: typeof jobs[0]) => {
    setSelectedJob(job)
    setShowReviewDialog(true)
  }

  const handleFeedback = (isPositive: boolean) => {
    if (isPositive) {
      setIsApproved(true)
    } else {
      setShowFeedbackDialog(true)
    }
  }

  const handleReviewDialogChange = (open: boolean) => {
    if (!open) {
      setIsApproved(false)
    }
    setShowReviewDialog(open)
  }

  const handleSubmitFeedback = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setShowFeedbackDialog(false)
      setShowReviewDialog(false)
      setFeedbackMessage("")
      // You could add a success toast here
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCompleteJob = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Update job status to completed
      setJobs(prev => prev.map(job => 
        job.id === selectedJob?.id ? { ...job, status: "Completed" } : job
      ))
      setShowReviewDialog(false)
      // You could add a success toast here
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Function to trigger confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  // Function to download content
  const downloadContent = () => {
    if (!selectedJob) return
    
    const element = document.createElement("a")
    const file = new Blob([selectedJob.generatedContent], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = `${selectedJob.title.replace(/\s+/g, '-').toLowerCase()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleCompleteAndDownload = async () => {
    setIsSubmitting(true)
    try {
      await handleCompleteJob()
      downloadContent()
      triggerConfetti()
      setTimeout(() => {
        setShowReviewDialog(false)
      }, 1000)
    } catch (error) {
      console.error('Error completing job:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="p-8 gradient-bg min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">My Jobs</h1>
            <Button onClick={() => navigate('/business/create')}>Create Job</Button>
          </div>

          <div className="bg-card rounded-xl shadow-sm border border-border mb-6">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-muted"
                  />
                </div>
                <div className="flex gap-4">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px] bg-muted">
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="Ready for Review">Ready for Review</SelectItem>
                      <SelectItem value="Submitted to Network">Submitted to Network</SelectItem>
                      <SelectItem value="With Editor">With Editor</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[180px] bg-muted">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {contentTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2">{job.description}</p>
                  </div>
                  <div className="text-right">
                    <img 
                      src="/fintech-logo.png" 
                      alt="Fintech" 
                      className="h-8 w-auto object-contain mb-2"
                    />
                    <span className="text-xl font-semibold text-primary">
                      {job.credits} credits
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
                  <div>Due: {job.deadline}</div>
                  <Badge variant="secondary">{job.type}</Badge>
                  <Badge className={getStatusStyle(job.status)}>{job.status}</Badge>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="secondary" onClick={() => handleViewDetails(job)}>
                    View Details
                  </Button>
                  {job.status === "Draft" && (
                    <Button onClick={() => handleSubmitToNetwork(job.id)}>
                      <Send className="h-4 w-4 mr-2" />
                      Submit to Network
                    </Button>
                  )}
                  {job.status === "Ready for Review" && (
                    <Button variant="default" onClick={() => handleReviewContent(job)}>
                      Review Content
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dialogs remain the same */}
        </div>
      </div>
    </DashboardLayout>
  )
}