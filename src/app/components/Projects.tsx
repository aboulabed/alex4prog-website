'use client';
import Link from 'next/link';
import Card from './Card'
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'motion/react';

const projects = [
    {
        title: 'Web Design',
        description: 'We provide professional website design services compatible with all devices. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
    },
    {
        title: 'App Development',
        description: 'We develop modern applications using the latest technologies. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: 'We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: 'We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. We help improve your website’s ranking in search engine results. ',
    },
];

const variants = [
    { from: 'from-orange-50', to: 'to-rose-50', svg: '/shapes/pc.svg' },
    { from: 'from-violet-50', to: 'to-purple-50', svg: '/shapes/mobile.svg' },
    { from: 'from-green-50', to: 'to-emerald-50', svg: '/shapes/web.svg' },
    { from: 'from-pink-50', to: 'to-fuchsia-50', svg: '/shapes/graphic.svg' },
];

export default function Projects() {
    const t = useTranslations('Projects')
    const locale = useLocale()
    return (
        <section className="py-16 bg-gray-50" id="projects">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <Card
                                title={project.title}
                                description={project.description}
                                svgSrc={variants[i % variants.length].svg}
                                gradientFrom={variants[i % variants.length].from}
                                gradientTo={variants[i % variants.length].to}
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
                        href="/projects"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Show All Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
