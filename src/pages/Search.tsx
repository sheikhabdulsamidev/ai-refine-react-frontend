"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Clock } from "lucide-react"
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
    id: "6",
    title: "Business Fraud Article",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description: "Essential steps for financial services SMBs to protect against business fraud",
    deadline: "2024-03-30",
    type: "Blog Post",
    payment: 27.60,
    prompt: "Create an informative article about business fraud protection for financial services SMBs",
    generatedContent: `# Business Fraud Protection: 3 Essential Steps Every Financial Services SMB Must Take Now

By Chris Hooper, Brand Director, Veriff

A few weeks ago, I spoke with a small business owner who runs a boutique financial services firm in Chicago. He was visibly shaken. Overnight, a fraudster had accessed his client portal and impersonated a customer, and initiated a bogus transaction. "We thought we were covered," he told me. "We had two-factor authentication and encrypted data. But it wasn't enough."

Stories like his are becoming all too common. According to the FBI's Internet Crime Report, U.S. businesses lost over $10 billion to cybercrime in 2022, with small and midsize businesses (SMBs) being particularly vulnerable. And the financial services space? A prime target.

This article is a wake-up call for SMBs in financial services. Business fraud protection isn't just a nice-to-have; it's a must-have. Here are three key steps every SMB should take to reduce their risk and reclaim control.

1. Know Who You're Dealing With: Upgrade Your Identity Verification

"At Veriff, we believe knowing your customer isn't just about compliance—it's your first line of defense against fraud," says Chris Hooper, Brand Director at Veriff.

For too many SMBs, identity verification is a static process done at onboarding. But today's fraudsters are sophisticated. They use deepfakes, stolen credentials, and synthetic identities to sneak past legacy systems. If your ID checks are outdated, they're not protecting you.

Modern business fraud protection starts with dynamic, AI-powered identity verification. Look for solutions that can:

- Detect deepfake videos and manipulated images
- Verify documents in real time
- Match faces to ID with biometric precision

This isn't about slowing down your onboarding process—it's about building trust at speed.

2. Think Like a Fraudster: Run a Digital Risk Audit

Online fraud doesn't happen by accident. It happens when we leave gaps in our digital armour. One of the smartest things a business leader can do is take a step back and assess their vulnerabilities.

Start by asking:`
  },
  // ... other jobs
]

export default function SearchPage() {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState(initialJobs)
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedJob, setSelectedJob] = useState<typeof initialJobs[0] | null>(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [showClaimDialog, setShowClaimDialog] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || job.type === typeFilter
    
    return matchesSearch && matchesType
  })

  const handleViewDetails = (job: typeof initialJobs[0]) => {
    setSelectedJob(job)
    setShowDetailsDialog(true)
  }

  const handleClaimJob = (job: typeof initialJobs[0]) => {
    setSelectedJob(job)
    setShowClaimDialog(true)
  }

  const confirmClaimJob = async () => {
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Remove job from available jobs
      setJobs(jobs.filter(j => j.id !== selectedJob?.id))
      setShowClaimDialog(false)
      
      // Redirect to my jobs
      navigate('/editor/jobs')
    } catch (error) {
      setError("Failed to claim job. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="p-8 gradient-bg min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Available Jobs</h1>
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
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[180px] bg-muted">
                      <SelectValue placeholder="Filter by type" />
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
                      <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                    </div>
                    <p className="text-muted-foreground mt-2">{job.description}</p>
                  </div>
                  <div className="text-right">
                    <img 
                      src={job.clientLogo} 
                      alt={job.client}
                      className="h-8 w-auto object-contain mb-2"
                    />
                    <span className="text-xl font-semibold text-primary">
                      £{job.payment.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: {job.deadline}</span>
                  </div>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="secondary" onClick={() => handleViewDetails(job)}>
                    View Details
                  </Button>
                  <Button onClick={() => handleClaimJob(job)}>
                    Claim Job
                  </Button>
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