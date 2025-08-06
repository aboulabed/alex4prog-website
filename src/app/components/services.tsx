'use client';
import Link from 'next/link';
import Card from './card'
import { Settings } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'motion/react';

const services = [
    {
        title: 'Web Design',
        description: 'We provide professional website design services compatible with all devices. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
        icon: <Settings />
    },
    {
        title: 'App Development',
        description: 'We develop modern applications using the latest technologies. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
        icon: <Settings />
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: 'We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
        icon: <Settings />
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: 'We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
        icon: <Settings />
    },
];


export default function ServicesSection() {
    const t = useTranslations('Services')
    const locale = useLocale()
    return (
        <section className="px-6 py-16 bg-gray-50" id="services">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    {t('sectionTitle')}
                </motion.h2>

                <motion.p
                    className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    {locale === 'ar' ? (
                        <>
                            في <span className="font-semibold text-red-600">الاسكندرية للبرمجة</span>
                        </>
                    ) : (
                        <>
                            at <span className="font-semibold text-red-600">Alex4Prog</span>
                        </>
                    )}
                    {t('sectionDescription')}
                </motion.p>
            </div>
            {/* Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: false }}
                    >
                        <Card
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            icon={service.icon}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
            >
                <Link
                    href="/services"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Show All Services
                </Link>
            </motion.div>
        </section>
    );
}
