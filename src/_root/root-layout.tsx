import { Navbar } from '@/components/navbar'
import { Spinner } from '@/components/spinner';
import { useConvexAuth } from 'convex/react';
import { Navigate, Outlet } from 'react-router-dom'

const RootLayout = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-full">
  //       <Spinner size="lg" />
  //     </div>
  //   );
  // }

  // if (isAuthenticated) {
  //   return <Navigate to="/documents" replace />
  // }

  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="h-full pt-40">
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout