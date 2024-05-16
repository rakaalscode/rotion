import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useScrollTop } from "@/hooks/use-scroll-top"
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
      <div className="flex items-center justify-end w-full ml-auto gap-x-2">
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <div className="hidden md:flex">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </SignInButton>
            </div>
            <div className={cn("hidden", scrolled && "flex")}>
              <SignInButton mode="modal">
                <Button size="sm">
                  Get Rotion free
                </Button>
              </SignInButton>
            </div>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/documents">
                Enter Rotion
              </Link>
            </Button>
            <UserButton 
              afterSignOutUrl="/"
            />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
