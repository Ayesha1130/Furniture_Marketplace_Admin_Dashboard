"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatisticsCharts from "@/components/statistics-charts";

export default function StatisticsPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      const role = (user?.publicMetadata as { role?: string })?.role;
      
      console.log('User object:', user); // Log the full user object
      console.log('User role:', role); // Log the role value

      // If the role is not admin or user is not defined, redirect to home
      if (!user || role !== 'admin') {
        console.log('User is not admin or not logged in. Redirecting to home...');
        router.push('/');
      }
    }
  }, [isLoaded, user, router]);

  // If user data is not loaded, show loading message
  if (!isLoaded) {
    console.log("User is loading..."); // Debugging line
    return <div>Loading...</div>;
  }

  // If user is an admin, render the statistics page
  return <StatisticsCharts />;
}
