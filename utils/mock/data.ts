import { BarChart } from "@/components/ui/chart";
import { CreditCard, FileText, Filter, HelpCircle, Receipt, Search, Sparkles, UserPlus, Users } from "lucide-react";

// Mock data for invoices
export const MOCK_INVOICES = [
  {
    id: "INV-001",
    date: new Date(2023, 1, 15),
    amount: 5000.0,
    status: "Paid",
    items: [
      { description: "API Credits (600,000)", amount: 3000.0 },
      { description: "Premium Support", amount: 1000.0 },
      { description: "Custom Templates (2)", amount: 1000.0 },
    ],
  },
  {
    id: "INV-002",
    date: new Date(2023, 3, 15),
    amount: 10000.0,
    status: "Paid",
    items: [
      { description: "API Credits (300,000)", amount: 6000.0 },
      { description: "Premium Support", amount: 2000.0 },
      { description: "Custom Templates (2)", amount: 2000.0 },
    ],
  },
  {
    id: "INV-003",
    date: new Date(2023, 2, 15),
    amount: 5000.0,
    status: "Paid",
    items: [
      { description: "API Credits (800,000)", amount: 3000.0 },
      { description: "Premium Support", amount: 2000.0 },
    ],
  },
  {
    id: "INV-004",
    date: new Date(2023, 4, 15),
    amount: 5000.0,
    status: "Pending",
    items: [
      { description: "API Credits (600,000)", amount: 3000.0 },
      { description: "Premium Support", amount: 1000.0 },
      { description: "Custom Templates (2)", amount: 1000.0 },
    ],
  },
];
// Mock data for usage
export const MONTHLY_USAGE = [
  { month: "May 2023", apiCalls: 450000, storage: 15, cost: 950.0 },
  { month: "April 2023", apiCalls: 280000, storage: 12, cost: 720.0 },
  { month: "March 2023", apiCalls: 750000, storage: 20, cost: 1140.0 },
];

// Mock data for pricing plans
export const pricingPlans = [
  {
    name: "Bronze",
    credits: 2563,
    price: 2500,
    features: [
      "Up to 5 users",
      "Up to 5 bespoke prompt templates",
      "Dedicated account manager",
      "User and corporate dashboards",
      "Avg 15 pieces of editorial content",
    ],
  },
  {
    name: "Silver",
    credits: 5250,
    price: 5000,
    features: [
      "Up to 10 users",
      "Up to 10 bespoke prompt templates",
      "Dedicated account manager",
      "User and corporate dashboards",
      "Avg 30 pieces of editorial content",
    ],
  },
  {
    name: "Gold",
    credits: 11000,
    price: 10000,
    features: [
      "Up to 20 users",
      "Up to 20 bespoke prompt templates",
      "Dedicated account manager",
      "User and corporate dashboards",
      "Avg 63 pieces of editorial content",
    ],
  },
];
// Mock data for team members
export const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Content Manager",
    allocated: 2000,
    used: 1200,
  },
  {
    name: "Michael Chen",
    role: "Marketing Lead",
    allocated: 3000,
    used: 2100,
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    allocated: 1500,
    used: 800,
  },
  {
    name: "James Wilson",
    role: "Technical Writer",
    allocated: 2500,
    used: 1600,
  },
  {
    name: "Lisa Anderson",
    role: "Content Strategist",
    allocated: 1800,
    used: 900,
  },
  {
    name: "David Thompson",
    role: "Marketing Specialist",
    allocated: 1700,
    used: 850,
  },
];
// Mock data for monthly usage
export const monthlyUsage = [
  { month: "January", credits: 8500 },
  { month: "February", credits: 9200 },
  { month: "March", credits: 7800 },
  { month: "April", credits: 10500 },
  { month: "May", credits: 9800 },
  { month: "June", credits: 11200 },
];

// Mock data for business users
export const businessUsers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@fintechsolutions.com",
    role: "Content Manager",
    activeJobs: 3,
    creditsUsed: 250,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@fintechsolutions.com",
    role: "Marketing Lead",
    activeJobs: 2,
    creditsUsed: 300,
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma@fintechsolutions.com",
    role: "Product Manager",
    activeJobs: 1,
    creditsUsed: 150,
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james@fintechsolutions.com",
    role: "Technical Writer",
    activeJobs: 2,
    creditsUsed: 400,
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "lisa@fintechsolutions.com",
    role: "Content Strategist",
    activeJobs: 1,
    creditsUsed: 200,
  },
  {
    id: "6",
    name: "David Thompson",
    email: "david@fintechsolutions.com",
    role: "Marketing Specialist",
    activeJobs: 1,
    creditsUsed: 200,
  },
];
// Mock data for recent jobs
export const recentJobs = [
  {
    id: "1",
    title: "Digital Banking Trends Report",
    user: "Sarah Johnson",
    type: "White Paper",
    status: "Draft",
    credits: 1200,
  },
  {
    id: "2",
    title: "Investment Platform Launch",
    user: "Michael Chen",
    type: "Social Media Post",
    status: "Submitted to Network",
    credits: 800,
  },
  {
    id: "3",
    title: "API Documentation",
    user: "James Wilson",
    type: "Technical Documentation",
    status: "With Editor",
    credits: 1500,
  },
  {
    id: "4",
    title: "Webinar Promotion",
    user: "Lisa Anderson",
    type: "Social Media",
    status: "Ready for Review",
    credits: 200,
  },
  {
    id: "5",
    title: "Developer Guide",
    user: "Emma Davis",
    type: "Technical Writing",
    status: "In Progress",
    credits: 150,
  },
  {
    id: "6",
    title: "Monthly Newsletter",
    user: "David Thompson",
    type: "Marketing",
    status: "Completed",
    credits: 200,
  },
];
// Mock data for users
export const users = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Content Manager",
    status: "Active",
    creditsUsed: 250,
    totalCredits: 500,
    activeJobs: 3,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@company.com",
    role: "Marketing Lead",
    status: "Active",
    creditsUsed: 300,
    totalCredits: 600,
    activeJobs: 2,
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma@company.com",
    role: "Product Manager",
    status: "Active",
    creditsUsed: 150,
    totalCredits: 400,
    activeJobs: 1,
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james@company.com",
    role: "Technical Writer",
    status: "Active",
    creditsUsed: 400,
    totalCredits: 700,
    activeJobs: 2,
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "lisa@company.com",
    role: "Content Strategist",
    status: "Active",
    creditsUsed: 200,
    totalCredits: 450,
    activeJobs: 1,
  },
  {
    id: "6",
    name: "David Thompson",
    email: "david@company.com",
    role: "Marketing Specialist",
    status: "Active",
    creditsUsed: 200,
    totalCredits: 450,
    activeJobs: 1,
  },
];
// Mock data for admin guides
export const adminGuides = [
  {
    id: "1",
    title: "Adding New Users",
    description: "Learn how to add and onboard new team members to your AIRefine business account",
    readTime: "8 min",
    videoUrl: "https://example.com/videos/adding-users",
    icon: UserPlus,
  },
  {
    id: "2",
    title: "Allocating Credits",
    description: "Master the process of purchasing and distributing credits to your team members",
    readTime: "10 min",
    videoUrl: "https://example.com/videos/credit-allocation",
    icon: CreditCard,
  },
  {
    id: "3",
    title: "Managing Users",
    description: "Best practices for managing user accounts, permissions, and activity",
    readTime: "12 min",
    videoUrl: "https://example.com/videos/user-management",
    icon: Users,
  },
  {
    id: "4",
    title: "Viewing and Tracking Jobs",
    description: "How to monitor, search, and analyze all jobs across your organization",
    readTime: "8 min",
    videoUrl: "https://example.com/videos/job-tracking",
    icon: FileText,
  },
  {
    id: "5",
    title: "Understanding Billing",
    description: "A comprehensive guide to billing, invoices, and payment management",
    readTime: "15 min",
    videoUrl: "https://example.com/videos/billing-guide",
    icon: Receipt,
  },
  {
    id: "6",
    title: "Advanced Search Techniques",
    description: "Powerful search strategies to find specific jobs, users, and content",
    readTime: "7 min",
    videoUrl: "https://example.com/videos/admin-search",
    icon: Search,
  },
  {
    id: "7",
    title: "Analytics and Reporting",
    description: "How to generate and interpret reports on usage, costs, and productivity",
    readTime: "14 min",
    videoUrl: "https://example.com/videos/admin-analytics",
    icon: BarChart,
  },
];
// Mock data for jobs
export const BusinessAdminInitialJobs = [
  {
    id: "7",
    title: "Business Fraud Article",
    client: "Veriff",
    clientLogo: "/veriff-logo.png",
    description: "Essential steps for financial services SMBs to protect against business fraud",
    deadline: "2024-03-30",
    type: "Blog Post",
    credits: 138,
    status: "For Review",
    prompt:
      "Create an informative article about business fraud protection for financial services SMBs",
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

Start by asking:`,
  },
  {
    id: "1",
    title: "API Documentation",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description: "Write technical documentation for payment processing API",
    deadline: "2024-03-01",
    type: "Technical Documentation",
    credits: 1500,
    status: "With Editor",
    prompt: `Create comprehensive technical documentation for our updated API endpoints. Include:
- Authentication methods
- Endpoint specifications
- Request/response examples
- Error handling
- Best practices`,
    generatedContent: "Initial content for technical documentation...",
  },
  {
    id: "2",
    title: "Investment Platform Launch",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description: "Develop content strategy for new investment platform launch",
    deadline: "2024-03-10",
    type: "Social Media Post",
    credits: 800,
    status: "Submitted to Network",
    prompt: "Write a professional press release announcing our new payment gateway solution...",
    generatedContent: "Draft content for press release...",
  },
  {
    id: "3",
    title: "Digital Banking Trends Report",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description:
      "Create a comprehensive report on emerging digital banking trends and their impact on the financial sector",
    deadline: "2024-03-15",
    type: "White Paper",
    credits: 1200,
    status: "Draft",
    prompt: "Create a comprehensive financial report covering Q1 2024 results...",
    generatedContent: "",
  },
  {
    id: "4",
    title: "Social Media Campaign",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description: "Develop a series of social media posts for our upcoming webinar",
    deadline: "2024-03-20",
    type: "Social Media Post",
    credits: 350,
    status: "Active",
    prompt:
      "Create 10 engaging social media posts to promote our upcoming webinar on financial technology trends...",
    generatedContent: "Initial social media content drafts...",
  },
  {
    id: "5",
    title: "Email Newsletter",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description: "Monthly newsletter highlighting new features and industry news",
    deadline: "2024-03-25",
    type: "Newsletter",
    credits: 450,
    status: "Pending",
    prompt:
      "Create our monthly newsletter featuring new product updates and key industry developments...",
    generatedContent: "",
  },
  {
    id: "6",
    title: "API Integration Guide",
    client: "Fintech",
    clientLogo: "/fintech-logo.png",
    description: "Technical guide for developers integrating with our payment API",
    deadline: "2024-04-10",
    type: "Technical Documentation",
    credits: 800,
    status: "Active",
    prompt:
      "Develop a comprehensive developer guide for integrating with our payment processing API...",
    generatedContent: "Initial draft of integration guide...",
  },
];

export const businessGuides = [
  {
    id: "1",
    title: "Getting Started with AIRefine",
    description: "A comprehensive guide to using AIRefine for your content needs",
    readTime: "10 min",
    videoUrl: "https://example.com/videos/getting-started",
    icon: Sparkles,
  },
  {
    id: "2",
    title: "Search and Filter Techniques",
    description:
      "Learn how to effectively search and filter your content to find exactly what you need",
    readTime: "8 min",
    videoUrl: "https://example.com/videos/search-filter",
    icon: Filter,
  },
  {
    id: "3",
    title: "Working with Editors",
    description: "Best practices for collaborating with content editors",
    readTime: "12 min",
    videoUrl: "https://example.com/videos/editor-collaboration",
    icon: Users,
  },
  {
    id: "4",
    title: "Frequently Asked Questions",
    description: "Common questions and answers about using AIRefine",
    readTime: "15 min",
    videoUrl: "https://example.com/videos/faq",
    icon: HelpCircle,
  },
];
// Mock data for business jobs
export const businessJobs = [
  {
    clientName: "Veriff",
    workType: "Business Fraud Article",
    status: "Submitted to Network",
    deadline: "30/03/2024",
    credits: 138,
  },
  {
    clientName: "London Writings Club",
    workType: "Newsletter",
    status: "Ready for Review",
    deadline: "01/02/2025",
    credits: 138,
  },
  {
    clientName: "HumAI - Healthcare",
    workType: "Article",
    status: "Submitted to Network",
    deadline: "21/02/2025",
    credits: 230,
  },
  {
    clientName: "APEX Lawyers",
    workType: "Brochure",
    status: "Completed",
    deadline: "23/02/2025",
    credits: 184,
  },
  {
    clientName: "OBO Logistics",
    workType: "Newsletter",
    status: "With Editor",
    deadline: "01/02/2025",
    credits: 138,
  },
  {
    clientName: "Simmonds Food",
    workType: "Article",
    status: "Draft",
    deadline: "26/03/2025",
    credits: 230,
  },
];