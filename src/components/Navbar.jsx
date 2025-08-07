import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/resume.pdf", download: true, isButton: true },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Animation variants for the mobile menu
    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        exit: { x: "100%", transition: { duration: 0.2 } },
    };

    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-[rgba(11,11,13,0.95)] backdrop-blur-xl text-white sticky top-0 z-50 shadow-2xl border-b border-gray-800/50 transition-all duration-300">
            <div className="text-2xl font-extrabold tracking-wide">RP</div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 text-lg font-medium">
                {navItems.map((item, i) =>
                    item.isButton ? (
                        <li key={i}>
                            <a
                                href={item.href}
                                download={item.download}
                                className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-button-bg)] text-black font-semibold shadow-lg hover:from-[var(--color-button-hover)] hover:to-[var(--color-accent)] transition-all duration-300"
                            >
                                {item.label}
                            </a>
                        </li>
                    ) : (
                        <li key={i}>
                            <a
                                href={item.href}
                                className="hover:text-[var(--color-accent)] transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        </li>
                    )
                )}
            </ul>

            {/* Hamburger (Mobile) */}
            <button
                className="md:hidden text-3xl"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
            >
                <HiMenu />
            </button>

            {/* --- THIS IS THE MOBILE NAVIGATION THAT APPEARS ON CLICK --- */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* 1. Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* 2. Side Drawer with Glassmorphism Effect */}
                        <motion.div
                            className="fixed right-0 top-0 h-full w-4/5 max-w-xs z-[101] flex flex-col pt-8 px-6"
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(20px) saturate(180%)",
                                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                                borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Close button */}
                            <button
                                className="self-end mb-10 text-3xl p-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition-all"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close navigation menu"
                            >
                                <HiX />
                            </button>

                            {/* Navigation Links */}
                            <ul className="flex flex-col gap-8 text-xl font-medium">
                                {navItems.map((item, i) =>
                                    item.isButton ? (
                                        <li key={i}>
                                            <a
                                                href={item.href}
                                                download={item.download}
                                                className="block w-full px-5 py-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-button-bg)] text-black font-semibold shadow-lg text-center"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ) : (
                                        <li key={i}>
                                            <a
                                                href={item.href}
                                                className="block px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-all"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
