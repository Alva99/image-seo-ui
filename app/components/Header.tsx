"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Header() {

    const [scrolled, setScrolled] = useState(false)

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <header
            className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled
                    ? "backdrop-blur-md bg-white/70 border-b"
                    : "bg-white"
                }`}
        >

            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

                {/* LOGO */}

                <div className="flex items-center gap-3">

                    <Image
                        src="/logo.png"
                        alt="NubeBoost"
                        width={40}
                        height={40}
                    />

                    <span className="font-bold text-lg">
                        NubeBoost
                    </span>

                </div>

                {/* NAV */}

                <nav className="hidden md:flex gap-6 text-sm text-gray-600">

                    <a href="#how" className="hover:text-black">
                        Como funciona
                    </a>

                    <a href="#demo" className="hover:text-black">
                        Demo
                    </a>


                </nav>

                {/* CTA */}

                <button
                    type="button"
                    onClick={goToTop}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                >

                    Probar gratis

                </button>

            </div>

        </header>

    )
}