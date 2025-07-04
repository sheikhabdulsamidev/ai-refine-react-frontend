import { Routes, Route } from 'react-router-dom'
import { Toaster } from "./components/ui/sonner"

// Pages
import LoginPage from './pages/LoginPage'
import BusinessDashboard from './pages/business/Dashboard'
import BusinessJobs from './pages/business/Jobs'
import BusinessGuides from './pages/business/Guides'
import BusinessCreate from './pages/business/Create'
import BusinessAdminDashboard from './pages/business-admin/Dashboard'
import BusinessAdminJobs from './pages/business-admin/Jobs'
import BusinessAdminUsers from './pages/business-admin/Users'
import BusinessAdminCredits from './pages/business-admin/Credits'
import BusinessAdminBilling from './pages/business-admin/Billing'
import BusinessAdminGuides from './pages/business-admin/Guides'
import BusinessAdminCreate from './pages/business-admin/Create'
import EditorDashboard from './pages/editor/Dashboard'
import EditorJobs from './pages/editor/Jobs'
import EditorJobDetails from './pages/editor/JobDetails'
import EditorEarnings from './pages/editor/Earnings'
import EditorGuides from './pages/editor/Guides'
import SearchPage from './pages/Search'
import OnboardingEditor from './pages/onboarding/editor/OnboardingEditor'
import OnboardingAssessment from './pages/onboarding/editor/Assessment'
import OnboardingInterview from './pages/onboarding/editor/Interview'
import OnboardingPortal from './pages/onboarding/editor/Portal'
import OnboardingActivation from './pages/onboarding/editor/Activation'

function App() {
  return (
    <>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Business Routes */}
        <Route path="/business" element={<BusinessDashboard />} />
        <Route path="/business/jobs" element={<BusinessJobs />} />
        <Route path="/business/guides" element={<BusinessGuides />} />
        <Route path="/business/create" element={<BusinessCreate />} />
        
        {/* Business Admin Routes */}
        <Route path="/business-admin" element={<BusinessAdminDashboard />} />
        <Route path="/business-admin/jobs" element={<BusinessAdminJobs />} />
        <Route path="/business-admin/users" element={<BusinessAdminUsers />} />
        <Route path="/business-admin/credits" element={<BusinessAdminCredits />} />
        <Route path="/business-admin/billing" element={<BusinessAdminBilling />} />
        <Route path="/business-admin/guides" element={<BusinessAdminGuides />} />
        <Route path="/business-admin/create" element={<BusinessAdminCreate />} />
        
        {/* Editor Routes */}
        <Route path="/editor" element={<EditorDashboard />} />
        <Route path="/editor/jobs" element={<EditorJobs />} />
        <Route path="/editor/jobs/:id" element={<EditorJobDetails />} />
        <Route path="/editor/earnings" element={<EditorEarnings />} />
        <Route path="/editor/guides" element={<EditorGuides />} />
        
        {/* Search */}
        <Route path="/search" element={<SearchPage />} />
        
        {/* Onboarding Routes */}
        <Route path="/onboarding/editor" element={<OnboardingEditor />} />
        <Route path="/onboarding/editor/assessment" element={<OnboardingAssessment />} />
        <Route path="/onboarding/editor/interview" element={<OnboardingInterview />} />
        <Route path="/onboarding/editor/portal" element={<OnboardingPortal />} />
        <Route path="/onboarding/editor/activate" element={<OnboardingActivation />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App