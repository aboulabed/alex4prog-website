'use client';
import Card from './Card'
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'motion/react';

const reasons = [
    {
        title: 'Expert Team',
        description: 'Seasoned engineers delivering high‑quality, scalable solutions on time.'
    },
    {
        title: 'Modern Tech Stack',
        description: 'We build with the latest frameworks and best practices to ensure performance and security.'
    },
    {
        title: 'Client-Centric Approach',
        description: 'Transparent communication, flexible engagement, and solutions tailored to your goals.'
    },
    {
        title: 'End‑to‑End Services',
        description: 'From discovery and design to development, testing, and ongoing support.'
    },
];

const variants = [
    { from: 'from-orange-50', to: 'to-rose-50', svg: '/shapes/pc.svg' },
    { from: 'from-violet-50', to: 'to-purple-50', svg: '/shapes/mobile.svg' },
    { from: 'from-green-50', to: 'to-emerald-50', svg: '/shapes/web.svg' },
    { from: 'from-pink-50', to: 'to-fuchsia-50', svg: '/shapes/graphic.svg' },
];

export default function WhyUs() {
    const t = useTranslations('WhyUs')
    const locale = useLocale()
    return (
        <section className="py-16 bg-gray-50" id="whyus">
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
                                لماذا <span className="font-semibold text-red-600">الاسكندرية للبرمجة</span>؟
                            </>
                        ) : (
                            <>
                                Why <span className="font-semibold text-red-600">Alex4Prog</span>?
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
