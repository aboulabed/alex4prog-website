'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { GrLanguage } from "react-icons/gr";
type LanguageSwitcherProps = {
    messages: (key: string) => string;
};
export default function LanguageSwitcher({ messages }: LanguageSwitcherProps) {
    const router = useRouter();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false);
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    const handleChange = async (lang: string) => {
        if (lang === locale) return;
        setOpen(false);
        startTransition(() => {
            fetch('/api/set-language', {
                method: 'POST',
                body: JSON.stringify({ language: lang }),
                headers: { 'Content-Type': 'application/json' },
            }).then(() => {
                router.refresh();
            });
        });
    };

    return (
        <div className="relative z-50">
            {/* Desktop Icon Button */}
            <div
                className="hidden lg:inline-block relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <button
                    className="flex items-center gap-2 text-gray-700 font-bold px-4 py-2 rounded hover:text-red-700 transition"
                >
                    <GrLanguage className="w-5 h-5" />
                </button>

                <div
                    className={`absolute w-40 bg-white border border-gray-200 rounded shadow-md transform transition-all duration-200 ease-out
      ${dir === 'rtl' ? 'left-0' : 'right-0'}
      ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
    `}
                >
                    <button
                        onClick={() => handleChange('ar')}
                        disabled={locale === 'ar'}
                        className={`w-full text-left px-4 py-2 text-sm transition font-bold ${locale === 'ar'
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-red-600 hover:bg-red-600 hover:text-white'
                            }`}
                    >
                        {messages('Arabic')}
                    </button>
                    <button
                        onClick={() => handleChange('en')}
                        disabled={locale === 'en'}
                        className={`w-full text-left px-4 py-2 text-sm transition font-bold ${locale === 'en'
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-red-600 hover:bg-red-600 hover:text-white'
                            }`}
                    >
                        {messages('English')}
                    </button>
                </div>
            </div>

            {/* Mobile - Side by Side Buttons */}
            <div className="lg:hidden flex w-ful border border-red-600 rounded">
                <button
                    onClick={() => handleChange('ar')}
                    disabled={locale === 'ar'}
                    className={`w-1/2 py-2 text-sm font-semibold transition ${locale === 'ar'
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-red-600  hover:bg-red-600 hover:text-white'
                        }`}
                >
                    {messages('Arabic')}
                </button>
                <button
                    onClick={() => handleChange('en')}
                    disabled={locale === 'en'}
                    className={`w-1/2 py-2 text-sm font-semibold transition ${locale === 'en'
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-red-600 border-red-600 hover:bg-red-600 hover:text-white'
                        }`}
                >
                    {messages('English')}
                </button>
            </div>
        </div>
    );
}
