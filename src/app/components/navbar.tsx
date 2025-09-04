'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');
    const locale = useLocale();

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4">
            {/* Desktop Nav */}
            <div className="hidden lg:flex justify-between items-center">
                {/* Left - Logo */}
                <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <img
                        src="https://www.alex4prog.com/wp-content/uploads/2022/09/AfP-simlified-Logo-layers2.ai_-300x169.png"
                        alt="Logo"
                        className="max-h-18"
                    />
                </div>

                {/* Center - Nav Links */}
                <ul className="flex gap-6 text-sm font-medium text-gray-800">
                    <li>
                        <a
                            href="#home"
                            className="text-red-500 font-bold text-2xl hover:-translate-y-1 hover:text-red-600 cursor-pointer transition inline-block"
                        >
                            {t('Home')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1 cursor-pointer transition inline-block"
                        >
                            {t('Services')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1 cursor-pointer transition inline-block"
                        >
                            {t('Projects')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#whyus"
                            className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1 cursor-pointer transition inline-block"
                        >
                            {t('Why Us')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1 cursor-pointer transition inline-block"
                        >
                            {t('Contact')}
                        </a>
                    </li>
                </ul>


                {/* Right - Language Switcher */}
                <LanguageSwitcher messages={t} />
            </div>

            {/* Mobile Nav */}
            <div className="lg:hidden flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <img
                        src="https://www.alex4prog.com/wp-content/uploads/2022/09/AfP-simlified-Logo-layers2.ai_-300x169.png"
                        alt="Logo"
                        className="max-h-12"
                    />
                </div>

                {/* Burger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-red-600 text-3xl focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
                    }`}
            >
                <ul className="mt-4 space-y-3 text-sm font-medium text-gray-800">
                    <li>
                        <a
                            href="#home"
                            className="text-red-600 font-semibold cursor-pointer transition mx-5 inline-block"
                        >
                            {t('Home')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="hover:text-red-500 cursor-pointer transition mx-5 inline-block"
                        >
                            {t('Services')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-red-500 cursor-pointer transition mx-5 inline-block"
                        >
                            {t('Projects')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#whyus"
                            className="hover:text-red-500 cursor-pointer transition mx-5 inline-block"
                        >
                            {t('Why Us')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-red-500 cursor-pointer transition mx-5 inline-block"
                        >
                            {t('Contact')}
                        </a>
                    </li>
                </ul>

                {/* Mobile Language Switcher */}
                <div className="mt-4 px-2">
                    <LanguageSwitcher messages={t} />
                </div>
            </div>
        </nav>
    );
}
