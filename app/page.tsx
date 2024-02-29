import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white font-semibold drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-lg"> A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" className="size-lg font-semiboldbold">
              {" "}
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
