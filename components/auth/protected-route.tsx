"use client";

import React from "react";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 rounded-full bg-[#f1f1f1] p-6 text-[#4CAF4F]"
                >
                    <Lock size={48} />
                </motion.div>
                <h2 className="mb-2 text-2xl font-bold text-[#4D4D4D]">Access Restricted</h2>
                <p className="mb-8 max-w-md text-[#717171]">
                    Please login to access this page and explore our full range of services and features.
                </p>
                <Link
                    href="/login"
                    className="rounded-md bg-[#4CAF4F] px-8 py-3 font-medium text-white transition hover:bg-[#43a046]"
                >
                    Login Now
                </Link>
            </div>
        );
    }

    return <>{children}</>;
}
