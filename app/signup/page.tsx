"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock signup logic
        login();
        router.push("/");
    };

    return (
        <div className="flex min-h-[80vh] items-center justify-center py-12">
            <SectionContainer>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mx-auto max-w-md overflow-hidden rounded-2xl bg-white p-8 shadow-2xl border border-[#F5F7FA]"
                >
                    <div className="mb-8 text-center">
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/figma/logo.svg" alt="Nexcent" width={155} height={24} />
                        </Link>
                        <h1 className="text-3xl font-bold text-[#4D4D4D]">Create Account</h1>
                        <p className="text-[#717171] mt-2">Join thousands of smart managers</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-[#4D4D4D] mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full rounded-md border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#4CAF4F] focus:ring-1 focus:ring-[#4CAF4F]"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4D4D4D] mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full rounded-md border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#4CAF4F] focus:ring-1 focus:ring-[#4CAF4F]"
                                placeholder="email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4D4D4D] mb-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full rounded-md border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#4CAF4F] focus:ring-1 focus:ring-[#4CAF4F]"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-start gap-2 py-2">
                            <input type="checkbox" required className="mt-1 accent-[#4CAF4F]" id="terms" />
                            <label htmlFor="terms" className="text-xs text-[#717171]">
                                I agree to the <span className="text-[#4CAF4F] font-semibold">Terms of Service</span> and <span className="text-[#4CAF4F] font-semibold">Privacy Policy</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4CAF4F] py-3 font-semibold text-white transition hover:bg-[#43a046] active:scale-[0.98]"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-[#717171]">
                            Already have an account?{" "}
                            <Link href="/login" className="font-semibold text-[#4CAF4F] hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </SectionContainer>
        </div>
    );
}
