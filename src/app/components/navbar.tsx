'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');
    const locale = useLocale();

    return (
        <nav className="bg-white shadow-sm px-6 py-4 ">
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
                    <li className="text-red-500 font-bold text-2xl
 hover:-translate-y-1 hover:text-red-600
 cursor-pointer transition">{t('Home')}</li>
                    <li className="hover:text-red-500 font-bold text-2xl
 hover:-translate-y-1
 cursor-pointer transition">{t('Services')}</li>
                    <li className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1
 cursor-pointer transition">{t('Projects')}</li>
                    <li className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1
 cursor-pointer transition">{t('Why Us')}</li>
                    <li className="hover:text-red-500 font-bold text-2xl hover:-translate-y-1
 cursor-pointer transition">{t('Contact')}</li>
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
                    <li className="text-red-600 font-semibold cursor-pointer transition mx-5">{t('Home')}</li>
                    <li className="hover:text-red-500 cursor-pointer transition mx-5">{t('Services')}</li>
                    <li className="hover:text-red-500 cursor-pointer transition mx-5">{t('Projects')}</li>
                    <li className="hover:text-red-500 cursor-pointer transition mx-5">{t('Why Us')}</li>
                    <li className="hover:text-red-500 cursor-pointer transition mx-5">{t('Contact')}</li>
                </ul>

                {/* Mobile Language Switcher */}
                <div className="mt-4 px-2">
                    <LanguageSwitcher messages={t} />
                </div>
            </div>
        </nav>
    );
}
