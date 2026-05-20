"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User } from "lucide-react";
import { navItems } from "@/constants";
import { SectionContainer } from "@/components/ui/section-container";
import { useAuth } from "@/context/auth-context";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-[#F5F7FA] py-4"}`}>
            <SectionContainer>
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="relative z-50">
                        <Image src="/figma/logo.svg" alt="Nexcent" width={155} height={24} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-[50px] lg:flex">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                className={`text-base leading-6 text-[#18191F] transition hover:text-[#4CAF4F] ${index === 0 ? "font-medium" : "font-normal"
                                    }`}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Buttons / Profile - Desktop */}
                    <div className="hidden items-center gap-[14px] sm:flex">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-2 text-sm font-medium text-[#4D4D4D]">
                                    <User size={18} className="text-[#4CAF4F]" />
                                    Account
                                </span>
                                <button
                                    onClick={logout}
                                    className="flex items-center gap-2 rounded-md border border-[#4CAF4F] px-5 py-2.5 text-sm font-medium leading-5 text-[#4CAF4F] transition hover:bg-[#4CAF4F] hover:text-white"
                                >
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-md px-5 py-2.5 text-sm font-medium leading-5 text-[#4CAF4F] transition hover:bg-[#e8ecef]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/signup"
                                    className="rounded-md bg-[#4CAF4F] px-5 py-2.5 text-sm font-medium leading-5 text-white transition hover:bg-[#43a046]"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="relative z-50 block p-2 text-[#4D4D4D] lg:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </SectionContainer>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-x-0 top-0 z-40 bg-white px-6 pb-10 pt-24 shadow-xl lg:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-[#18191F] transition hover:text-[#4CAF4F]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <hr className="my-2 border-[#E5E7EB]" />
                            <div className="flex flex-col gap-4">
                                {isLoggedIn ? (
                                    <>
                                        <div className="flex items-center gap-3 text-[#4D4D4D]">
                                            <User size={20} className="text-[#4CAF4F]" />
                                            <span>My Account</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsOpen(false);
                                            }}
                                            className="flex w-full items-center justify-center gap-2 rounded-md border border-[#4CAF4F] py-3 font-medium text-[#4CAF4F]"
                                        >
                                            <LogOut size={18} />
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="flex w-full items-center justify-center rounded-md border border-[#4CAF4F] py-3 font-medium text-[#4CAF4F]"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/signup"
                                            onClick={() => setIsOpen(false)}
                                            className="flex w-full items-center justify-center rounded-md bg-[#4CAF4F] py-3 font-medium text-white"
                                        >
                                            Sign up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
