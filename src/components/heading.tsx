import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "./spinner";
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Write, plan, organize, play
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Turn ideas into action with Notion's AI-powered workspace.
      </h3>
      {isLoading && (
        <div className="flex items-center justify-center w-full">
          <Spinner />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button size="sm" asChild>
          <Link to="/documents">
            Enter Rotion
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Rotion free
              </Button>
            </SignInButton>
          </>
        )}
    </div>
  );
};
