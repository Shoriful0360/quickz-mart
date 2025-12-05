"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminPrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.auth);
  const [role, setRole] = useState(null);

  useEffect(() => {
    // If still loading auth, don't check anything
    if (loading) return;

    // If user not logged in → redirect
    if (!user?.email) {
      router.replace("/");
      return;
    }

    // Fetch role from backend
    const fetchRole = async () => {
      const res = await fetch(`/api/user/${user.email}`);
      const data = await res.json();
      setRole(data);
    };

    fetchRole();
  }, [user, loading, router]);

  // Show loader while checking
  if (loading || role === null) return <p>Loading...</p>;

  // If not admin → redirect
  if (role?.role !== "admin") {
    router.replace("/");
    return null;
  }

  // Admin approved → render content
  return children;
};

export default AdminPrivateRoute;
