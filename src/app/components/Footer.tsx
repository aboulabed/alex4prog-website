'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("footer");
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="py-16 bg-[#edeef0] dark:bg-gray-950 text-gray-800 dark:text-gray-200"
        >
            <div className="container mx-auto px-6">
                <div className="border-b border-gray-300 dark:border-gray-700 pb-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Social Icons Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false }}
                            className="col-span-1 md:col-span-2"
                        >
                            <div className="text-base font-bold text-gray-900 flex items-center gap-2">
                                <img
                                    src="https://www.alex4prog.com/wp-content/uploads/2022/09/AfP-simlified-Logo-layers2.ai_-300x169.png"
                                    alt="Logo"
                                    className="max-h-18"
                                />
                            </div>
                            <div className="flex items-center space-x-5 mx-6 mt-1">
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-500 transition-colors"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-500 transition-colors"
                                >
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-500 transition-colors"
                                >
                                    <FaYoutube className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Company Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: false }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg font-semibold">{t("company")}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#services" className="hover:text-gray-500 transition-colors">{t("services")}</a></li>
                                <li><a href="#projects" className="hover:text-gray-500 transition-colors">{t("projects")}</a></li>
                                <li><a href="#whyus" className="hover:text-gray-500 transition-colors">{t("whyus")}</a></li>
                            </ul>
                        </motion.div>

                        {/* Contact Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: false }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg font-semibold">{t("contact")}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">{t("linkedin")}</a></li>
                                <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">{t("youtube")}</a></li>
                                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">{t("facebook")}</a></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: false }}
                    className="text-sm text-center"
                >
                    <p>{t("copyright", { year: currentYear })}</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
