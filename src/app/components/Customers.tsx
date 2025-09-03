'use client';
import Card from './Card'
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'motion/react';

const reasons = [
    {
        title: 'Government & Public Sector',
        description: 'Citizen portals, permits, and smart-city dashboards trusted by local authorities.'
    },
    {
        title: 'Healthcare Providers',
        description: 'HIPAA‑minded systems for patient scheduling, EMR integrations, and telehealth.'
    },
    {
        title: 'Education & LMS',
        description: 'E‑learning platforms, student portals, and assessment tools for schools and academies.'
    },
    {
        title: 'E‑commerce & Retail',
        description: 'High‑conversion storefronts, inventory sync, and secure payments at scale.'
    },
];

const variants = [
    { from: 'from-orange-50', to: 'to-rose-50', svg: '/shapes/pc.svg' },
    { from: 'from-violet-50', to: 'to-purple-50', svg: '/shapes/mobile.svg' },
    { from: 'from-green-50', to: 'to-emerald-50', svg: '/shapes/web.svg' },
    { from: 'from-pink-50', to: 'to-fuchsia-50', svg: '/shapes/graphic.svg' },
];

export default function WhyUs() {
    const t = useTranslations('Customers')
    const locale = useLocale()
    return (
        <section className="py-16 bg-gray-50" id="customers">
            <div className="container mx-auto px-6">

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
                                عملاؤنا
                            </>
                        ) : (
                            <>
                                Our <span className="font-semibold text-red-600">Customers</span>
                            </>
                        )}
                        {" "}
                        {t('sectionDescription')}
                    </motion.p>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            className="h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <Card
                                title={reason.title}
                                description={reason.description}
                                svgSrc={variants[i % variants.length].svg}
                                gradientFrom={variants[i % variants.length].from}
                                gradientTo={variants[i % variants.length].to}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
