'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import {
    FaEnvelope,   // Mail  
    FaPhone,      // Phone  
    FaMapMarkerAlt, // MapPin  
    FaPaperPlane, // Send  
    FaBuilding,   // Building  
    FaUser,       // User  
    FaCommentDots,// MessageSquare  
    FaFont        // Type (represents text/font)  
} from "react-icons/fa";

import Heading from './Heading';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
    const t = useTranslations('ContactUs');

    const contactDetails = [
        {
            icon: <FaMapMarkerAlt size={24} className="text-indigo-600" />,
            title: t('location'),
            info: 'Alexandria - Egypt',
        },
        {
            icon: <FaEnvelope size={24} className="text-indigo-600" />,
            title: t('email'),
            info: 'admin@gmail.com',
        },
        {
            icon: <FaPhone size={24} className="text-indigo-600" />,
            title: t('callUs'),
            info: '+20 1000335080',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <Heading
                    title={t('title')}
                    description={t('description')}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-black/5 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('formTitle')}</h3>
                        <p className="text-gray-600 mb-6">{t('formDescription')}</p>
                        <form className="space-y-4 flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input placeholder={t('name')} className="pl-10" />
                                </div>
                                <div className="relative">
                                    <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input placeholder={t('company')} className="pl-10" />
                                </div>
                                <div className="relative">
                                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input type="tel" placeholder={t('phone')} className="pl-10" />
                                </div>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input type="email" placeholder={t('email')} className="pl-10" />
                                </div>
                            </div>
                            <div className="relative">
                                <FaFont className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input placeholder={t('subject')} className="pl-10" />
                            </div>
                            <div className="relative">
                                <FaCommentDots className="absolute left-3 top-5 h-5 w-5 text-gray-400" />
                                <Textarea placeholder={t('message')} className="pl-10 pt-4" rows={5} />
                            </div>
                            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                                <FaPaperPlane size={18} />
                                {t('sendMessage')}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-black/5 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('infoTitle')}</h3>
                        <p className="text-gray-600 mb-6">{t('infoDescription')}</p>
                        <div className="space-y-6 flex-1">
                            {contactDetails.map((detail, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-black/5">
                                    <div className="bg-indigo-100 p-3 rounded-full">
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{detail.title}</h4>
                                        <p className="text-gray-600">{detail.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: false }}
                    className="mt-16"
                >
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border border-black/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.1508014148208!2d29.95699737108231!3d31.229307808390722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5dac95e511043%3A0xe5a151e8fef4bf36!2z2LTYsdmD2Kkg2KfYs9mD2YbYr9ix2YrYqSDZhNio2LHZhdis2Kkg2Ygg2KrYtdmF2YrZhSDYqti32KjZitmC2KfYqiDYp9mE2KzZiNin2YQ!5e0!3m2!1sar!2seg!4v1756888607554!5m2!1sar!2seg"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;