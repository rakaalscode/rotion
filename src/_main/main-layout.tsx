import { Navigation } from "@/components/navigation";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
