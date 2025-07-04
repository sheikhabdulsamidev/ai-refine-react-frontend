import { DemoForm, LoginForm } from "../components/forms";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4">
      <div className="w-full max-w-[400px] bg-[#191942] p-8 rounded-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">AI</span> Refine
          </h1>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Sign in to your account</h2>
        </div>
        <LoginForm />
        <DemoForm />
      </div>
    </div>
  );
}